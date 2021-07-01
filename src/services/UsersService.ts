import User from "../models/user";

class UserService {

    public findById(id: number) {
        return User.findById(id);

    }
}

export default UserService;