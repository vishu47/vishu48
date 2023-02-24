import {combineReducers} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import AdminReducer from '../admin/reducers'
import ClientReducer from '../client/reducers'

const rootReducer = combineReducers({
  client: ClientReducer,
  admin: AdminReducer,
})

const useAdminSelector = () => {
  return useSelector((state: any) => state.admin)
}
const useClientSelector = () => {
  return useSelector((state: any) => state.client)
}
// const useClientSelector: TypedUseSelectorHook<RootState> = useSelector

export {rootReducer, useAdminSelector, useClientSelector}
