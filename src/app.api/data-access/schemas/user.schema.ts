import { DataAccess } from '../data-access';
import { IUser } from './../../models/user';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            }
        });

        return schema;
    }
}
export const schema = mongooseConnection.model<IUser>("Users", UserSchema.schema);