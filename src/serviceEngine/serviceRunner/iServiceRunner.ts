import { IService } from '../iService';

export interface IServiceRunner {
    run?: (service: IService) => void;
}
