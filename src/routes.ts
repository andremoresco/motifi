import { Router } from 'express';
import { createUserController } from './useCases/users/createUser';
import { json } from 'body-parser'
import { listUserController } from './useCases/users/listUsers';
import { listBudgetsController } from './useCases/budgets/listBudgets';
import { createBudgetController } from './useCases/budgets/createBudget';
import { jwtCheck } from './configs/Jwt'

const router = Router();

router.post('/users', jwtCheck, json(), (request, response) => {
    return createUserController.handle(request, response);
});

router.get('/users', jwtCheck, (request, response) => {
    console.log(request);
    return listUserController.handle(request, response);
});

router.post('/budgets', json(), (req, res) => {
    return createBudgetController.handle(req, res);
});

router.get('/budgets', (req, res) => {
    return listBudgetsController.handle(req, res);
})

export { router };
