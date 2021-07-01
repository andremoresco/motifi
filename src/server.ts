import App from './app'
import BudgetController from './controllers/BudgetController';

const app = new App([
    new BudgetController()

]);

app.listen(+(process.env.APP_PORT || 3000))