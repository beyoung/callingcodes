import type { APIRoute } from 'astro';
import { getCountryByCode } from '../../../data/calling-codes';
import { WikipediaService, COUNTRY_TIMEZONES } from '../../../utils/wikipedia';

export const GET: APIRoute = async ({ params, request }) => {
  const { code } = params;
  
  if (!code) {
    return new Response(JSON.stringify({ error: 'Country code is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    // 获取国家基本信息
    const country = getCountryByCode(code.toUpperCase());
    
    if (!country) {
      return new Response(JSON.stringify({ error: 'Country not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // 获取Wikipedia信息
    const wikipediaInfo = await WikipediaService.getCountryInfo(country.name);
    
    // 获取时间信息
    const timezone = COUNTRY_TIMEZONES[country.iso2] || 'UTC';
    const timeInfo = await WikipediaService.getCountryTime(timezone);
    
    // 构建响应数据
    const responseData = {
      country: {
        ...country,
        timezone,
      },
      wikipedia: wikipediaInfo,
      time: timeInfo,
      flag: `https://flagcdn.com/w320/${country.iso2.toLowerCase()}.png`,
    };

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // 缓存1小时
      },
    });
  } catch (error) {
    console.error('Error fetching country data:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};