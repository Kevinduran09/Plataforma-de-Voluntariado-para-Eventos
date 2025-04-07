
import type {accountapiInterface} from '../infrastructure/accountApi'

class accountRepository {
  static instance:accountRepository;
  api: accountapiInterface | undefined;
  constructor(api: accountapiInterface) {
        if (accountRepository.instance) {
            return accountRepository.instance;
        }
        this.api = api;
    accountRepository.instance = this;
    }

  async getData() {
        // Lógica para obtener datos
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default accountRepository;
