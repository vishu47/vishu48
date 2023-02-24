import axios from 'axios'
import {AdminHttpAxios} from 'libraries/http/HttpAxios'

class HomepageHttpHandle {
  // list menu api
  async ListMenu() {
    return AdminHttpAxios.get('/create-menu')
  }
  // create menu api
  async CreateMenu(data: any) {
    return AdminHttpAxios.post('/create-menu', data)
  }
  // create page api
  async CreatePage(data: any) {
    return AdminHttpAxios.post('/create-page', data)
  }
  // delete menu api
  async DeleteMenu(id: number) {
    return AdminHttpAxios.delete(`/menu/${id}/`)
  }
  // get menu item api
  async GetMenuItem(id: number) {
    return AdminHttpAxios.get(`/menu/${id}/`)
  }
  // get page type api
  async GetPageItem(id: any) {
    return AdminHttpAxios.get(`/page/${id}/`)
  }
  // edit menu item api
  async EditMenuItem(data: any) {
    return AdminHttpAxios.put(`/menu/${data.get('id')}/`, data)
  }
  // get menu type api
  async MenuTypeList() {
    return AdminHttpAxios.get(`/create-menu-type`)
  }
  // get sectionlist api
  async SectionList() {
    return AdminHttpAxios.get(`/create-page`)
  }
  // edit page item api
  async EditPageItem(data: any) {
    return AdminHttpAxios.put(`/page/${data.get('id')}/`, data)
  }
  // delete page item api
  async DeletePageSection(id: any) {
    return AdminHttpAxios.delete(`/page/${id}/`)
  }
  // create sub page item api
  async CreateSubPageIconSection(data: any) {
    return AdminHttpAxios.post(`/create-icon-section`, data)
  }
  // delete page item api
  async EditSubPageIconItem(id: any) {
    return AdminHttpAxios.put(`/page/${id}/`)
  }
}

export default new HomepageHttpHandle()
