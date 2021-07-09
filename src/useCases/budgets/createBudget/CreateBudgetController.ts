import { Request, Response } from "express";
import { CreateBudgetUseCase } from "./CreateBudgetUseCase";

export class CreateBudgetController {

    constructor(
        private createBudgetUseCase: CreateBudgetUseCase
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        
        const { description, value, userId, startDate, finalDate } = req.body;
        
        try {
            
            await this.createBudgetUseCase.execute({
                description: description,
                value: value,
                userId: userId,
                startDate: startDate,
                finalDate: finalDate
            });

            return res.status(201).send();

        } catch (err) {
            return res.status(400).send({
                message: err.message
            })
        }
        
    }

}