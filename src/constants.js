// export const API_DOMAIN = 'http://127.0.0.1:8080';
export const API_DOMAIN = 'https://api.covid19india.org';
export const DATA_API_ROOT = `${API_DOMAIN}/v4/min`;

export const LOCALE_SHORTHANDS = {
  english: 'en-US',
  hindi: 'hi',
  telugu: 'te',
  kannada: 'en-US',
  gujarati: 'gu',
  marathi: 'en-US',
  tamil: 'ta',
  bengali: 'bn',
  punjabi: 'en-US',
  malayalam: 'en-US',
  odiya: 'en-US',
};

export const STATISTIC_CONFIGS = {
  confirmed: {
    displayName: 'confirmed',
    color: '#ff073a',
    format: 'int',
    definition: {key: 'confirmed'},
    showDelta: true,
  },
  active: {
    displayName: 'active',
    color: '#007bff',
    format: 'int',
    definition: {key: 'active'},
  },
  recovered: {
    displayName: 'recovered',
    color: '#28a745',
    format: 'int',
    definition: {key: 'recovered'},
    showDelta: true,
  },
  deceased: {
    displayName: 'deceased',
    color: '#6c757d',
    format: 'int',
    definition: {key: 'deceased'},
    showDelta: true,
  },
  other: {
    displayName: 'other',
    format: 'int',
    definition: {key: 'other'},
    showDelta: true,
  },
  tested: {
    displayName: 'tested',
    color: '#4b1eaa',
    format: 'short',
    definition: {key: 'tested'},
    showDelta: true,
  },
  vaccinated: {
    displayName: 'vaccine doses administered',
    color: '#fb5581',
    format: 'short',
    definition: {key: 'vaccinated'},
    showDelta: true,
  },
  firstdosevaccinated: {
    displayName: 'partially vaccinated',
    color: '#fb5581',
    format: 'short',
    definition: {key: 'firstdosevaccinated'},
    showDelta: true,
  },
  seconddosevaccinated: {
    displayName: 'fully vaccinated',
    color: '#fb5581',
    format: 'short',
    definition: {key: 'seconddosevaccinated'},
    showDelta: true,
  },
  tpr: {
    displayName: 'test positivity ratio',
    format: '%',
    definition: {
      key: 'confirmed',
      normalizeByKey: 'tested',
      multiplyFactor: 100,
    },
    // tableConfig: {
    //   type: 'delta7',
    //   displayName: 'test positivity ratio (last 7 days)',
    // },
    color: '#fd7e14',
  },
  cfr: {
    displayName: 'case fatality ratio',
    format: '%',
    definition: {
      key: 'deceased',
      normalizeByKey: 'confirmed',
      multiplyFactor: 100,
    },
  },
  recoveryRatio: {
    displayName: 'recovery ratio',
    format: '%',
    definition: {
      key: 'recovered',
      normalizeByKey: 'confirmed',
      multiplyFactor: 100,
    },
  },
  activeRatio: {
    displayName: 'active ratio',
    format: '%',
    definition: {
      key: 'active',
      normalizeByKey: 'confirmed',
      multiplyFactor: 100,
    },
  },
  population: {
    displayName: 'population',
    format: 'short',
    definition: {key: 'population'},
  },
};

export const PER_MILLION_OPTIONS = {
  normalizeByKey: 'population',
  multiplyFactor: 1e6,
};

const nanKeys = ['tested', 'vaccinated', 'population'];
export const NAN_STATISTICS = Object.keys(STATISTIC_CONFIGS).filter(
  (key) =>
    nanKeys.includes(STATISTIC_CONFIGS[key]?.definition?.key) ||
    nanKeys.includes(STATISTIC_CONFIGS[key]?.definition?.normalizeByKey)
);

export const PRIMARY_STATISTICS = [
  'confirmed',
  'active',
  'recovered',
  'deceased',
];

export const BRUSH_STATISTICS = ['confirmed'];

export const TABLE_STATISTICS = [...PRIMARY_STATISTICS, 'tested', 'vaccinated'];

export const TABLE_STATISTICS_EXPANDED = Object.keys(STATISTIC_CONFIGS);

