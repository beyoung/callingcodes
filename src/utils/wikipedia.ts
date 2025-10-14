export interface WikipediaInfo {
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  pageUrl: string;
}

export interface CountryTimeInfo {
  timezone: string;
  currentTime: string;
  utcOffset: string;
}

export class WikipediaService {
  private static readonly BASE_URL = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
  private static readonly SEARCH_URL = 'https://en.wikipedia.org/w/api.php';

  static async getCountryInfo(countryName: string): Promise<WikipediaInfo | null> {
    try {
      // 首先搜索最相关的页面
      const searchResponse = await fetch(
        `${this.SEARCH_URL}?action=query&format=json&list=search&srsearch=${encodeURIComponent(countryName)}&srlimit=1&origin=*`,
        {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'CallingCodesMap/1.0'
          }
        }
      );
      
      if (!searchResponse.ok) {
        throw new Error(`Search failed: ${searchResponse.status}`);
      }
      
      const searchData = await searchResponse.json();
      const searchResults = searchData.query?.search;
      
      if (!searchResults || searchResults.length === 0) {
        return null;
      }
      
      const pageTitle = searchResults[0].title;
      
      // 获取页面摘要
      const summaryResponse = await fetch(`${this.BASE_URL}${encodeURIComponent(pageTitle)}`, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'CallingCodesMap/1.0'
        }
      });
      
      if (!summaryResponse.ok) {
        throw new Error(`Summary fetch failed: ${summaryResponse.status}`);
      }
      
      const summaryData = await summaryResponse.json();
      
      return {
        title: summaryData.title,
        extract: summaryData.extract || '暂无描述信息',
        thumbnail: summaryData.thumbnail,
        pageUrl: summaryData.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(pageTitle)}`
      };
    } catch (error) {
      console.error('Error fetching Wikipedia info:', error);
      return null;
    }
  }

  static async getCountryTime(timezone: string): Promise<CountryTimeInfo | null> {
    try {
      // 使用HTTPS的世界时间API获取当前时间
      const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'CallingCodesMap/1.0'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Time API failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      // 使用API返回的时间数据，格式化为英文显示
      const dateTime = new Date(data.datetime);
      
      return {
        timezone: data.timezone,
        currentTime: dateTime.toLocaleString('en-US', {
          timeZone: timezone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZoneName: 'short'
        }),
        utcOffset: data.utc_offset
      };
    } catch (error) {
      console.error('Error fetching time info:', error);
      // 如果API失败，使用JavaScript内置时区计算作为回退
      try {
        const now = new Date();
        
        // 计算UTC偏移量
        const utcOffset = this.calculateUtcOffset(timezone, now);
        
        return {
          timezone: timezone,
          currentTime: now.toLocaleString('en-US', {
            timeZone: timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZoneName: 'short'
          }),
          utcOffset: utcOffset
        };
      } catch (fallbackError) {
        console.error('Fallback time calculation failed:', fallbackError);
        return null;
      }
    }
  }

  // 计算时区的UTC偏移量
  private static calculateUtcOffset(timezone: string, date: Date): string {
    try {
      // 获取指定时区的时间
      const timeInTimezone = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
      // 获取UTC时间
      const timeInUTC = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
      
      // 计算偏移量（分钟）
      const offsetMinutes = (timeInTimezone.getTime() - timeInUTC.getTime()) / (1000 * 60);
      
      // 转换为小时和分钟
      const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
      const offsetMins = Math.abs(offsetMinutes) % 60;
      
      // 格式化为 +HH:MM 或 -HH:MM
      const sign = offsetMinutes >= 0 ? '+' : '-';
      const formattedOffset = `${sign}${offsetHours.toString().padStart(2, '0')}:${offsetMins.toString().padStart(2, '0')}`;
      
      return formattedOffset;
    } catch (error) {
      console.error('Error calculating UTC offset:', error);
      return 'N/A';
    }
  }
}

// 时区映射表（主要国家的主要时区）
export const COUNTRY_TIMEZONES: Record<string, string> = {
  'US': 'America/New_York',
  'CA': 'America/Toronto',
  'GB': 'Europe/London',
  'FR': 'Europe/Paris',
  'DE': 'Europe/Berlin',
  'IT': 'Europe/Rome',
  'ES': 'Europe/Madrid',
  'RU': 'Europe/Moscow',
  'CN': 'Asia/Shanghai',
  'JP': 'Asia/Tokyo',
  'KR': 'Asia/Seoul',
  'IN': 'Asia/Kolkata',
  'AU': 'Australia/Sydney',
  'BR': 'America/Sao_Paulo',
  'MX': 'America/Mexico_City',
  'AR': 'America/Argentina/Buenos_Aires',
  'EG': 'Africa/Cairo',
  'ZA': 'Africa/Johannesburg',
  'NG': 'Africa/Lagos',
  'KE': 'Africa/Nairobi',
  'TH': 'Asia/Bangkok',
  'SG': 'Asia/Singapore',
  'MY': 'Asia/Kuala_Lumpur',
  'ID': 'Asia/Jakarta',
  'PH': 'Asia/Manila',
  'VN': 'Asia/Ho_Chi_Minh',
  'TR': 'Europe/Istanbul',
  'SA': 'Asia/Riyadh',
  'AE': 'Asia/Dubai',
  'IL': 'Asia/Jerusalem',
  'NZ': 'Pacific/Auckland',
  'FJ': 'Pacific/Fiji',
  'CL': 'America/Santiago',
  'PE': 'America/Lima',
  'CO': 'America/Bogota',
  'VE': 'America/Caracas',
  'UY': 'America/Montevideo',
  'PY': 'America/Asuncion',
  'BO': 'America/La_Paz',
  'EC': 'America/Guayaquil',
  'NO': 'Europe/Oslo',
  'SE': 'Europe/Stockholm',
  'DK': 'Europe/Copenhagen',
  'FI': 'Europe/Helsinki',
  'NL': 'Europe/Amsterdam',
  'BE': 'Europe/Brussels',
  'CH': 'Europe/Zurich',
  'AT': 'Europe/Vienna',
  'PL': 'Europe/Warsaw',
  'CZ': 'Europe/Prague',
  'HU': 'Europe/Budapest',
  'GR': 'Europe/Athens',
  'PT': 'Europe/Lisbon',
  'IE': 'Europe/Dublin',
  'IS': 'Atlantic/Reykjavik',
  'UA': 'Europe/Kiev',
  'RO': 'Europe/Bucharest',
  'BG': 'Europe/Sofia',
  'HR': 'Europe/Zagreb',
  'RS': 'Europe/Belgrade',
  'SI': 'Europe/Ljubljana',
  'SK': 'Europe/Bratislava',
  'LT': 'Europe/Vilnius',
  'LV': 'Europe/Riga',
  'EE': 'Europe/Tallinn'
};