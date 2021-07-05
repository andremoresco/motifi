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

}