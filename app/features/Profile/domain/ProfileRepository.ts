
import type {ProfileapiInterface} from '../infrastructure/ProfileApi'

class ProfileRepository {
  static instance:ProfileRepository;
  api: ProfileapiInterface | undefined;
  constructor(api: ProfileapiInterface) {
        if (ProfileRepository.instance) {
            return ProfileRepository.instance;
        }
        this.api = api;
    ProfileRepository.instance = this;
    }

  async getData() {
        // Lógica para obtener datos
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default ProfileRepository;