export const TIMESERIES_STATISTICS = [
  ...PRIMARY_STATISTICS,
  'tested',
  'vaccinated',
  'tpr',
];

export const UPDATES_COUNT = 5;

export const DISTRICT_TABLE_COUNT = 40;

export const D3_TRANSITION_DURATION = 300;

export const MINIGRAPH_LOOKBACK_DAYS = 20;

export const TESTED_LOOKBACK_DAYS = 7;

export const UNASSIGNED_STATE_CODE = 'UN';

export const UNKNOWN_DISTRICT_KEY = 'Unknown';

export const GOSPEL_DATE = '2020-04-26';

export const ISO_DATE_REGEX = /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g;

export const INDIA_ISO_SUFFIX = 'T00:00:00+05:30';

export const SPRING_CONFIG_NUMBERS = {clamp: true, precision: 1};

export const TIMESERIES_CHART_TYPES = {
  total: 'Cumulative',
  delta: 'Daily',
};

export const TIMESERIES_LOOKBACK_DAYS = [null, 90, 30];

export const MAP_VIZS = {
  CHOROPLETH: 0,
  BUBBLES: 1,
};

export const MAP_VIEWS = {
  STATES: 0,
  DISTRICTS: 1,
};

export const MAP_TYPES = {
  COUNTRY: 0,
  STATE: 1,
};

export const MAPS_DIR =
  process.env.NODE_ENV === 'production' ? '/mini_maps' : '/projected_maps';

