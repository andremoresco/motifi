import mongoose from 'mongoose';
import { ConnectionResponse } from '../interfaces/database';

class DatabaseConnection {

  private mongoHost = process.env.MONGO_HOST;
  private mongoPort = process.env.MONGO_PORT;
  private mongoUsername = process.env.MONGO_USERNAME;
  private mongoPassword = process.env.MONGO_PASSWORD;
  private mongoDatabase = process.env.MONGO_DATABASE;

  constructor () {

  }

  connect = async (): Promise<ConnectionResponse> => {

    let mongodbUri: string;

    if (process.env.MONGO_PROVIDER === 'atlas') {
      console.log("connecting on mongo using:");
      console.log("Host: " + this.mongoHost);
      console.log("Database: "+ this.mongoDatabase);
      console.log("Username: " + this.mongoUsername);
      console.log("Password: "+ this.mongoPassword);
      mongodbUri = `mongodb+srv://${this.mongoUsername}:${this.mongoPassword}@${this.mongoHost}/${this.mongoDatabase}?retryWrites=true&w=majority`;
    } else {
      mongodbUri = `mongodb://${this.mongoUsername}:${this.mongoPassword}@${this.mongoHost}:${this.mongoPort}/${this.mongoDatabase}`;
    }
    console.log(mongodbUri);

    return mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        return {status: 'success', message: 'Mongoose connected!'};
      })
      .catch((err) => {
        return {status: 'error', message: "Connection database failed " + err.message }
      }) 
  }
}

export default DatabaseConnection;