import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import MongoUserModel, { MongoUserInterface } from './mongoModels/MongoUserModel';

export class MongoUserRepository implements IUserRepository {
    
    async list(): Promise<User[]> {
        try {

            return await MongoUserModel.find();

        } catch(err) {
            throw new Error("Error listing the users. " + err.message);
        }
    }

    async findByEmail(userEmail: string): Promise<User> {

        try {
            const users: MongoUserInterface = await MongoUserModel.findOne({email: userEmail});

            if (users) {
                return new User(users);
            } else {
                return null;
            }
    
        } catch (err) {
            throw new Error(err.message);

        }
    }
    
    async save(user: User): Promise<void> {
        await MongoUserModel.create(user);
    }

}
