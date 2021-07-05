import { BudgetMongoRepository } from "../../../repository/implementations/BudgetMongoRepository";
import { ListBudgetsController } from "./ListBudgetsController";
import { ListBudgetsUseCase } from "./ListBudgetsUseCase";


const budgetReposirory = new BudgetMongoRepository();
const listBudgetsUseCase = new ListBudgetsUseCase(budgetReposirory);

const listBudgetsController = new ListBudgetsController(listBudgetsUseCase);

export { listBudgetsController }