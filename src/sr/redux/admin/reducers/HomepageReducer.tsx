import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import {ConnectionError, Delete, Edit, List, Success} from 'sr/helpers/alerts/ReducersAlert'
import ActionMenuList from 'sr/redux/client/actions/HomepageAction'
import {
  ActionCreateMenu,
  ActionListMenu,
  ActionDeleteMenu,
  ActionGetMenuItem,
  ActionEditMenuItem,
  ActionMenuTypeList,
  ActionSectionList,
  ActionCreatePage,
  ActionGetPageItem,
  ActionEditPageItem,
  ActionDeletePageSection,
  ActionCreateSubPageIconSection,
} from '../actions/HomepageAction'

const initialState = {
  menuList: [],
  menuTypeList: [],
  sectionList: [],
  pageSectionDetails: [],
  itemDetails: [],
  loading: false,
  error: [],
}

const Homepage = createSlice({
  name: 'Homepage',
  initialState,
  reducers: {},
  extraReducers: {
    // *************** List Menu *************
    // initialize request
    [ActionListMenu.pending]: (state: any) => {
      if (state.menuList.length > 0) {
        state.loading = false
      } else {
        state.loading = true
      }
    },
    // have any response from api with status code 200
    [ActionListMenu.fulfilled]: (state: any, action: any) => {
      state.loading = false
      state.menuList = action.payload
    },
    // not have any response from api
    [ActionListMenu.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** create header Menu list item *************
    // initialize request
    [ActionCreateMenu.pending]: (state: any) => {
      state.loading = false
    },
    // have any response from api with status code 200
    [ActionCreateMenu.fulfilled]: (state: any, action: any) => {
      state.loading = false
      Success('menu')
    },
    // not have any response from api
    [ActionCreateMenu.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** delete header Menu list item *************
    // initialize request
    [ActionDeleteMenu.pending]: (state: any) => {
      state.loading = false
    },
    // have any response from api with status code 200
    [ActionDeleteMenu.fulfilled]: (state: any, action: any) => {
      state.loading = false
      Delete('menu')
    },
    // not have any response from api
    [ActionDeleteMenu.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** get header Menu list item *************
    // initialize request
    [ActionGetMenuItem.pending]: (state: any) => {
      state.loading = false
    },
    // have any response from api with status code 200
    [ActionGetMenuItem.fulfilled]: (state: any, action: any) => {
      state.loading = false
      state.itemDetails = action.payload
      state.pageSectionDetails = []
    },
    // not have any response from api
    [ActionGetMenuItem.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** get header Menu list item *************
    // initialize request
    [ActionGetPageItem.pending]: (state: any) => {
      state.loading = false
    },
    // have any response from api with status code 200
    [ActionGetPageItem.fulfilled]: (state: any, action: any) => {
      state.loading = false
      state.pageSectionDetails = action.payload
      state.itemDetails = []
    },
    // not have any response from api
    [ActionGetPageItem.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** get header Menu list type item *************
    // initialize request
    [ActionMenuTypeList.pending]: (state: any) => {
      state.loading = false
    },
    // have any response from api with status code 200
    [ActionMenuTypeList.fulfilled]: (state: any, action: any) => {
      state.loading = false
      state.menuTypeList = action.payload
    },
    // not have any response from api
    [ActionMenuTypeList.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** edit/update Menu list item *************
    // initialize request
    [ActionEditMenuItem.pending]: (state: any) => {
      state.loading = false
    },
    // have any response from api with status code 200
    [ActionEditMenuItem.fulfilled]: (state: any, action: any) => {
      state.loading = false
      Edit('Menu')
    },
    // not have any response from api
    [ActionEditMenuItem.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** edit/update page list item *************
    // initialize request
    [ActionEditPageItem.pending]: (state: any) => {
      state.loading = false
    },
    // have any response from api with status code 200
    [ActionEditPageItem.fulfilled]: (state: any, action: any) => {
      state.loading = false
      Edit('Page')
    },
    // not have any response from api
    [ActionEditPageItem.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** get section list item *************
    // initialize request
    [ActionSectionList.pending]: (state: any) => {
      state.loading = true
      if (state.menuList.length > 0) {
        state.loading = false
      } else {
        state.loading = true
      }
    },
    // have any response from api with status code 200
    [ActionSectionList.fulfilled]: (state: any, action: any) => {
      state.loading = false
      state.sectionList = action.payload
    },
    // not have any response from api
    [ActionSectionList.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** get section list item *************
    // initialize request
    [ActionDeletePageSection.pending]: (state: any) => {
      state.loading = true
      state.loading = false
    },
    // have any response from api with status code 200
    [ActionDeletePageSection.fulfilled]: (state: any, action: any) => {
      state.loading = false
      Delete('Page Section')
    },
    // not have any response from api
    [ActionDeletePageSection.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** create page section  *************
    // initialize request
    [ActionCreatePage.pending]: (state: any) => {
      state.loading = false
    },
    // have any response from api with status code 200
    [ActionCreatePage.fulfilled]: (state: any, action: any) => {
      state.loading = false
      Success('Page Section')
    },
    // not have any response from api
    [ActionCreatePage.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },

    // *************** create page section  *************
    // initialize request
    [ActionCreateSubPageIconSection.pending]: (state: any) => {
      state.loading = false
    },
    // have any response from api with status code 200
    [ActionCreateSubPageIconSection.fulfilled]: (state: any, action: any) => {
      state.loading = false
      Success('Sub Page Icon Section')
    },
    // not have any response from api
    [ActionCreateSubPageIconSection.rejected]: (state: any) => {
      state.loading = false
      ConnectionError()
    },
  },
})

export default Homepage.reducer
