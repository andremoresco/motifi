import { Budget } from "../../../entities/Budget";
import { IBudgetsRepository } from "../../../repository/IBudgetsRepository";

export class ListBudgetsUseCase {

    constructor(
        private budgetReposirory: IBudgetsRepository
    ) {}

    async execute(): Promise<Budget[]> {
        return await this.budgetReposirory.list();
    }

}