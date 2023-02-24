import {combineReducers} from '@reduxjs/toolkit'
import HomepageReducer from './HomepageReducer'

const AdminReducer = combineReducers({
  homepage: HomepageReducer,
})

export default AdminReducer
