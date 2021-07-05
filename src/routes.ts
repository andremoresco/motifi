import { Router } from 'express';
import { createUserController } from './useCases/createUser';
import { json } from 'body-parser'
import { listUserController } from './useCases/listUsers';

const router = Router();

router.post('/users', json(), (request, response) => {
    return createUserController.handle(request, response);
})

router.get('/users', (request, response) => {
    return listUserController.handle(request, response);
});

export { router };
