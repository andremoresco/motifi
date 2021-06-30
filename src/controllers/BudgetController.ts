import {Request, Response } from 'express';
import BudgetService from '../services/BudgetService'
import Controller from './Controller';


class BudgetController extends Controller {
    
    constructor() {
        super('/budgets')
    }

    protected initRoutes(): void {
        this.router.get(this.path, this.getAllBudgets);
    }

    public getAllBudgets(req: Request, res: Response): void {
        res.send({status: "ok"});
    }

}

export default BudgetController;