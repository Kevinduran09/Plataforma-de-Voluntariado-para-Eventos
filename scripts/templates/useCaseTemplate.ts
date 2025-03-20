import ${featureName}Repository from '../domain/${featureName}Repository';
import {${featureName}Api} from '../infrastructure/${featureName}Api'
export const Get${featureName} = async () => {
    const repository = new ${featureName}Repository(${featureName}Api);
    return repository.getData();
};

export const Subscribe${featureName} = async (data:any) => {
    const repository = new ${featureName}Repository(${featureName}Api);
    return repository.subscribe(data);
};