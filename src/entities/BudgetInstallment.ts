import { BudgetInstallmentStatus } from "../utils/BudgetInstallmentStatus";

export class BudgetInstallment {

  public index: number;
  public month: number;
  public value: number;
  public status: BudgetInstallmentStatus;

  constructor(props: BudgetInstallment) {
    Object.assign(this, props);
  }
}
