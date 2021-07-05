import { User } from "../entities/User";

export interface IUserRepository {

    list(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;

}