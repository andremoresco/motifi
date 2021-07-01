import express from 'express';
import cors from 'cors';
import DatabaseConnection from './configs/database';
import Controller from './controllers/Controller';

class App {

  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.initControllers(controllers);
    this.configExpress();
    this.configCors();
    this.connectDatabase();

  }

  public listen(port: number): void {
    console.log("Server listening on port: " + port);
    this.app.listen(port);
  }

  private initControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    })
  }

  private configExpress(): void {
    this.app.use(express.json());
  }

  private configCors():void {
    this.app.use(cors());
  }

  private connectDatabase(): void {
    new DatabaseConnection().connect()
      .then((response) => {
        if (response.status === 'success') {
          console.log(response.message);
        } else {
          console.log(response.message);
        }
      });
  }


}

export default App;