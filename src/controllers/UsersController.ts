import { Request, Response } from "express";
import Controller from "./Controller";
import { json } from 'body-parser'
import UserService from "../services/UsersService";


class UsersController extends Controller {

    constructor() {
        super('/users')
    }

    protected initRoutes(): void {
        this.router.get(this.path, this.list);
        this.router.post(this.path, json(), this.create);
    }

    public async list(req: Request, res: Response) {
        res.send(await new UserService().list());
    }

    public async create(req: Request, res: Response) {
        try {
            let newUser = await new UserService().create(req.body);
            res.send(newUser);
        
        } catch(err) {
            res.status(500).send({status: "error", message: err.message});
        }
    }

}

export default UsersController;