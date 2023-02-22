// production env urls

export const ApiDataBaseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BASE_URL_LOCAL
    : process.env.REACT_APP_BASE_URL_PROD

export const seerAccessBaseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BASE_URL_ACCESS_LOCAL
    : process.env.REACT_APP_BASE_URL_ACCESS_PROD

export const AdminEdithBaseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BASE_URL_EDITH_ADMIN_PROD
    : process.env.REACT_APP_BASE_URL_EDITH_ADMIN_LOCAL
