
import type {${featureName}apiInterface} from '../infrastructure/${featureName}Api'

class ${featureName}Repository {
  static instance:${featureName}Repository;
  api: ${featureName}apiInterface | undefined;
  constructor(api: ${featureName}apiInterface) {
        if (${featureName}Repository.instance) {
            return ${featureName}Repository.instance;
        }
        this.api = api;
    ${featureName}Repository.instance = this;
    }

  async getData() {
        // Lógica para obtener datos
    }

  async subscribe(data:any) {
        // Lógica para suscribirse
    }
}
export default ${featureName}Repository;
