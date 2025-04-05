
import type { loginapiInterface } from '../infrastructure/loginApi'

class loginRepository {
  static instance: loginRepository;
  api!: loginapiInterface;
  constructor(api: loginapiInterface) {
    if (loginRepository.instance) {
      return loginRepository.instance;
    }
    this.api = api;
    loginRepository.instance = this;
  }

  async login(data: any) {
    const response = await this.api?.fetchLogin(data);

    if (!response || response.length === 0){
      return null
    }
    return response
  }

  async subscribe(data: any) {
  
  }
}
export default loginRepository;
