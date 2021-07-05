import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {

    constructor(
        private listUserUseCase: ListUserUseCase
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        return res.send(await this.listUserUseCase.execute());
    }
}