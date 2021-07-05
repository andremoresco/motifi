import { BudgetMongoRepository } from "../../../repository/implementations/BudgetMongoRepository";
import { CreateBudgetController } from "./CreateBudgetController";
import { CreateBudgetUseCase } from "./CreateBudgetUseCase";

const budgetRepository = new BudgetMongoRepository();
const createBudgetUseCase = new CreateBudgetUseCase(budgetRepository);

const createBudgetController = new CreateBudgetController(createBudgetUseCase);

export { createBudgetController }