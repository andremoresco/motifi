import { Request, Response } from "express";
import { ListBudgetsUseCase } from "./ListBudgetsUseCase";

export class ListBudgetsController {

    constructor(
        private listBudgetsUseCase: ListBudgetsUseCase
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            return res.send(await this.listBudgetsUseCase.execute());
        } catch (err) {
            throw new Error('Error listing Budgets. ' + err.message);
        }

    }

}
