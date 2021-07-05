import { Budget } from "../entities/Budget";



export interface IBudgetsRepository {

    list(): Promise<Budget[]>;
    create(budget: Budget): Promise<void>;

}