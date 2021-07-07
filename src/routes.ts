import { Router } from 'express';
import { createUserController } from './useCases/users/createUser';
import { json } from 'body-parser'
import { listUserController } from './useCases/users/listUsers';
import { listBudgetsController } from './useCases/budgets/listBudgets';
import { createBudgetController } from './useCases/budgets/createBudget';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://motifi.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:8180',
    issuer: 'https://motifi.us.auth0.com/',
    algorithms: ['RS256'],
    requestProperty: 'auth'
})

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