export const MAP_META = {
  AP: {
    geoDataFile: `${MAPS_DIR}/andhrapradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  AR: {
    geoDataFile: `${MAPS_DIR}/arunachalpradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  AS: {
    geoDataFile: `${MAPS_DIR}/assam.json`,
    mapType: MAP_TYPES.STATE,
  },
  BR: {
    geoDataFile: `${MAPS_DIR}/bihar.json`,
    mapType: MAP_TYPES.STATE,
  },
  CT: {
    geoDataFile: `${MAPS_DIR}/chhattisgarh.json`,
    mapType: MAP_TYPES.STATE,
  },
  GA: {
    geoDataFile: `${MAPS_DIR}/goa.json`,
    mapType: MAP_TYPES.STATE,
  },
  GJ: {
    geoDataFile: `${MAPS_DIR}/gujarat.json`,
    mapType: MAP_TYPES.STATE,
  },
  HR: {
    geoDataFile: `${MAPS_DIR}/haryana.json`,
    mapType: MAP_TYPES.STATE,
  },
  HP: {
    geoDataFile: `${MAPS_DIR}/himachalpradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  JK: {
    geoDataFile: `${MAPS_DIR}/jammukashmir.json`,
    mapType: MAP_TYPES.STATE,
  },
  JH: {
    geoDataFile: `${MAPS_DIR}/jharkhand.json`,
    mapType: MAP_TYPES.STATE,
  },
  KA: {
    geoDataFile: `${MAPS_DIR}/karnataka.json`,
    mapType: MAP_TYPES.STATE,
  },
  KL: {
    geoDataFile: `${MAPS_DIR}/kerala.json`,
    mapType: MAP_TYPES.STATE,
  },
  MP: {
    geoDataFile: `${MAPS_DIR}/madhyapradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  MH: {
    geoDataFile: `${MAPS_DIR}/maharashtra.json`,
    mapType: MAP_TYPES.STATE,
  },
  MN: {
    geoDataFile: `${MAPS_DIR}/manipur.json`,
    mapType: MAP_TYPES.STATE,
  },
  ML: {
    geoDataFile: `${MAPS_DIR}/meghalaya.json`,
    mapType: MAP_TYPES.STATE,
  },
  MZ: {
    geoDataFile: `${MAPS_DIR}/mizoram.json`,
    mapType: MAP_TYPES.STATE,
  },
  NL: {
    geoDataFile: `${MAPS_DIR}/nagaland.json`,
    mapType: MAP_TYPES.STATE,
  },
  OR: {
    geoDataFile: `${MAPS_DIR}/odisha.json`,
    mapType: MAP_TYPES.STATE,
  },
  PB: {
    geoDataFile: `${MAPS_DIR}/punjab.json`,
    mapType: MAP_TYPES.STATE,
  },
  RJ: {
    geoDataFile: `${MAPS_DIR}/rajasthan.json`,
    mapType: MAP_TYPES.STATE,
  },
  SK: {
    geoDataFile: `${MAPS_DIR}/sikkim.json`,
    mapType: MAP_TYPES.STATE,
  },
  TN: {
    geoDataFile: `${MAPS_DIR}/tamilnadu.json`,
    mapType: MAP_TYPES.STATE,
  },
  TG: {
    geoDataFile: `${MAPS_DIR}/telangana.json`,
    mapType: MAP_TYPES.STATE,
  },
  TR: {
    geoDataFile: `${MAPS_DIR}/tripura.json`,
    mapType: MAP_TYPES.STATE,
  },
  UT: {
    geoDataFile: `${MAPS_DIR}/uttarakhand.json`,
    mapType: MAP_TYPES.STATE,
  },
  UP: {
    geoDataFile: `${MAPS_DIR}/uttarpradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  WB: {
    geoDataFile: `${MAPS_DIR}/westbengal.json`,
    mapType: MAP_TYPES.STATE,
  },
  AN: {
    geoDataFile: `${MAPS_DIR}/andamannicobarislands.json`,
    mapType: MAP_TYPES.STATE,
  },
  CH: {
    geoDataFile: `${MAPS_DIR}/chandigarh.json`,
    mapType: MAP_TYPES.STATE,
  },
  DN: {
    geoDataFile: `${MAPS_DIR}/dnh-and-dd.json`,
    mapType: MAP_TYPES.STATE,
  },
  DL: {
    geoDataFile: `${MAPS_DIR}/delhi.json`,
    mapType: MAP_TYPES.STATE,
  },
  LA: {
    geoDataFile: `${MAPS_DIR}/ladakh.json`,
    mapType: MAP_TYPES.STATE,
  },
  LD: {
    geoDataFile: `${MAPS_DIR}/lakshadweep.json`,
    mapType: MAP_TYPES.STATE,
  },
  PY: {
    geoDataFile: `${MAPS_DIR}/puducherry.json`,
    mapType: MAP_TYPES.STATE,
  },
  TT: {
    geoDataFile: `${MAPS_DIR}/india.json`,
    mapType: MAP_TYPES.COUNTRY,
  },
};

export const MAP_LEGEND_HEIGHT = 50;

export const STATE_NAMES = {
  AP: 'Andhra Pradesh',
  AR: 'Arunachal Pradesh',
  AS: 'Assam',
  BR: 'Bihar',
  CT: 'Chhattisgarh',
  GA: 'Goa',
  GJ: 'Gujarat',
  HR: 'Haryana',
  HP: 'Himachal Pradesh',
  JH: 'Jharkhand',
  KA: 'Karnataka',
  KL: 'Kerala',
  MP: 'Madhya Pradesh',
  MH: 'Maharashtra',
  MN: 'Manipur',
  ML: 'Meghalaya',
  MZ: 'Mizoram',
  NL: 'Nagaland',
  OR: 'Odisha',
  PB: 'Punjab',
  RJ: 'Rajasthan',
  SK: 'Sikkim',
  TN: 'Tamil Nadu',
  TG: 'Telangana',
  TR: 'Tripura',
  UT: 'Uttarakhand',
  UP: 'Uttar Pradesh',
  WB: 'West Bengal',
  AN: 'Andaman and Nicobar Islands',
  CH: 'Chandigarh',
  DN: 'Dadra and Nagar Haveli and Daman and Diu',
  DL: 'Delhi',
  JK: 'Jammu and Kashmir',
  LA: 'Ladakh',
  LD: 'Lakshadweep',
  PY: 'Puducherry',
  TT: 'India',
  [UNASSIGNED_STATE_CODE]: 'Unassigned',
};

const stateCodes = [];
const stateCodesMap = {};
Object.keys(STATE_NAMES).map((key, index) => {
  stateCodesMap[STATE_NAMES[key]] = key;
  stateCodes.push({code: key, name: STATE_NAMES[key]});
  return null;
});
export const STATE_CODES = stateCodesMap;
export const STATE_CODES_ARRAY = stateCodes;
