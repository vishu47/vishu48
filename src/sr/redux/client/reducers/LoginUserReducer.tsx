import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import ActionMenuList from '../actions/HomepageAction'

const initialState = {
  menuList: [],
  loading: false,
  error: [],
}

const UserLogin = createSlice({
  name: 'UserLogin',
  initialState,
  reducers: {},
  extraReducers: {
    // *************** List Menu *************
    // initialize request
    [ActionMenuList.pending]: (state: any) => {
      state.loading = true
    },
    // have any response from api with status code 200
    [ActionMenuList.fulfilled]: (state: any, action: any) => {
      state.loading = false
      state.menuList = action.payload
      toast.success('list menu')
    },
    // not have any response from api
    [ActionMenuList.rejected]: (state: any) => {
      state.loading = false
      toast.error('Something went wrong! or Connection request Error!')
    },
  },
})

export default UserLogin.reducer
