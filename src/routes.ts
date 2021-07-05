import { Router } from 'express';
import { createUserController } from './useCases/users/createUser';
import { json } from 'body-parser'
import { listUserController } from './useCases/users/listUsers';
import { listBudgetsController } from './useCases/budgets/listBudgets';
import { createBudgetController } from './useCases/budgets/createBudget';

const router = Router();

router.post('/users', json(), (request, response) => {
    return createUserController.handle(request, response);
});

router.get('/users', (request, response) => {
    return listUserController.handle(request, response);
});

router.post('/budgets', json(), (req, res) => {
    return createBudgetController.handle(req, res);
});

router.get('/budgets', (req, res) => {
    return listBudgetsController.handle(req, res);
})

export { router };
