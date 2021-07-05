import { IBudgetsRepository } from "../../../repository/IBudgetsRepository";
import { CreateBudgetDTO } from "./CreateBudgetDTO";

export class CreateBudgetUseCase {

    constructor(
        private budgetRepository: IBudgetsRepository
    ) {}

    async execute(budget: CreateBudgetDTO): Promise<void> {

        await this.budgetRepository.create({
            description: budget.description,
            value: budget.value,
            userIdentityId: budget.userId
        });

    }

}