import { Budget } from '../models/budget';

class BudgetService {

    constructor() {

    }

    private budgets: Budget[] = [
        {
            name: 'Canada Trip',
            value: 10000.00
        },
        {
            name: 'London trip',
            value: 15000.00
        }

    ]

    public getAllBudgets(userId: Number): void {

    }

}

export default BudgetService;