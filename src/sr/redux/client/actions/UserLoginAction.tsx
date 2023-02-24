import {createAsyncThunk} from '@reduxjs/toolkit'
import LoginUserService from '../services/UserLoginService'

const ActionUserLogin: any = createAsyncThunk(
  'UserReducer/ActionUserLogin',
  // naming convention (reducer/action_name)
  async () => {
    const res = await LoginUserService.UserLogin()
    return res.data
  }
)

export {ActionUserLogin}
