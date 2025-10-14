export interface CountryCallingCode {
  code: string;
  name: string;
  nameZh: string;
  callingCode: string;
  region: string;
  iso2: string;
  iso3: string;
  timezone?: string;
  capital?: string;
  currency?: string;
  languages?: string[];
  population?: number;
  area?: number;
}

export const callingCodes: CountryCallingCode[] = [
  // North America (+1)
  { code: "US", name: "United States", nameZh: "美国", callingCode: "+1", region: "North America", iso2: "US", iso3: "USA" },
  { code: "CA", name: "Canada", nameZh: "加拿大", callingCode: "+1", region: "North America", iso2: "CA", iso3: "CAN" },
  
  // Africa (+2)
  { code: "EG", name: "Egypt", nameZh: "埃及", callingCode: "+20", region: "Africa", iso2: "EG", iso3: "EGY" },
  { code: "ZA", name: "South Africa", nameZh: "南非", callingCode: "+27", region: "Africa", iso2: "ZA", iso3: "ZAF" },
  { code: "MA", name: "Morocco", nameZh: "摩洛哥", callingCode: "+212", region: "Africa", iso2: "MA", iso3: "MAR" },
  { code: "DZ", name: "Algeria", nameZh: "阿尔及利亚", callingCode: "+213", region: "Africa", iso2: "DZ", iso3: "DZA" },
  { code: "TN", name: "Tunisia", nameZh: "突尼斯", callingCode: "+216", region: "Africa", iso2: "TN", iso3: "TUN" },
  { code: "LY", name: "Libya", nameZh: "利比亚", callingCode: "+218", region: "Africa", iso2: "LY", iso3: "LBY" },
  { code: "GM", name: "Gambia", nameZh: "冈比亚", callingCode: "+220", region: "Africa", iso2: "GM", iso3: "GMB" },
  { code: "SN", name: "Senegal", nameZh: "塞内加尔", callingCode: "+221", region: "Africa", iso2: "SN", iso3: "SEN" },
  { code: "MR", name: "Mauritania", nameZh: "毛里塔尼亚", callingCode: "+222", region: "Africa", iso2: "MR", iso3: "MRT" },
  { code: "ML", name: "Mali", nameZh: "马里", callingCode: "+223", region: "Africa", iso2: "ML", iso3: "MLI" },
  { code: "GN", name: "Guinea", nameZh: "几内亚", callingCode: "+224", region: "Africa", iso2: "GN", iso3: "GIN" },
  { code: "CI", name: "Ivory Coast", nameZh: "科特迪瓦", callingCode: "+225", region: "Africa", iso2: "CI", iso3: "CIV" },
  { code: "BF", name: "Burkina Faso", nameZh: "布基纳法索", callingCode: "+226", region: "Africa", iso2: "BF", iso3: "BFA" },
  { code: "NE", name: "Niger", nameZh: "尼日尔", callingCode: "+227", region: "Africa", iso2: "NE", iso3: "NER" },
  { code: "TD", name: "Chad", nameZh: "乍得", callingCode: "+235", region: "Africa", iso2: "TD", iso3: "TCD" },
  { code: "CF", name: "Central African Republic", nameZh: "中非共和国", callingCode: "+236", region: "Africa", iso2: "CF", iso3: "CAF" },
  { code: "CM", name: "Cameroon", nameZh: "喀麦隆", callingCode: "+237", region: "Africa", iso2: "CM", iso3: "CMR" },
  { code: "CV", name: "Cape Verde", nameZh: "佛得角", callingCode: "+238", region: "Africa", iso2: "CV", iso3: "CPV" },
  { code: "ST", name: "São Tomé and Príncipe", nameZh: "圣多美和普林西比", callingCode: "+239", region: "Africa", iso2: "ST", iso3: "STP" },
  { code: "GQ", name: "Equatorial Guinea", nameZh: "赤道几内亚", callingCode: "+240", region: "Africa", iso2: "GQ", iso3: "GNQ" },
  { code: "GA", name: "Gabon", nameZh: "加蓬", callingCode: "+241", region: "Africa", iso2: "GA", iso3: "GAB" },
  { code: "CG", name: "Republic of the Congo", nameZh: "刚果共和国", callingCode: "+242", region: "Africa", iso2: "CG", iso3: "COG" },
  { code: "CD", name: "Democratic Republic of the Congo", nameZh: "刚果民主共和国", callingCode: "+243", region: "Africa", iso2: "CD", iso3: "COD" },
  { code: "AO", name: "Angola", nameZh: "安哥拉", callingCode: "+244", region: "Africa", iso2: "AO", iso3: "AGO" },
  { code: "GW", name: "Guinea-Bissau", nameZh: "几内亚比绍", callingCode: "+245", region: "Africa", iso2: "GW", iso3: "GNB" },
  { code: "SC", name: "Seychelles", nameZh: "塞舌尔", callingCode: "+248", region: "Africa", iso2: "SC", iso3: "SYC" },
  { code: "SD", name: "Sudan", nameZh: "苏丹", callingCode: "+249", region: "Africa", iso2: "SD", iso3: "SDN" },
  { code: "RW", name: "Rwanda", nameZh: "卢旺达", callingCode: "+250", region: "Africa", iso2: "RW", iso3: "RWA" },
  { code: "ET", name: "Ethiopia", nameZh: "埃塞俄比亚", callingCode: "+251", region: "Africa", iso2: "ET", iso3: "ETH" },
  { code: "SO", name: "Somalia", nameZh: "索马里", callingCode: "+252", region: "Africa", iso2: "SO", iso3: "SOM" },
  { code: "DJ", name: "Djibouti", nameZh: "吉布提", callingCode: "+253", region: "Africa", iso2: "DJ", iso3: "DJI" },
  { code: "KE", name: "Kenya", nameZh: "肯尼亚", callingCode: "+254", region: "Africa", iso2: "KE", iso3: "KEN" },
  { code: "TZ", name: "Tanzania", nameZh: "坦桑尼亚", callingCode: "+255", region: "Africa", iso2: "TZ", iso3: "TZA" },
  { code: "UG", name: "Uganda", nameZh: "乌干达", callingCode: "+256", region: "Africa", iso2: "UG", iso3: "UGA" },
  { code: "BI", name: "Burundi", nameZh: "布隆迪", callingCode: "+257", region: "Africa", iso2: "BI", iso3: "BDI" },
  { code: "MZ", name: "Mozambique", nameZh: "莫桑比克", callingCode: "+258", region: "Africa", iso2: "MZ", iso3: "MOZ" },
  { code: "ZM", name: "Zambia", nameZh: "赞比亚", callingCode: "+260", region: "Africa", iso2: "ZM", iso3: "ZMB" },
  { code: "MG", name: "Madagascar", nameZh: "马达加斯加", callingCode: "+261", region: "Africa", iso2: "MG", iso3: "MDG" },
  { code: "MU", name: "Mauritius", nameZh: "毛里求斯", callingCode: "+230", region: "Africa", iso2: "MU", iso3: "MUS" },
  { code: "MW", name: "Malawi", nameZh: "马拉维", callingCode: "+265", region: "Africa", iso2: "MW", iso3: "MWI" },
  { code: "LS", name: "Lesotho", nameZh: "莱索托", callingCode: "+266", region: "Africa", iso2: "LS", iso3: "LSO" },
  { code: "BW", name: "Botswana", nameZh: "博茨瓦纳", callingCode: "+267", region: "Africa", iso2: "BW", iso3: "BWA" },
  { code: "SZ", name: "Eswatini", nameZh: "斯威士兰", callingCode: "+268", region: "Africa", iso2: "SZ", iso3: "SWZ" },
  { code: "KM", name: "Comoros", nameZh: "科摩罗", callingCode: "+269", region: "Africa", iso2: "KM", iso3: "COM" },
  
  // Western/Southern Europe (+3)
  { code: "GR", name: "Greece", nameZh: "希腊", callingCode: "+30", region: "Europe", iso2: "GR", iso3: "GRC" },
  { code: "NL", name: "Netherlands", nameZh: "荷兰", callingCode: "+31", region: "Europe", iso2: "NL", iso3: "NLD" },
  { code: "BE", name: "Belgium", nameZh: "比利时", callingCode: "+32", region: "Europe", iso2: "BE", iso3: "BEL" },
  { code: "FR", name: "France", nameZh: "法国", callingCode: "+33", region: "Europe", iso2: "FR", iso3: "FRA" },
  { code: "ES", name: "Spain", nameZh: "西班牙", callingCode: "+34", region: "Europe", iso2: "ES", iso3: "ESP" },
  { code: "GI", name: "Gibraltar", nameZh: "直布罗陀", callingCode: "+350", region: "Europe", iso2: "GI", iso3: "GIB" },
  { code: "PT", name: "Portugal", nameZh: "葡萄牙", callingCode: "+351", region: "Europe", iso2: "PT", iso3: "PRT" },
  { code: "LU", name: "Luxembourg", nameZh: "卢森堡", callingCode: "+352", region: "Europe", iso2: "LU", iso3: "LUX" },
  { code: "IE", name: "Ireland", nameZh: "爱尔兰", callingCode: "+353", region: "Europe", iso2: "IE", iso3: "IRL" },
  { code: "IS", name: "Iceland", nameZh: "冰岛", callingCode: "+354", region: "Europe", iso2: "IS", iso3: "ISL" },
  { code: "AL", name: "Albania", nameZh: "阿尔巴尼亚", callingCode: "+355", region: "Europe", iso2: "AL", iso3: "ALB" },
  { code: "MT", name: "Malta", nameZh: "马耳他", callingCode: "+356", region: "Europe", iso2: "MT", iso3: "MLT" },
  { code: "CY", name: "Cyprus", nameZh: "塞浦路斯", callingCode: "+357", region: "Europe", iso2: "CY", iso3: "CYP" },
  { code: "FI", name: "Finland", nameZh: "芬兰", callingCode: "+358", region: "Europe", iso2: "FI", iso3: "FIN" },
  { code: "BG", name: "Bulgaria", nameZh: "保加利亚", callingCode: "+359", region: "Europe", iso2: "BG", iso3: "BGR" },
  
  // Northern/Central Europe (+4)
  { code: "DK", name: "Denmark", nameZh: "丹麦", callingCode: "+45", region: "Europe", iso2: "DK", iso3: "DNK" },
  { code: "SE", name: "Sweden", nameZh: "瑞典", callingCode: "+46", region: "Europe", iso2: "SE", iso3: "SWE" },
  { code: "NO", name: "Norway", nameZh: "挪威", callingCode: "+47", region: "Europe", iso2: "NO", iso3: "NOR" },
  { code: "PL", name: "Poland", nameZh: "波兰", callingCode: "+48", region: "Europe", iso2: "PL", iso3: "POL" },
  { code: "DE", name: "Germany", nameZh: "德国", callingCode: "+49", region: "Europe", iso2: "DE", iso3: "DEU" },
  
  // South/Central America (+5)
  { code: "PE", name: "Peru", nameZh: "秘鲁", callingCode: "+51", region: "South America", iso2: "PE", iso3: "PER" },
  { code: "MX", name: "Mexico", nameZh: "墨西哥", callingCode: "+52", region: "North America", iso2: "MX", iso3: "MEX" },
  { code: "CU", name: "Cuba", nameZh: "古巴", callingCode: "+53", region: "North America", iso2: "CU", iso3: "CUB" },
  { code: "AR", name: "Argentina", nameZh: "阿根廷", callingCode: "+54", region: "South America", iso2: "AR", iso3: "ARG" },
  { code: "BR", name: "Brazil", nameZh: "巴西", callingCode: "+55", region: "South America", iso2: "BR", iso3: "BRA" },
  { code: "CL", name: "Chile", nameZh: "智利", callingCode: "+56", region: "South America", iso2: "CL", iso3: "CHL" },
  { code: "CO", name: "Colombia", nameZh: "哥伦比亚", callingCode: "+57", region: "South America", iso2: "CO", iso3: "COL" },
  { code: "VE", name: "Venezuela", nameZh: "委内瑞拉", callingCode: "+58", region: "South America", iso2: "VE", iso3: "VEN" },
  { code: "GY", name: "Guyana", nameZh: "圭亚那", callingCode: "+592", region: "South America", iso2: "GY", iso3: "GUY" },
  { code: "EC", name: "Ecuador", nameZh: "厄瓜多尔", callingCode: "+593", region: "South America", iso2: "EC", iso3: "ECU" },
  { code: "GF", name: "French Guiana", nameZh: "法属圭亚那", callingCode: "+594", region: "South America", iso2: "GF", iso3: "GUF" },
  { code: "PY", name: "Paraguay", nameZh: "巴拉圭", callingCode: "+595", region: "South America", iso2: "PY", iso3: "PRY" },
  { code: "BO", name: "Bolivia", nameZh: "玻利维亚", callingCode: "+591", region: "South America", iso2: "BO", iso3: "BOL" },
  { code: "UY", name: "Uruguay", nameZh: "乌拉圭", callingCode: "+598", region: "South America", iso2: "UY", iso3: "URY" },
  
  // Oceania (+6)
  { code: "AU", name: "Australia", nameZh: "澳大利亚", callingCode: "+61", region: "Oceania", iso2: "AU", iso3: "AUS" },
  { code: "NZ", name: "New Zealand", nameZh: "新西兰", callingCode: "+64", region: "Oceania", iso2: "NZ", iso3: "NZL" },
  { code: "FJ", name: "Fiji", nameZh: "斐济", callingCode: "+679", region: "Oceania", iso2: "FJ", iso3: "FJI" },
  { code: "PG", name: "Papua New Guinea", nameZh: "巴布亚新几内亚", callingCode: "+675", region: "Oceania", iso2: "PG", iso3: "PNG" },
  { code: "TO", name: "Tonga", nameZh: "汤加", callingCode: "+676", region: "Oceania", iso2: "TO", iso3: "TON" },
  { code: "SB", name: "Solomon Islands", nameZh: "所罗门群岛", callingCode: "+677", region: "Oceania", iso2: "SB", iso3: "SLB" },
  { code: "VU", name: "Vanuatu", nameZh: "瓦努阿图", callingCode: "+678", region: "Oceania", iso2: "VU", iso3: "VUT" },
  { code: "WS", name: "Samoa", nameZh: "萨摩亚", callingCode: "+685", region: "Oceania", iso2: "WS", iso3: "WSM" },
  { code: "KI", name: "Kiribati", nameZh: "基里巴斯", callingCode: "+686", region: "Oceania", iso2: "KI", iso3: "KIR" },
  { code: "NC", name: "New Caledonia", nameZh: "新喀里多尼亚", callingCode: "+687", region: "Oceania", iso2: "NC", iso3: "NCL" },
  { code: "TV", name: "Tuvalu", nameZh: "图瓦卢", callingCode: "+688", region: "Oceania", iso2: "TV", iso3: "TUV" },
  { code: "PF", name: "French Polynesia", nameZh: "法属波利尼西亚", callingCode: "+689", region: "Oceania", iso2: "PF", iso3: "PYF" },
  { code: "TK", name: "Tokelau", nameZh: "托克劳", callingCode: "+690", region: "Oceania", iso2: "TK", iso3: "TKL" },
  { code: "FM", name: "Micronesia", nameZh: "密克罗尼西亚", callingCode: "+691", region: "Oceania", iso2: "FM", iso3: "FSM" },
  { code: "MH", name: "Marshall Islands", nameZh: "马绍尔群岛", callingCode: "+692", region: "Oceania", iso2: "MH", iso3: "MHL" },
  
  // Russia/Kazakhstan (+7)
  { code: "RU", name: "Russia", nameZh: "俄罗斯", callingCode: "+7", region: "Asia", iso2: "RU", iso3: "RUS" },
  { code: "KZ", name: "Kazakhstan", nameZh: "哈萨克斯坦", callingCode: "+7", region: "Asia", iso2: "KZ", iso3: "KAZ" },
  
  // East Asia (+8)
  { code: "JP", name: "Japan", nameZh: "日本", callingCode: "+81", region: "Asia", iso2: "JP", iso3: "JPN" },
  { code: "KR", name: "South Korea", nameZh: "韩国", callingCode: "+82", region: "Asia", iso2: "KR", iso3: "KOR" },
  { code: "VN", name: "Vietnam", nameZh: "越南", callingCode: "+84", region: "Asia", iso2: "VN", iso3: "VNM" },
  { code: "KP", name: "North Korea", nameZh: "朝鲜", callingCode: "+850", region: "Asia", iso2: "KP", iso3: "PRK" },
  { code: "HK", name: "Hong Kong", nameZh: "香港", callingCode: "+852", region: "Asia", iso2: "HK", iso3: "HKG" },
  { code: "MO", name: "Macau", nameZh: "澳门", callingCode: "+853", region: "Asia", iso2: "MO", iso3: "MAC" },
  { code: "KH", name: "Cambodia", nameZh: "柬埔寨", callingCode: "+855", region: "Asia", iso2: "KH", iso3: "KHM" },
  { code: "LA", name: "Laos", nameZh: "老挝", callingCode: "+856", region: "Asia", iso2: "LA", iso3: "LAO" },
  { code: "CN", name: "China", nameZh: "中国", callingCode: "+86", region: "Asia", iso2: "CN", iso3: "CHN" },
  { code: "BD", name: "Bangladesh", nameZh: "孟加拉国", callingCode: "+880", region: "Asia", iso2: "BD", iso3: "BGD" },
  // { code: "CN-TW", name: "Taiwan", nameZh: "台湾", callingCode: "+886", region: "Asia", iso2: "TW", iso3: "TWN" },
  
  // West Asia (+9)
  { code: "TR", name: "Turkey", nameZh: "土耳其", callingCode: "+90", region: "Asia", iso2: "TR", iso3: "TUR" },
  { code: "IN", name: "India", nameZh: "印度", callingCode: "+91", region: "Asia", iso2: "IN", iso3: "IND" },
  { code: "PK", name: "Pakistan", nameZh: "巴基斯坦", callingCode: "+92", region: "Asia", iso2: "PK", iso3: "PAK" },
  { code: "AF", name: "Afghanistan", nameZh: "阿富汗", callingCode: "+93", region: "Asia", iso2: "AF", iso3: "AFG" },
  { code: "LK", name: "Sri Lanka", nameZh: "斯里兰卡", callingCode: "+94", region: "Asia", iso2: "LK", iso3: "LKA" },
  { code: "MM", name: "Myanmar", nameZh: "缅甸", callingCode: "+95", region: "Asia", iso2: "MM", iso3: "MMR" },
  { code: "MV", name: "Maldives", nameZh: "马尔代夫", callingCode: "+960", region: "Asia", iso2: "MV", iso3: "MDV" },
  { code: "LB", name: "Lebanon", nameZh: "黎巴嫩", callingCode: "+961", region: "Asia", iso2: "LB", iso3: "LBN" },
  { code: "JO", name: "Jordan", nameZh: "约旦", callingCode: "+962", region: "Asia", iso2: "JO", iso3: "JOR" },
  { code: "SY", name: "Syria", nameZh: "叙利亚", callingCode: "+963", region: "Asia", iso2: "SY", iso3: "SYR" },
  { code: "IQ", name: "Iraq", nameZh: "伊拉克", callingCode: "+964", region: "Asia", iso2: "IQ", iso3: "IRQ" },
  { code: "KW", name: "Kuwait", nameZh: "科威特", callingCode: "+965", region: "Asia", iso2: "KW", iso3: "KWT" },
  { code: "SA", name: "Saudi Arabia", nameZh: "沙特阿拉伯", callingCode: "+966", region: "Asia", iso2: "SA", iso3: "SAU" },
  { code: "YE", name: "Yemen", nameZh: "也门", callingCode: "+967", region: "Asia", iso2: "YE", iso3: "YEM" },
  { code: "OM", name: "Oman", nameZh: "阿曼", callingCode: "+968", region: "Asia", iso2: "OM", iso3: "OMN" },
  { code: "PS", name: "Palestine", nameZh: "巴勒斯坦", callingCode: "+970", region: "Asia", iso2: "PS", iso3: "PSE" },
  { code: "AE", name: "United Arab Emirates", nameZh: "阿联酋", callingCode: "+971", region: "Asia", iso2: "AE", iso3: "ARE" },
  { code: "IL", name: "Israel", nameZh: "以色列", callingCode: "+972", region: "Asia", iso2: "IL", iso3: "ISR" },
  { code: "BH", name: "Bahrain", nameZh: "巴林", callingCode: "+973", region: "Asia", iso2: "BH", iso3: "BHR" },
  { code: "QA", name: "Qatar", nameZh: "卡塔尔", callingCode: "+974", region: "Asia", iso2: "QA", iso3: "QAT" },
  { code: "BT", name: "Bhutan", nameZh: "不丹", callingCode: "+975", region: "Asia", iso2: "BT", iso3: "BTN" },
  { code: "MN", name: "Mongolia", nameZh: "蒙古", callingCode: "+976", region: "Asia", iso2: "MN", iso3: "MNG" },
  { code: "NP", name: "Nepal", nameZh: "尼泊尔", callingCode: "+977", region: "Asia", iso2: "NP", iso3: "NPL" },
  { code: "IR", name: "Iran", nameZh: "伊朗", callingCode: "+98", region: "Asia", iso2: "IR", iso3: "IRN" },
  { code: "TJ", name: "Tajikistan", nameZh: "塔吉克斯坦", callingCode: "+992", region: "Asia", iso2: "TJ", iso3: "TJK" },
  { code: "TM", name: "Turkmenistan", nameZh: "土库曼斯坦", callingCode: "+993", region: "Asia", iso2: "TM", iso3: "TKM" },
  { code: "AZ", name: "Azerbaijan", nameZh: "阿塞拜疆", callingCode: "+994", region: "Asia", iso2: "AZ", iso3: "AZE" },
  { code: "GE", name: "Georgia", nameZh: "格鲁吉亚", callingCode: "+995", region: "Asia", iso2: "GE", iso3: "GEO" },
  { code: "KG", name: "Kyrgyzstan", nameZh: "吉尔吉斯斯坦", callingCode: "+996", region: "Asia", iso2: "KG", iso3: "KGZ" },
  { code: "UZ", name: "Uzbekistan", nameZh: "乌兹别克斯坦", callingCode: "+998", region: "Asia", iso2: "UZ", iso3: "UZB" },
  
  // Southeast Asia
  { code: "TH", name: "Thailand", nameZh: "泰国", callingCode: "+66", region: "Asia", iso2: "TH", iso3: "THA" },
  { code: "MY", name: "Malaysia", nameZh: "马来西亚", callingCode: "+60", region: "Asia", iso2: "MY", iso3: "MYS" },
  { code: "SG", name: "Singapore", nameZh: "新加坡", callingCode: "+65", region: "Asia", iso2: "SG", iso3: "SGP" },
  { code: "PH", name: "Philippines", nameZh: "菲律宾", callingCode: "+63", region: "Asia", iso2: "PH", iso3: "PHL" },
  { code: "ID", name: "Indonesia", nameZh: "印度尼西亚", callingCode: "+62", region: "Asia", iso2: "ID", iso3: "IDN" },
  { code: "BN", name: "Brunei", nameZh: "文莱", callingCode: "+673", region: "Asia", iso2: "BN", iso3: "BRN" },
  { code: "TL", name: "East Timor", nameZh: "东帝汶", callingCode: "+670", region: "Asia", iso2: "TL", iso3: "TLS" },
  
  // Additional European countries
  { code: "GB", name: "United Kingdom", nameZh: "英国", callingCode: "+44", region: "Europe", iso2: "GB", iso3: "GBR" },
  { code: "IT", name: "Italy", nameZh: "意大利", callingCode: "+39", region: "Europe", iso2: "IT", iso3: "ITA" },
  { code: "RO", name: "Romania", nameZh: "罗马尼亚", callingCode: "+40", region: "Europe", iso2: "RO", iso3: "ROU" },
  { code: "CH", name: "Switzerland", nameZh: "瑞士", callingCode: "+41", region: "Europe", iso2: "CH", iso3: "CHE" },
  { code: "AT", name: "Austria", nameZh: "奥地利", callingCode: "+43", region: "Europe", iso2: "AT", iso3: "AUT" },
  { code: "HU", name: "Hungary", nameZh: "匈牙利", callingCode: "+36", region: "Europe", iso2: "HU", iso3: "HUN" },
  { code: "CZ", name: "Czech Republic", nameZh: "捷克", callingCode: "+420", region: "Europe", iso2: "CZ", iso3: "CZE" },
  { code: "SK", name: "Slovakia", nameZh: "斯洛伐克", callingCode: "+421", region: "Europe", iso2: "SK", iso3: "SVK" },
  { code: "SI", name: "Slovenia", nameZh: "斯洛文尼亚", callingCode: "+386", region: "Europe", iso2: "SI", iso3: "SVN" },
  { code: "HR", name: "Croatia", nameZh: "克罗地亚", callingCode: "+385", region: "Europe", iso2: "HR", iso3: "HRV" },
  { code: "BA", name: "Bosnia and Herzegovina", nameZh: "波黑", callingCode: "+387", region: "Europe", iso2: "BA", iso3: "BIH" },
  { code: "RS", name: "Serbia", nameZh: "塞尔维亚", callingCode: "+381", region: "Europe", iso2: "RS", iso3: "SRB" },
  { code: "ME", name: "Montenegro", nameZh: "黑山", callingCode: "+382", region: "Europe", iso2: "ME", iso3: "MNE" },
  { code: "XK", name: "Kosovo", nameZh: "科索沃", callingCode: "+383", region: "Europe", iso2: "XK", iso3: "XKX" },
  { code: "MK", name: "North Macedonia", nameZh: "北马其顿", callingCode: "+389", region: "Europe", iso2: "MK", iso3: "MKD" },
  { code: "LT", name: "Lithuania", nameZh: "立陶宛", callingCode: "+370", region: "Europe", iso2: "LT", iso3: "LTU" },
  { code: "LV", name: "Latvia", nameZh: "拉脱维亚", callingCode: "+371", region: "Europe", iso2: "LV", iso3: "LVA" },
  { code: "EE", name: "Estonia", nameZh: "爱沙尼亚", callingCode: "+372", region: "Europe", iso2: "EE", iso3: "EST" },
  { code: "MD", name: "Moldova", nameZh: "摩尔多瓦", callingCode: "+373", region: "Europe", iso2: "MD", iso3: "MDA" },
  { code: "AM", name: "Armenia", nameZh: "亚美尼亚", callingCode: "+374", region: "Asia", iso2: "AM", iso3: "ARM" },
  { code: "BY", name: "Belarus", nameZh: "白俄罗斯", callingCode: "+375", region: "Europe", iso2: "BY", iso3: "BLR" },
  { code: "AD", name: "Andorra", nameZh: "安道尔", callingCode: "+376", region: "Europe", iso2: "AD", iso3: "AND" },
  { code: "MC", name: "Monaco", nameZh: "摩纳哥", callingCode: "+377", region: "Europe", iso2: "MC", iso3: "MCO" },
  { code: "SM", name: "San Marino", nameZh: "圣马力诺", callingCode: "+378", region: "Europe", iso2: "SM", iso3: "SMR" },
  { code: "VA", name: "Vatican City", nameZh: "梵蒂冈", callingCode: "+379", region: "Europe", iso2: "VA", iso3: "VAT" },
  { code: "UA", name: "Ukraine", nameZh: "乌克兰", callingCode: "+380", region: "Europe", iso2: "UA", iso3: "UKR" },
  {
    code: "SS",
    name: "South Sudan",
    nameZh: "南苏丹",
    callingCode: "+211",
    region: "Africa",
    iso2: "SS",
    iso3: "SSD"
  },
  {
    code: "SR",
    name: "Suriname",
    nameZh: "苏里南",
    callingCode: "+597",
    region: "South America",
    iso2: "SR",
    iso3: "SUR"
  },
  {
    code: "CR",
    name: "Costa Rica",
    nameZh: "哥斯达黎加",
    callingCode: "+506",
    region: "North America",
    iso2: "CR",
    iso3: "CRI"
  },
  {
    code: "NI",
    name: "Nicaragua",
    nameZh: "尼加拉瓜",
    callingCode: "+505",
    region: "North America",
    iso2: "NI",
    iso3: "NIC"
  },
  {
    code: "NA",
    name: "Namibia",
    nameZh: "纳米比亚",
    callingCode: "+264",
    region: "Africa",
    iso2: "NA",
    iso3: "NAM"
  },
  {
    code: "SL",
    name: "Sierra Leone",
    nameZh: "塞拉利昂",
    callingCode: "+232",
    region: "Africa",
    iso2: "SL",
    iso3: "SLE"
  },
  {
    code: "LR",
    name: "Liberia",
    nameZh: "利比里亚",
    callingCode: "+231",
    region: "Africa",
    iso2: "LR",
    iso3: "LBR"
  },
  {
    code: "ER",
    name: "Eritrea",
    nameZh: "厄立特里亚",
    callingCode: "+291",
    region: "Africa",
    iso2: "ER",
    iso3: "ERI"
  },
  {
    code: "NG",
    name: "Nigeria",
    nameZh: "尼日利亚",
    callingCode: "+234",
    region: "Africa",
    iso2: "NG",
    iso3: "NGA"
  },
  {
    code: "BJ",
    name: "Benin",
    nameZh: "贝宁",
    callingCode: "+229",
    region: "Africa",
    iso2: "BJ",
    iso3: "BEN"
  },
  {
    code: "ZW",
    name: "Zimbabwe",
    nameZh: "津巴布韦",
    callingCode: "+263",
    region: "Africa",
    iso2: "ZW",
    iso3: "ZWE"
  },
  {
    code: "HT",
    name: "Haiti",
    nameZh: "海地",
    callingCode: "+509",
    region: "North America",
    iso2: "HT",
    iso3: "HTI"
  },
  {
    code: "DO",
    name: "Dominican Republic",
    nameZh: "多米尼加共和国",
    callingCode: "+1",
    region: "North America",
    iso2: "DO",
    iso3: "DOM"
  },
  {
    code: "EH",
    name: "Western Sahara",
    nameZh: "西撒哈拉",
    callingCode: "+212",
    region: "Africa",
    iso2: "EH",
    iso3: "ESH"
  },
  {
    code: "BZ",
    name: "Belize",
    nameZh: "伯利兹",
    callingCode: "+501",
    region: "North America",
    iso2: "BZ",
    iso3: "BLZ"
  },
  {
    code: "GT",
    name: "Guatemala",
    nameZh: "危地马拉",
    callingCode: "+502",
    region: "North America",
    iso2: "GT",
    iso3: "GTM"
  },
  {
    code: "SV",
    name: "El Salvador",
    nameZh: "萨尔瓦多",
    callingCode: "+503",
    region: "North America",
    iso2: "SV",
    iso3: "SLV"
  },
  {
    code: "HN",
    name: "Honduras",
    nameZh: "洪都拉斯",
    callingCode: "+504",
    region: "North America",
    iso2: "HN",
    iso3: "HND"
  },
  {
    code: "PA",
    name: "Panama",
    nameZh: "巴拿马",
    callingCode: "+507",
    region: "North America",
    iso2: "PA",
    iso3: "PAN"
  },
  {
    code: "TG",
    name: "Togo",
    nameZh: "多哥",
    callingCode: "+228",
    region: "Africa",
    iso2: "TG",
    iso3: "TGO"
  },
  {
    code: "GH",
    name: "Ghana",
    nameZh: "加纳",
    callingCode: "+233",
    region: "Africa",
    iso2: "GH",
    iso3: "GHA"
  },
  {
    code: "YT",
    name: "Mayotte",
    nameZh: "马约特",
    callingCode: "+262",
    region: "Africa",
    iso2: "YT",
    iso3: "MYT"
  },
  {
    code: "CK",
    name: "Cook Islands",
    nameZh: "库克群岛",
    callingCode: "+682",
    region: "Oceania",
    iso2: "CK",
    iso3: "COK"
  },
  {
    code: "FK",
    name: "Falkland Islands",
    nameZh: "福克兰群岛",
    callingCode: "+500",
    region: "South America",
    iso2: "FK",
    iso3: "FLK"
  },
  {
    code: "GS",
    name: "South Georgia and the South Sandwich Islands",
    nameZh: "南乔治亚岛和南桑威奇群岛",
    callingCode: "+500",
    region: "Antarctica",
    iso2: "GS",
    iso3: "SGS"
  },
  {
    code: "GL",
    name: "Greenland",
    nameZh: "格陵兰",
    callingCode: "+299",
    region: "North America",
    iso2: "GL",
    iso3: "GRL"
  },
  {
    code: "FO",
    name: "Faroe Islands",
    nameZh: "法罗群岛",
    callingCode: "+298",
    region: "Europe",
    iso2: "FO",
    iso3: "FRO"
  },
  {
    code: "AW",
    name: "Aruba",
    nameZh: "阿鲁巴",
    callingCode: "+297",
    region: "North America",
    iso2: "AW",
    iso3: "ABW"
  },
  {
    code: "SH",
    name: "Saint Helena",
    nameZh: "圣赫勒拿",
    callingCode: "+290",
    region: "Africa",
    iso2: "SH",
    iso3: "SHN"
  },
  {
    code: "PM",
    name: "Saint Pierre and Miquelon",
    nameZh: "圣皮埃尔和密克隆",
    callingCode: "+508",
    region: "North America",
    iso2: "PM",
    iso3: "SPM"
  },
  {
    code: "AS",
    name: "American Samoa",
    nameZh: "美属萨摩亚",
    callingCode: "+1",
    region: "Oceania",
    iso2: "AS",
    iso3: "ASM"
  },
  {
    code: "GU",
    name: "Guam",
    nameZh: "关岛",
    callingCode: "+1",
    region: "Oceania",
    iso2: "GU",
    iso3: "GUM"
  },
  {
    code: "MP",
    name: "Northern Mariana Islands",
    nameZh: "北马里亚纳群岛",
    callingCode: "+1",
    region: "Oceania",
    iso2: "MP",
    iso3: "MNP"
  },
  {
    code: "PR",
    name: "Puerto Rico",
    nameZh: "波多黎各",
    callingCode: "+1",
    region: "North America",
    iso2: "PR",
    iso3: "PRI"
  },
  {
    code: "VI",
    name: "U.S. Virgin Islands",
    nameZh: "美属维尔京群岛",
    callingCode: "+1",
    region: "North America",
    iso2: "VI",
    iso3: "VIR"
  },
  {
    code: "NU",
    name: "Niue",
    nameZh: "纽埃",
    callingCode: "+683",
    region: "Oceania",
    iso2: "NU",
    iso3: "NIU"
  },
  {
    code: "NF",
    name: "Norfolk Island",
    nameZh: "诺福克岛",
    callingCode: "+672",
    region: "Oceania",
    iso2: "NF",
    iso3: "NFK"
  },
  {
    code: "PW",
    name: "Palau",
    nameZh: "帕劳",
    callingCode: "+680",
    region: "Oceania",
    iso2: "PW",
    iso3: "PLW"
  },
  {
    code: "NR",
    name: "Nauru",
    nameZh: "瑙鲁",
    callingCode: "+674",
    region: "Oceania",
    iso2: "NR",
    iso3: "NRU"
  }
,
  { code: "AG", name: "Antigua and Barbuda", nameZh: "安提瓜和巴布达", callingCode: "+1", region: "North America", iso2: "AG", iso3: "ATG" },
  { code: "AI", name: "Anguilla", nameZh: "安圭拉", callingCode: "+1", region: "North America", iso2: "AI", iso3: "AIA" },
  { code: "BB", name: "Barbados", nameZh: "巴巴多斯", callingCode: "+1", region: "North America", iso2: "BB", iso3: "BRB" },
  { code: "BM", name: "Bermuda", nameZh: "百慕大", callingCode: "+1", region: "North America", iso2: "BM", iso3: "BMU" },
  { code: "BS", name: "Bahamas", nameZh: "巴哈马", callingCode: "+1", region: "North America", iso2: "BS", iso3: "BHS" },
  { code: "DM", name: "Dominica", nameZh: "多米尼克", callingCode: "+1", region: "North America", iso2: "DM", iso3: "DMA" },
  { code: "GD", name: "Grenada", nameZh: "格林纳达", callingCode: "+1", region: "North America", iso2: "GD", iso3: "GRD" },
  { code: "JM", name: "Jamaica", nameZh: "牙买加", callingCode: "+1", region: "North America", iso2: "JM", iso3: "JAM" },
  { code: "KN", name: "Saint Kitts and Nevis", nameZh: "圣基茨和尼维斯", callingCode: "+1", region: "North America", iso2: "KN", iso3: "KNA" },
  { code: "KY", name: "Cayman Islands", nameZh: "开曼群岛", callingCode: "+1", region: "North America", iso2: "KY", iso3: "CYM" },
  { code: "LC", name: "Saint Lucia", nameZh: "圣卢西亚", callingCode: "+1", region: "North America", iso2: "LC", iso3: "LCA" },
  { code: "MS", name: "Montserrat", nameZh: "蒙特塞拉特", callingCode: "+1", region: "North America", iso2: "MS", iso3: "MSR" },
  { code: "SX", name: "Sint Maarten", nameZh: "荷属圣马丁", callingCode: "+1", region: "North America", iso2: "SX", iso3: "SXM" },
  { code: "TC", name: "Turks and Caicos Islands", nameZh: "特克斯和凯科斯群岛", callingCode: "+1", region: "North America", iso2: "TC", iso3: "TCA" },
  { code: "TT", name: "Trinidad and Tobago", nameZh: "特立尼达和多巴哥", callingCode: "+1", region: "North America", iso2: "TT", iso3: "TTO" },
  { code: "VC", name: "Saint Vincent and the Grenadines", nameZh: "圣文森特和格林纳丁斯", callingCode: "+1", region: "North America", iso2: "VC", iso3: "VCT" },
  { code: "VG", name: "British Virgin Islands", nameZh: "英属维尔京群岛", callingCode: "+1", region: "North America", iso2: "VG", iso3: "VGB" },
  { code: "AC", name: "Ascension Island", nameZh: "阿森松岛", callingCode: "+247", region: "Africa", iso2: "AC", iso3: "ASC" },
  { code: "IO", name: "British Indian Ocean Territory", nameZh: "英属印度洋领地", callingCode: "+246", region: "Africa", iso2: "IO", iso3: "IOT" },
  { code: "RE", name: "Réunion", nameZh: "留尼汪", callingCode: "+262", region: "Africa", iso2: "RE", iso3: "REU" },
  { code: "TA", name: "Tristan da Cunha", nameZh: "特里斯坦-达库尼亚", callingCode: "+290", region: "Africa", iso2: "TA", iso3: "TAA" },
  { code: "TF", name: "French Southern Territories", nameZh: "法属南部领地", callingCode: "+262", region: "Africa", iso2: "TF", iso3: "ATF" },
  { code: "AX", name: "Åland Islands", nameZh: "奥兰群岛", callingCode: "+358", region: "Europe", iso2: "AX", iso3: "ALA" },
  { code: "GG", name: "Guernsey", nameZh: "根西岛", callingCode: "+44", region: "Europe", iso2: "GG", iso3: "GGY" },
  { code: "IM", name: "Isle of Man", nameZh: "马恩岛", callingCode: "+44", region: "Europe", iso2: "IM", iso3: "IMN" },
  { code: "JE", name: "Jersey", nameZh: "泽西岛", callingCode: "+44", region: "Europe", iso2: "JE", iso3: "JEY" },
  { code: "LI", name: "Liechtenstein", nameZh: "列支敦士登", callingCode: "+423", region: "Europe", iso2: "LI", iso3: "LIE" },
  { code: "SJ", name: "Svalbard and Jan Mayen", nameZh: "斯瓦尔巴和扬马延", callingCode: "+47", region: "Europe", iso2: "SJ", iso3: "SJM" },
  { code: "BV", name: "Bouvet Island", nameZh: "布韦岛", callingCode: "+47", region: "Antarctica", iso2: "BV", iso3: "BVT" },
  { code: "BL", name: "Saint Barthélemy", nameZh: "圣巴泰勒米", callingCode: "+590", region: "North America", iso2: "BL", iso3: "BLM" },
  { code: "BQ", name: "Caribbean Netherlands", nameZh: "荷兰加勒比区", callingCode: "+599", region: "North America", iso2: "BQ", iso3: "BES" },
  { code: "CW", name: "Curaçao", nameZh: "库拉索", callingCode: "+599", region: "North America", iso2: "CW", iso3: "CUW" },
  { code: "GP", name: "Guadeloupe", nameZh: "瓜德罗普", callingCode: "+590", region: "North America", iso2: "GP", iso3: "GLP" },
  { code: "MF", name: "Saint Martin", nameZh: "法属圣马丁", callingCode: "+590", region: "North America", iso2: "MF", iso3: "MAF" },
  { code: "MQ", name: "Martinique", nameZh: "马提尼克", callingCode: "+596", region: "North America", iso2: "MQ", iso3: "MTQ" },
  { code: "CC", name: "Cocos (Keeling) Islands", nameZh: "科科斯（基林）群岛", callingCode: "+61", region: "Oceania", iso2: "CC", iso3: "CCK" },
  { code: "CX", name: "Christmas Island", nameZh: "圣诞岛", callingCode: "+61", region: "Oceania", iso2: "CX", iso3: "CXR" },
  { code: "PN", name: "Pitcairn Islands", nameZh: "皮特凯恩群岛", callingCode: "+64", region: "Oceania", iso2: "PN", iso3: "PCN" },
  { code: "WF", name: "Wallis and Futuna", nameZh: "瓦利斯和富图纳", callingCode: "+681", region: "Oceania", iso2: "WF", iso3: "WLF" },
  { code: "AQ", name: "Antarctica", nameZh: "南极洲", callingCode: "+672", region: "Antarctica", iso2: "AQ", iso3: "ATA" },
  { code: "CT", name: "Cyprus (Turkish)", nameZh: "塞浦路斯（土耳其）", callingCode: "+90", region: "Europe", iso2: "CT", iso3: "CYT" }
];

export const getCountryByCode = (code: string): CountryCallingCode | undefined => {
  return callingCodes.find(country => country.code === code || country.iso2 === code || country.iso3 === code);
};

export const getCountriesByCallingCode = (callingCode: string): CountryCallingCode[] => {
  return callingCodes.filter(country => country.callingCode === callingCode);
};

export const getCountriesByRegion = (region: string): CountryCallingCode[] => {
  return callingCodes.filter(country => country.region === region);
};

export const searchCountries = (query: string): CountryCallingCode[] => {
  const lowerQuery = query.toLowerCase();
  return callingCodes.filter(country => 
    country.name.toLowerCase().includes(lowerQuery) ||
    country.nameZh.includes(query) ||
    country.callingCode.includes(query) ||
    country.code.toLowerCase().includes(lowerQuery)
  );
};