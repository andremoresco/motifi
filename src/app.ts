import express from 'express';
import cors from 'cors';
import DatabaseConnection from './configs/database';
import Controller from './controllers/Controller';


class App {

  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    // this.configAuth();
    // this.configJwtCheck();
    this.configExpress();
    this.configCors();
    this.initControllers(controllers);
    this.connectDatabase();
  }

  public listen(port: number): void {
    console.log("Server listening on port: " + port);
    this.app.listen(port);
  }

  // private configAuth(): void {
  //   let config = {
  //     authRequired: false,
  //     auth0Logout: true,
  //     secret: '498e6538b7a46d086f8bf3a04d05682ae98d0bdb3b13dfa84adeeeab6efca268',
  //     baseURL: process.env.APP_BASE_URL,
  //     clientID: 'iItna1ejfT4uBoctpeNddwZFfWIzeUiS',
  //     issuerBaseURL: 'https://motifi.us.auth0.com'
  //   }
  //   this.app.use(auth(config));
  // }

  // private configJwtCheck(): void {
  //  let checkJwt = jwt({
  //         secret: jwks.expressJwtSecret({
  //             cache: true,
  //             rateLimit: true,
  //             jwksRequestsPerMinute: 5,
  //             jwksUri: 'https://motifi.us.auth0.com/.well-known/jwks.json'
  //       }),
  //       audience: 'http://localhost:8180',
  //       issuer: 'https://motifi.us.auth0.com/',
  //       algorithms: ['RS256']
  //   });

  //   this.app.use(checkJwt);
  // }

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

  // private configMidlewareAuthentication(): void {
  //   this.app.get('/', (req, res) => {
  //     if (!req.oidc.isAuthenticated()) {
  //       res.status(401).send("Not authenticated");
  //     } else {
  //       res.send("Logged in!");
  //     }
  //   })
  // }
}

export default App;