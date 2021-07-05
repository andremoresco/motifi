import { User } from "../../entities/User";
import { IUserRepository } from "../../repository/IUserRepository";

export class ListUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute(): Promise<User[]> {
        return await this.userRepository.list();
    }

}