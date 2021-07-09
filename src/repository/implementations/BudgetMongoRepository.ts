import { Budget } from "../../entities/Budget";
import { IBudgetsRepository } from "../IBudgetsRepository";
import BudgetModelMongo from "./mongoModels/BudgetModelMongo";

export class BudgetMongoRepository implements IBudgetsRepository {

    async list(): Promise<Budget[]> {
        try {
            return await BudgetModelMongo.find();
        } catch (err) {
            throw new Error("Error listing Budgets. " + err.message);
        }
    }

    async create(budget: Budget): Promise<void> {
        try {

            await BudgetModelMongo.create(budget);

        } catch (err) {
            throw new Error("Error creating budget. " + err.message);
        }
    }

}
