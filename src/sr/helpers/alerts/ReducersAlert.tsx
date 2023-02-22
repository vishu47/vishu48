import {toast} from 'react-toastify'

const Capitalzed = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export const Success = (data: string) => {
  return toast.success(`Created ${Capitalzed(data)} successfully`)
}
export const List = (data: string) => {
  return toast.success(`Successfully fetched ${Capitalzed(data)} list`)
}
export const Edit = (data: string) => {
  return toast.success(`Edited ${Capitalzed(data)} successfully`)
}
export const Delete = (data: string) => {
  return toast.success(`${Capitalzed(data)} Item Deleted successfully`)
}
export const Rearrange = (data: string) => {
  return toast.success(`${Capitalzed(data)} Item Rearrange successfully`)
}
export const ConnectionError = (data?: string) => {
  return toast.error(`Something went wrong! or Connection request Error!`)
}
