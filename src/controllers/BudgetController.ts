import * as express from 'express';
import { Budget } from '../models/budget';

class BudgetController {

    private path:string = '/budget'
    public router = express.Router();

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

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllBudgets);
    }

    getAllBudgets = (request: express.Request, response: express.Response) => {
        response.send(this.budgets)
    }

}

export default BudgetController;