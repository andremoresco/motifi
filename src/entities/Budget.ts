import { BudgetInstallment } from "./BudgetInstallment";

export class Budget {
    
    public description: string;
    public value: number;
    public userIdentityId: string;
    public finalDate: Date;
    public installments: BudgetInstallment[];

    constructor(props: Budget) {
        Object.assign(this, props);
    }

}