export const BREAKPOINTS = {
  tablet: '769px',
  desktop: '1200px'
};

export const ENVS = {
  LOCAL: 'local',
  DEV: 'dev',
  STG: 'stg',
  PROD_BLUE: 'prod-blue',
  PROD: 'prod'
};

export const TYPES = {
  AUTHORIZE_PAYMENT: 'authorize-payment',
  CREATE_TRANSACTION: 'create-transaction',
  VIEW_TRANSACTION: 'view-transaction',
  VIEW_FUTURE: 'view-future'
};

export const BASE_URLS = {
  [ENVS.LOCAL]: 'http://localhost:3000',
  [ENVS.DEV]: 'https://dev-connect.medipass.io',
  [ENVS.STG]: 'https://stg-connect.medipass.io',
  [ENVS.PROD_BLUE]: 'https://connect-blue.medipass.io',
  [ENVS.PROD]: 'https://connect.medipass.io'
};

export const PATHS = {
  [TYPES.AUTHORIZE_PAYMENT]: 'authorize-payment',
  [TYPES.CREATE_TRANSACTION]: 'create-transaction',
  [TYPES.VIEW_TRANSACTION]: 'transactions/view',
  [TYPES.VIEW_FUTURE]: 'futures/view'

};

export const FUNDERS = {
  HICAPS: 'hicaps',
  MEDICARE: 'medicare',
  DVA: 'dva',
  GHS: 'ghs',
  PATIENT_FUNDED: 'patient-funded',
  ICARE: 'icare'
};

export const HEALTH_FUNDS = {
  'ACA': 'ACA',
  'AHM': 'AHM',
  'AUSTRALIAN_UNITY': 'AUF',
  'BUPA': 'BUP',
  'CBHS': 'CBH',
  'CDH': 'CDH',
  'CUA': 'CUA',
  'DEFENCE_HEALTH': 'AHB',
  'DOCTORS_HEALTH_FUND': 'AMA',
  'GMF_HEALTH': 'GMF',
  'GMHBA': 'GMH',
  'GRAND_UNITED_CORPORATE_HEALTH': 'GUH',
  'HBF': 'HBF',
  'HCF': 'HCF',
  'HEALTH_CASE_INSURANCE': 'HCI',
  'HIF': 'HIF',
  'HEALTH_PARTNERS': 'HPI',
  'HEALTH_COM_AU': 'HEA',
  'LATROBE_HEALTH_SERVICES': 'LHS',
  'MEDIBANK': 'MBP',
  'MILDURA_HEALTH_FUND': 'MDH',
  'ONEMEDIFUND': 'OMF',
  'NAVY_HEALTH': 'NHB',
  'NIB': 'NIB',
  'PEOPLECARE': 'LHM',
  'PHOENIX_HEALTH': 'PWA',
  'POLICE_HEALTH': 'PHF',
  'QUEENSLAND_COUNTRY_HEALTH_FUND': 'QCH',
  'RAILWAY_TRANSPORT_HEALTH_FUND': 'RTE',
  'RESERVE_BANK_HEALTH_SOCIETY': 'RBH',
  'ST_LUKES_HEALTH': 'STL',
  'TEACHERS_HEALTH_FUND': 'TFH',
  'TRANSPORT_HEALTH': 'TFS',
  'TUH': 'QTU',
  'WESTFUND_LIMITED': 'WFD'
};

export const MEDICARE = {
  REFERRER_TYPE: {
    GP: 'gp',
    SPECIALIST: 'specialist'
  },
  REFERRAL_PERIODS: {
    STANDARD: 'standard',
    NON_STANDARD: 'non-standard',
    INDEFINITE: 'indefinite'
  }
};
