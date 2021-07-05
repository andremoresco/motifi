import User, { UserInterface } from "../models/user";


class UserService {

    public async findById(id: number): Promise<UserInterface | null> {
        return await User.findById(id);
    }

    public async list(): Promise<UserInterface[]> {
        return await User.find();
    }

    public async findByEmail(userEmail: String): Promise<UserInterface[]> {
        return await User.find( {email: userEmail});
    }

    public async create(user: UserInterface): Promise<UserInterface> {
        let userRegistered: UserInterface[] = await this.findByEmail(user.email);
        
        if (userRegistered && userRegistered.length > 0) {
            throw new Error('E-mail registered!')
        }

        return await User.create(user);
    }
}

export default UserService;
