import { IRead } from './interfaces/iread';
import { IWrite } from './interfaces/iwrite';
export interface BaseBusiness<T> extends IRead<T>, IWrite<T>
{
}