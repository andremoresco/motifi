import { BudgetInstallment } from "../../../entities/BudgetInstallment";
import { IBudgetsRepository } from "../../../repository/IBudgetsRepository";
import { CreateBudgetDTO } from "./CreateBudgetDTO";
import moment from 'moment';
import { BudgetInstallmentStatus } from "../../../utils/BudgetInstallmentStatus";

export class CreateBudgetUseCase {

    constructor(
        private budgetRepository: IBudgetsRepository
    ) { }

    async execute(budget: CreateBudgetDTO): Promise<void> {

        const installments: BudgetInstallment[] = this.createInstallments(budget);

        await this.budgetRepository.create({
            description: budget.description,
            value: budget.value,
            userIdentityId: budget.userId,
            finalDate: budget.finalDate,
            installments: installments
        });

    }

    private createInstallments(budget: CreateBudgetDTO): BudgetInstallment[] {
        this.verifyCompatiblePeriod(budget.startDate, budget.finalDate);

        const difference = this.getMonthDifferenceBetween(budget.startDate, budget.finalDate);

        let installments: BudgetInstallment[] = [];

        let month: number = moment(budget.startDate).month();
        let valuePerMonth: number = budget.value / difference;

        for (let i = 0; i < difference; i++) {

            if (month > 11) {
                month = 0
            }

            let installment: BudgetInstallment = new BudgetInstallment({
                index: i + 1,
                month: month++,
                value: valuePerMonth,
                status: BudgetInstallmentStatus.PENDING
            })
            installments.push(installment);
        }

        console.log(difference)
        console.log(installments);

        return installments;
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