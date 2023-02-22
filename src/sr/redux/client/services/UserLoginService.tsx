import {AdminHttpAxios} from 'libraries/http/HttpAxios'

class LoginUserService {
  // list menu api
  async UserLogin() {
    return AdminHttpAxios.get('/')
  }
}

export default new LoginUserService()
