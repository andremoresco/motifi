import Budget, { BudgetInterface } from '../models/budget';

class BudgetService {

    constructor() {

    }

    public async list(): Promise<BudgetInterface[]> {
        return await Budget.find();
    }

    public async create(budget: BudgetInterface): Promise<BudgetInterface> {
        return await Budget.create(budget);
    }

}

export default BudgetService;