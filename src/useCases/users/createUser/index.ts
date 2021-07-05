import { Auth0IdentityServerProvider } from "../../../providers/implementations/Auth0IdentityServerProvider";
import { MongoUserRepository } from "../../../repository/implementations/UserMongoRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const mongoUserRepository = new MongoUserRepository();
const identityProvider = new Auth0IdentityServerProvider();

const createUserUseCase = new CreateUserUseCase(mongoUserRepository, identityProvider);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController }