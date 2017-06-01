import { User, IUser} from './../models/User';
import { schema } from './../data-access/schemas/user.schema';
import { BaseRepository } from './base.repository';

export class UserRepository  extends BaseRepository<IUser> {
    constructor () {
        super(schema);
    }
}

Object.seal(UserRepository);