import { Request, Response } from 'express';
import BudgetService from '../services/BudgetService'
import Controller from './Controller';
import { json } from 'body-parser'

class BudgetController extends Controller {

    constructor() {
        super('/budgets');
    }

    protected initRoutes(): void {
        this.router.get(this.path, this.list);
        this.router.post(this.path, json(), this.create);
    }

    public async list(req: Request, res: Response): Promise<void> {
        res.send(await new BudgetService().list());
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            let newBudget = await new BudgetService().create(req.body);
            res.send(newBudget);
        } catch(err) {
            res.status(500).send({status: "error", message: err.message});

        }
    }
}

export default BudgetController;