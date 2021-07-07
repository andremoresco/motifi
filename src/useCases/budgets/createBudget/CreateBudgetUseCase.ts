import { BudgetInstallment } from "../../../entities/BudgetInstallment";
import { IBudgetsRepository } from "../../../repository/IBudgetsRepository";
import { CreateBudgetDTO } from "./CreateBudgetDTO";
import moment from 'moment';

export class CreateBudgetUseCase {

    constructor(
        private budgetRepository: IBudgetsRepository
    ) {}

    async execute(budget: CreateBudgetDTO): Promise<void> {

        const installments: BudgetInstallment[] = this.createInstallments(budget);

        // await this.budgetRepository.create({
        //     description: budget.description,
        //     value: budget.value,
        //     userIdentityId: budget.userId,
        //     finalDate: budget.finalDate,
        //     installments: installments
        // });

    }

    private createInstallments(budget: CreateBudgetDTO): BudgetInstallment[] {
        this.verifyCompatiblePeriod(budget.startDate, budget.finalDate);

        const difference = this.getMonthDifferenceBetween(budget.startDate, budget.finalDate);

        // Implement for to create installments using the difference between start date and final date months

        console.log(difference)

        return null;
    }

    private verifyCompatiblePeriod(startDate: Date, finalDate: Date): void {
        const difference = this.getMonthDifferenceBetween(startDate, finalDate);
        if (difference <= 0) {
            throw new Error("Start Date and Final Date incorrectly.");
        }
    }

    private getMonthDifferenceBetween(first: Date, second: Date): number {
        const firsMoment = moment(first).date(1);
        const secondMoment = moment(second).date(1);
        return secondMoment.diff(firsMoment, 'month');
    }

}