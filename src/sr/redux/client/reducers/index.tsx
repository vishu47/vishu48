import {combineReducers} from '@reduxjs/toolkit'
import HomepageReducer from './HomepageReducer'
import LoginUserReducer from './LoginUserReducer'

const ClientReducer = combineReducers({
  homepage: HomepageReducer,
  user: LoginUserReducer,
})

export default ClientReducer
