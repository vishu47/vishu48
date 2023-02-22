import axios from 'axios'
import {AdminEdithBaseUrl, ApiDataBaseUrl, seerAccessBaseUrl} from './HttpUrls'

export const HttpAxios = axios.create({
  // baseURL: `http://34.224.165.136:8001/api/v1/`,
  baseURL: ApiDataBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

// seer access management
export const AccessHttpAxios = axios.create({
  baseURL: seerAccessBaseUrl,
  headers: {
    Authorization: 'Basic c2VlcjpzZWVy',
    'Content-Type': 'application/json',
  },
})
// edith admin
export const AdminHttpAxios = axios.create({
  baseURL: AdminEdithBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
