export interface CityGeoData {
  city: string;
  state: string;
  region: string;
  placename: string;
  latitude: number;
  longitude: number;
  postalCodes: string[];
  county: string;
  serviceKeywords: string[];
}

export const CITY_GEO_LOOKUP: Record<string, CityGeoData> = {
  acworth: {
    city: 'Acworth',
    state: 'GA',
    region: 'US-GA',
    placename: 'Acworth, Georgia',
    latitude: 34.0660,
    longitude: -84.6784,
    postalCodes: ['30101', '30102'],
    county: 'Cobb County',
    serviceKeywords: [
      'Acworth plumber',
      'emergency plumber Acworth GA',
      'drain cleaning Acworth',
      'water heater repair Acworth GA',
      'sewer line repair Acworth',
      'leak detection Acworth',
      'RS Andrews Acworth'
    ]
  },
  alpharetta: {
    city: 'Alpharetta',
    state: 'GA',
    region: 'US-GA',
    placename: 'Alpharetta, Georgia',
    latitude: 34.0754,
    longitude: -84.2941,
    postalCodes: ['30004', '30005', '30009', '30022'],
    county: 'Fulton County',
    serviceKeywords: [
      'Alpharetta plumber',
      'emergency plumber Alpharetta GA',
      'drain cleaning Alpharetta',
      'water heater repair Alpharetta GA',
      'sewer line repair Alpharetta',
      'leak detection Alpharetta',
      'RS Andrews Alpharetta'
    ]
  },
  atlanta: {
    city: 'Atlanta',
    state: 'GA',
    region: 'US-GA',
    placename: 'Atlanta, Georgia',
    latitude: 33.7490,
    longitude: -84.3880,
    postalCodes: ['30303', '30305', '30308', '30309', '30318', '30319', '30324', '30326', '30327', '30340', '30342'],
    county: 'Fulton & DeKalb County',
    serviceKeywords: [
      'Atlanta plumber',
      'emergency plumber Atlanta GA',
      'drain cleaning Atlanta',
      'water heater repair Atlanta GA',
      'sewer line repair Atlanta',
      'plumbing service Atlanta',
      'RS Andrews Atlanta'
    ]
  },
  brookhaven: {
    city: 'Brookhaven',
    state: 'GA',
    region: 'US-GA',
    placename: 'Brookhaven, Georgia',
    latitude: 33.8651,
    longitude: -84.3366,
    postalCodes: ['30319', '30324', '30329'],
    county: 'DeKalb County',
    serviceKeywords: [
      'Brookhaven plumber',
      'emergency plumber Brookhaven GA',
      'drain cleaning Brookhaven',
      'water heater repair Brookhaven GA',
      'sewer line repair Brookhaven',
      'RS Andrews Brookhaven'
    ]
  },
  buckhead: {
    city: 'Buckhead',
    state: 'GA',
    region: 'US-GA',
    placename: 'Buckhead, Atlanta, Georgia',
    latitude: 33.8396,
    longitude: -84.3799,
    postalCodes: ['30305', '30326', '30327', '30342'],
    county: 'Fulton County',
    serviceKeywords: [
      'Buckhead plumber',
      'emergency plumber Buckhead Atlanta',
      'drain cleaning Buckhead GA',
      'water heater repair Buckhead',
      'sewer line repair Buckhead',
      'RS Andrews Buckhead'
    ]
  },
  buford: {
    city: 'Buford',
    state: 'GA',
    region: 'US-GA',
    placename: 'Buford, Georgia',
    latitude: 34.1207,
    longitude: -83.9999,
    postalCodes: ['30518', '30519'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Buford plumber',
      'emergency plumber Buford GA',
      'drain cleaning Buford',
      'water heater repair Buford GA',
      'sewer line repair Buford',
      'licensed plumber Buford GA 30518',
      'master plumber Buford GA 30519',
      'RS Andrews Buford'
    ]
  },
  chamblee: {
    city: 'Chamblee',
    state: 'GA',
    region: 'US-GA',
    placename: 'Chamblee, Georgia',
    latitude: 33.8920,
    longitude: -84.3049,
    postalCodes: ['30341'],
    county: 'DeKalb County',
    serviceKeywords: [
      'Chamblee plumber',
      'emergency plumber Chamblee GA',
      'drain cleaning Chamblee',
      'water heater repair Chamblee',
      'RS Andrews Chamblee'
    ]
  },
  cumming: {
    city: 'Cumming',
    state: 'GA',
    region: 'US-GA',
    placename: 'Cumming, Georgia',
    latitude: 34.2073,
    longitude: -84.1402,
    postalCodes: ['30040', '30041'],
    county: 'Forsyth County',
    serviceKeywords: [
      'Cumming plumber',
      'emergency plumber Cumming GA',
      'drain cleaning Cumming',
      'water heater repair Cumming GA',
      'sewer line repair Cumming',
      'RS Andrews Cumming'
    ]
  },
  dacula: {
    city: 'Dacula',
    state: 'GA',
    region: 'US-GA',
    placename: 'Dacula, Georgia',
    latitude: 34.0032,
    longitude: -83.8980,
    postalCodes: ['30019'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Dacula plumber',
      'emergency plumber Dacula GA',
      'drain cleaning Dacula',
      'water heater repair Dacula',
      'RS Andrews Dacula'
    ]
  },
  decatur: {
    city: 'Decatur',
    state: 'GA',
    region: 'US-GA',
    placename: 'Decatur, Georgia',
    latitude: 33.7748,
    longitude: -84.2963,
    postalCodes: ['30030', '30032', '30033'],
    county: 'DeKalb County',
    serviceKeywords: [
      'Decatur plumber',
      'emergency plumber Decatur GA',
      'drain cleaning Decatur',
      'water heater repair Decatur GA',
      'sewer line repair Decatur',
      'RS Andrews Decatur'
    ]
  },
  doraville: {
    city: 'Doraville',
    state: 'GA',
    region: 'US-GA',
    placename: 'Doraville, Georgia',
    latitude: 33.9048,
    longitude: -84.2821,
    postalCodes: ['30340', '30360'],
    county: 'DeKalb County',
    serviceKeywords: [
      'Doraville plumber',
      'emergency plumber Doraville GA',
      'drain cleaning Doraville',
      'water heater repair Doraville',
      'RS Andrews Doraville'
    ]
  },
  'druid-hills': {
    city: 'Druid Hills',
    state: 'GA',
    region: 'US-GA',
    placename: 'Druid Hills, Georgia',
    latitude: 33.7845,
    longitude: -84.3308,
    postalCodes: ['30307', '30322', '30329'],
    county: 'DeKalb County',
    serviceKeywords: [
      'Druid Hills plumber',
      'emergency plumber Druid Hills GA',
      'drain cleaning Druid Hills',
      'water heater repair Druid Hills',
      'RS Andrews Druid Hills'
    ]
  },
  duluth: {
    city: 'Duluth',
    state: 'GA',
    region: 'US-GA',
    placename: 'Duluth, Georgia',
    latitude: 34.0029,
    longitude: -84.1446,
    postalCodes: ['30096', '30097'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Duluth plumber',
      'emergency plumber Duluth GA',
      'drain cleaning Duluth',
      'water heater repair Duluth GA',
      'sewer line repair Duluth',
      'RS Andrews Duluth'
    ]
  },
  dunwoody: {
    city: 'Dunwoody',
    state: 'GA',
    region: 'US-GA',
    placename: 'Dunwoody, Georgia',
    latitude: 33.9462,
    longitude: -84.3346,
    postalCodes: ['30338', '30346', '30360'],
    county: 'DeKalb County',
    serviceKeywords: [
      'Dunwoody plumber',
      'emergency plumber Dunwoody GA',
      'drain cleaning Dunwoody',
      'water heater repair Dunwoody GA',
      'sewer line repair Dunwoody',
      'RS Andrews Dunwoody'
    ]
  },
  'east-cobb': {
    city: 'East Cobb',
    state: 'GA',
    region: 'US-GA',
    placename: 'East Cobb, Marietta, Georgia',
    latitude: 33.9856,
    longitude: -84.4447,
    postalCodes: ['30062', '30067', '30068'],
    county: 'Cobb County',
    serviceKeywords: [
      'East Cobb plumber',
      'emergency plumber East Cobb GA',
      'drain cleaning East Cobb',
      'water heater repair East Cobb',
      'sewer line repair East Cobb',
      'RS Andrews East Cobb'
    ]
  },
  'flowery-branch': {
    city: 'Flowery Branch',
    state: 'GA',
    region: 'US-GA',
    placename: 'Flowery Branch, Georgia',
    latitude: 34.1851,
    longitude: -83.9252,
    postalCodes: ['30542'],
    county: 'Hall County',
    serviceKeywords: [
      'Flowery Branch plumber',
      'emergency plumber Flowery Branch GA',
      'drain cleaning Flowery Branch',
      'water heater repair Flowery Branch',
      'RS Andrews Flowery Branch'
    ]
  },
  'johns-creek': {
    city: 'Johns Creek',
    state: 'GA',
    region: 'US-GA',
    placename: 'Johns Creek, Georgia',
    latitude: 34.0289,
    longitude: -84.1986,
    postalCodes: ['30005', '30022', '30097'],
    county: 'Fulton County',
    serviceKeywords: [
      'Johns Creek plumber',
      'emergency plumber Johns Creek GA',
      'drain cleaning Johns Creek',
      'water heater repair Johns Creek GA',
      'sewer line repair Johns Creek',
      'RS Andrews Johns Creek'
    ]
  },
  kennesaw: {
    city: 'Kennesaw',
    state: 'GA',
    region: 'US-GA',
    placename: 'Kennesaw, Georgia',
    latitude: 34.0234,
    longitude: -84.6155,
    postalCodes: ['30144', '30152'],
    county: 'Cobb County',
    serviceKeywords: [
      'Kennesaw plumber',
      'emergency plumber Kennesaw GA',
      'drain cleaning Kennesaw',
      'water heater repair Kennesaw GA',
      'sewer line repair Kennesaw',
      'RS Andrews Kennesaw'
    ]
  },
  lawrenceville: {
    city: 'Lawrenceville',
    state: 'GA',
    region: 'US-GA',
    placename: 'Lawrenceville, Georgia',
    latitude: 33.9562,
    longitude: -83.9880,
    postalCodes: ['30043', '30044', '30045', '30046'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Lawrenceville plumber',
      'emergency plumber Lawrenceville GA',
      'drain cleaning Lawrenceville',
      'water heater repair Lawrenceville GA',
      'sewer line repair Lawrenceville',
      'RS Andrews Lawrenceville'
    ]
  },
  marietta: {
    city: 'Marietta',
    state: 'GA',
    region: 'US-GA',
    placename: 'Marietta, Georgia',
    latitude: 33.9526,
    longitude: -84.5499,
    postalCodes: ['30060', '30062', '30064', '30066', '30067', '30068'],
    county: 'Cobb County',
    serviceKeywords: [
      'Marietta plumber',
      'emergency plumber Marietta GA',
      'drain cleaning Marietta',
      'water heater repair Marietta GA',
      'sewer line repair Marietta',
      'plumbing maintenance Marietta',
      'RS Andrews Marietta'
    ]
  },
  milton: {
    city: 'Milton',
    state: 'GA',
    region: 'US-GA',
    placename: 'Milton, Georgia',
    latitude: 34.1320,
    longitude: -84.3019,
    postalCodes: ['30004'],
    county: 'Fulton County',
    serviceKeywords: [
      'Milton plumber',
      'emergency plumber Milton GA',
      'drain cleaning Milton',
      'water heater repair Milton GA',
      'sewer line repair Milton',
      'RS Andrews Milton'
    ]
  },
  norcross: {
    city: 'Norcross',
    state: 'GA',
    region: 'US-GA',
    placename: 'Norcross, Georgia',
    latitude: 33.9412,
    longitude: -84.2135,
    postalCodes: ['30071', '30092', '30093'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Norcross plumber',
      'emergency plumber Norcross GA',
      'drain cleaning Norcross',
      'water heater repair Norcross GA',
      'sewer line repair Norcross',
      'RS Andrews Norcross'
    ]
  },
  'peachtree-corners': {
    city: 'Peachtree Corners',
    state: 'GA',
    region: 'US-GA',
    placename: 'Peachtree Corners, Georgia',
    latitude: 33.9698,
    longitude: -84.2216,
    postalCodes: ['30092'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Peachtree Corners plumber',
      'emergency plumber Peachtree Corners GA',
      'drain cleaning Peachtree Corners',
      'water heater repair Peachtree Corners',
      'RS Andrews Peachtree Corners'
    ]
  },
  roswell: {
    city: 'Roswell',
    state: 'GA',
    region: 'US-GA',
    placename: 'Roswell, Georgia',
    latitude: 34.0232,
    longitude: -84.3616,
    postalCodes: ['30075', '30076'],
    county: 'Fulton County',
    serviceKeywords: [
      'Roswell plumber',
      'emergency plumber Roswell GA',
      'drain cleaning Roswell',
      'water heater repair Roswell GA',
      'sewer line repair Roswell',
      'plumbing maintenance Roswell',
      'RS Andrews Roswell'
    ]
  },
  'sandy-springs': {
    city: 'Sandy Springs',
    state: 'GA',
    region: 'US-GA',
    placename: 'Sandy Springs, Georgia',
    latitude: 33.9304,
    longitude: -84.3733,
    postalCodes: ['30328', '30350'],
    county: 'Fulton County',
    serviceKeywords: [
      'Sandy Springs plumber',
      'emergency plumber Sandy Springs GA',
      'drain cleaning Sandy Springs',
      'water heater repair Sandy Springs GA',
      'sewer line repair Sandy Springs',
      'RS Andrews Sandy Springs'
    ]
  },
  smyrna: {
    city: 'Smyrna',
    state: 'GA',
    region: 'US-GA',
    placename: 'Smyrna, Georgia',
    latitude: 33.8839,
    longitude: -84.5144,
    postalCodes: ['30080', '30082'],
    county: 'Cobb County',
    serviceKeywords: [
      'Smyrna plumber',
      'emergency plumber Smyrna GA',
      'drain cleaning Smyrna',
      'water heater repair Smyrna GA',
      'sewer line repair Smyrna',
      'RS Andrews Smyrna'
    ]
  },
  snellville: {
    city: 'Snellville',
    state: 'GA',
    region: 'US-GA',
    placename: 'Snellville, Georgia',
    latitude: 33.8573,
    longitude: -84.0199,
    postalCodes: ['30039', '30078'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Snellville plumber',
      'emergency plumber Snellville GA',
      'drain cleaning Snellville',
      'water heater repair Snellville GA',
      'sewer line repair Snellville',
      'RS Andrews Snellville'
    ]
  },
  'stone-mountain': {
    city: 'Stone Mountain',
    state: 'GA',
    region: 'US-GA',
    placename: 'Stone Mountain, Georgia',
    latitude: 33.8082,
    longitude: -84.1702,
    postalCodes: ['30083', '30087', '30088'],
    county: 'DeKalb County',
    serviceKeywords: [
      'Stone Mountain plumber',
      'emergency plumber Stone Mountain GA',
      'drain cleaning Stone Mountain',
      'water heater repair Stone Mountain',
      'RS Andrews Stone Mountain'
    ]
  },
  'sugar-hill': {
    city: 'Sugar Hill',
    state: 'GA',
    region: 'US-GA',
    placename: 'Sugar Hill, Georgia',
    latitude: 34.1068,
    longitude: -84.0335,
    postalCodes: ['30518'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Sugar Hill plumber',
      'emergency plumber Sugar Hill GA',
      'drain cleaning Sugar Hill',
      'water heater repair Sugar Hill GA',
      'sewer line repair Sugar Hill',
      'RS Andrews Sugar Hill'
    ]
  },
  suwanee: {
    city: 'Suwanee',
    state: 'GA',
    region: 'US-GA',
    placename: 'Suwanee, Georgia',
    latitude: 34.0526,
    longitude: -84.0713,
    postalCodes: ['30024'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Suwanee plumber',
      'emergency plumber Suwanee GA',
      'drain cleaning Suwanee',
      'water heater repair Suwanee GA',
      'sewer line repair Suwanee',
      'RS Andrews Suwanee'
    ]
  },
  tucker: {
    city: 'Tucker',
    state: 'GA',
    region: 'US-GA',
    placename: 'Tucker, Georgia',
    latitude: 33.8545,
    longitude: -84.2171,
    postalCodes: ['30084'],
    county: 'DeKalb County',
    serviceKeywords: [
      'Tucker plumber',
      'emergency plumber Tucker GA',
      'drain cleaning Tucker',
      'water heater repair Tucker GA',
      'sewer line repair Tucker',
      'RS Andrews Tucker'
    ]
  },
  vinings: {
    city: 'Vinings',
    state: 'GA',
    region: 'US-GA',
    placename: 'Vinings, Georgia',
    latitude: 33.8687,
    longitude: -84.4647,
    postalCodes: ['30339'],
    county: 'Cobb County',
    serviceKeywords: [
      'Vinings plumber',
      'emergency plumber Vinings GA',
      'drain cleaning Vinings',
      'water heater repair Vinings',
      'RS Andrews Vinings'
    ]
  },
  woodstock: {
    city: 'Woodstock',
    state: 'GA',
    region: 'US-GA',
    placename: 'Woodstock, Georgia',
    latitude: 34.1015,
    longitude: -84.5194,
    postalCodes: ['30188', '30189'],
    county: 'Cherokee County',
    serviceKeywords: [
      'Woodstock plumber',
      'emergency plumber Woodstock GA',
      'drain cleaning Woodstock',
      'water heater repair Woodstock GA',
      'sewer line repair Woodstock',
      'RS Andrews Woodstock'
    ]
  },
  austell: {
    city: 'Austell',
    state: 'GA',
    region: 'US-GA',
    placename: 'Austell, Georgia',
    latitude: 33.8126,
    longitude: -84.6344,
    postalCodes: ['30106', '30168'],
    county: 'Cobb County',
    serviceKeywords: [
      'Austell plumber',
      'emergency plumber Austell GA',
      'drain cleaning Austell',
      'water heater repair Austell GA',
      'sewer line repair Austell',
      'RS Andrews Austell'
    ]
  },
  clarkston: {
    city: 'Clarkston',
    state: 'GA',
    region: 'US-GA',
    placename: 'Clarkston, Georgia',
    latitude: 33.8096,
    longitude: -84.2396,
    postalCodes: ['30021'],
    county: 'DeKalb County',
    serviceKeywords: [
      'Clarkston plumber',
      'emergency plumber Clarkston GA',
      'drain cleaning Clarkston',
      'water heater repair Clarkston GA',
      'sewer line repair Clarkston',
      'RS Andrews Clarkston'
    ]
  },
  grayson: {
    city: 'Grayson',
    state: 'GA',
    region: 'US-GA',
    placename: 'Grayson, Georgia',
    latitude: 33.8937,
    longitude: -83.9557,
    postalCodes: ['30017'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Grayson plumber',
      'emergency plumber Grayson GA',
      'drain cleaning Grayson',
      'water heater repair Grayson GA',
      'sewer line repair Grayson',
      'RS Andrews Grayson'
    ]
  },
  'holly-springs': {
    city: 'Holly Springs',
    state: 'GA',
    region: 'US-GA',
    placename: 'Holly Springs, Georgia',
    latitude: 34.1743,
    longitude: -84.5024,
    postalCodes: ['30115', '30142'],
    county: 'Cherokee County',
    serviceKeywords: [
      'Holly Springs plumber',
      'emergency plumber Holly Springs GA',
      'drain cleaning Holly Springs',
      'water heater repair Holly Springs GA',
      'sewer line repair Holly Springs',
      'RS Andrews Holly Springs'
    ]
  },
  lilburn: {
    city: 'Lilburn',
    state: 'GA',
    region: 'US-GA',
    placename: 'Lilburn, Georgia',
    latitude: 33.8901,
    longitude: -84.1430,
    postalCodes: ['30047'],
    county: 'Gwinnett County',
    serviceKeywords: [
      'Lilburn plumber',
      'emergency plumber Lilburn GA',
      'drain cleaning Lilburn',
      'water heater repair Lilburn GA',
      'sewer line repair Lilburn',
      'RS Andrews Lilburn'
    ]
  },
  mableton: {
    city: 'Mableton',
    state: 'GA',
    region: 'US-GA',
    placename: 'Mableton, Georgia',
    latitude: 33.8187,
    longitude: -84.5824,
    postalCodes: ['30126'],
    county: 'Cobb County',
    serviceKeywords: [
      'Mableton plumber',
      'emergency plumber Mableton GA',
      'drain cleaning Mableton',
      'water heater repair Mableton GA',
      'sewer line repair Mableton',
      'RS Andrews Mableton'
    ]
  },
  'north-decatur': {
    city: 'North Decatur',
    state: 'GA',
    region: 'US-GA',
    placename: 'North Decatur, Georgia',
    latitude: 33.8032,
    longitude: -84.2899,
    postalCodes: ['30033'],
    county: 'DeKalb County',
    serviceKeywords: [
      'North Decatur plumber',
      'emergency plumber North Decatur GA',
      'drain cleaning North Decatur',
      'water heater repair North Decatur GA',
      'sewer line repair North Decatur',
      'RS Andrews North Decatur'
    ]
  },
  'north-druid-hills': {
    city: 'North Druid Hills',
    state: 'GA',
    region: 'US-GA',
    placename: 'North Druid Hills, Georgia',
    latitude: 33.8168,
    longitude: -84.3266,
    postalCodes: ['30329', '30033'],
    county: 'DeKalb County',
    serviceKeywords: [
      'North Druid Hills plumber',
      'emergency plumber North Druid Hills GA',
      'drain cleaning North Druid Hills',
      'water heater repair North Druid Hills GA',
      'sewer line repair North Druid Hills',
      'RS Andrews North Druid Hills'
    ]
  },
  'powder-springs': {
    city: 'Powder Springs',
    state: 'GA',
    region: 'US-GA',
    placename: 'Powder Springs, Georgia',
    latitude: 33.8595,
    longitude: -84.6838,
    postalCodes: ['30127'],
    county: 'Cobb County',
    serviceKeywords: [
      'Powder Springs plumber',
      'emergency plumber Powder Springs GA',
      'drain cleaning Powder Springs',
      'water heater repair Powder Springs GA',
      'sewer line repair Powder Springs',
      'RS Andrews Powder Springs'
    ]
  }
};

export function getCityGeoData(cityNameOrSlug?: string): CityGeoData | undefined {
  if (!cityNameOrSlug) return undefined;
  const normalized = cityNameOrSlug
    .trim()
    .toLowerCase()
    .replace(/-(?:air-conditioning-repair|plumber|plumbing-repair|plumbing)$/, '')
    .replace(/\s+/g, '-');

  if (CITY_GEO_LOOKUP[normalized]) {
    return CITY_GEO_LOOKUP[normalized];
  }

  // Also check without hyphens
  const key = Object.keys(CITY_GEO_LOOKUP).find(k => {
    return k === normalized ||
      k.replace(/-/g, ' ') === cityNameOrSlug.trim().toLowerCase() ||
      CITY_GEO_LOOKUP[k].city.toLowerCase() === cityNameOrSlug.trim().toLowerCase();
  });

  return key ? CITY_GEO_LOOKUP[key] : undefined;
}
