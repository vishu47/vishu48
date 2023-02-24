import {createAsyncThunk} from '@reduxjs/toolkit'
import HomepageHttpHandle from '../services/HomepageService'

const ActionMenuList: any = createAsyncThunk(
  'DatasetReducer/listDataset',
  // naming convention (reducer/action_name)
  async () => {
    const res = await HomepageHttpHandle.ListMenu()
    return res.data
  }
)

export default ActionMenuList
