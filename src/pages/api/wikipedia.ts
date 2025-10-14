import type { APIRoute } from 'astro';
import { WikipediaService } from '../../utils/wikipedia';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const country = url.searchParams.get('country');

  if (!country) {
    return new Response(JSON.stringify({ error: 'Country parameter is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const wikipediaInfo = await WikipediaService.getCountryInfo(country);
    
    return new Response(JSON.stringify(wikipediaInfo), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=86400', // 缓存1小时
      },
    });
  } catch (error) {
    console.error('Error fetching Wikipedia info:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};