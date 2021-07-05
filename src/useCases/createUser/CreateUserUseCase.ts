import { User } from "../../entities/User";
import { IIdentityProvider, IIdentityUser } from "../../providers/IIdentityProvider";
import { IUserRepository } from "../../repository/IUserRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";


export class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository,
        private identityProvider: IIdentityProvider
    ) {}
    
    async execute(data: ICreateUserDTO) {

        const userAlreadyExist = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExist) {
            throw new Error('User already exist.');
        }

        const identityUser: IIdentityUser = await this.identityProvider.insert({
            name: data.name,
            password: data.password,
            email: data.email
        });


        const user = new User({
            name: data.name,
            password: data.password,
            email: data.email,
            identityId: identityUser.id
        });

        await this.userRepository.save(user);
    }
}