import axios from 'axios'
import {HttpAxios} from 'libraries/http/HttpAxios'

class HomepageHttpHandle {
  // list menu api
  async ListMenu() {
    return HttpAxios.get('/dataset-list/')
  }
}

export default new HomepageHttpHandle()
