// import {ChangeHeaderNameType} from './Type'

import moment from 'moment'
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import {StringOptions} from 'sass'
const rawSize: number = 1024
export class HeaderTitle {
  title: any
  constructor(title: any) {
    this.title = title
  }
  getTitle() {
    return this.title
  }
  setTitle(title: any) {
    return (this.title = title)
  }
}

export function CheckForUrlName() {
  const pathname = window.location.pathname
  const title: String | undefined = pathname.split('/')[2]
  const formatTitle = title ? title.replaceAll('-', ' ').toUpperCase() : ''
  return formatTitle
}

export const FormatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i]
}

// date format
export const DateFormat = (raw: any) => {
  const date = new Date(raw)
  const FomatedDate = moment(date).format('MMM D, h:mm A')
  return FomatedDate
}

// file extention getter and checker
export const getFileExtension = (fileName: string) => fileName.split('.').pop()
export const getFileSizeToMb = (fileSize: number) => {
  return Math.round(fileSize / 1024)
}

export const CheckForExtension = (extension: string | undefined) => {
  if (extension === 'png' || extension === 'jpg' || extension === 'jpeg' || extension === 'webp') {
    return true
  } else {
    return false
  }
}
