import App from './app'
import BudgetController from './controllers/BudgetController';
import UsersController from './controllers/UsersController';

const app = new App([
    new BudgetController(),
    new UsersController()

]);

app.listen(+(process.env.APP_PORT || 3000))