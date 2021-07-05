import { MongoUserRepository } from "../../repository/implementations/MongoUserRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const mongoUserRepository = new MongoUserRepository();

const listUserUseCase = new ListUserUseCase(mongoUserRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserController }
