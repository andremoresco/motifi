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

  public async connect(): Promise<ConnectionResponse> {

    let mongodbUri: string;

    if (process.env.MONGO_PROVIDER === 'atlas') {
      mongodbUri = `mongodb+srv://${this.mongoUsername}:${this.mongoPassword}@${this.mongoHost}/${this.mongoDatabase}?retryWrites=true&w=majority`;
    } else {
      mongodbUri = `mongodb://${this.mongoUsername}:${this.mongoPassword}@${this.mongoHost}:${this.mongoPort}/${this.mongoDatabase}`;
    }

    mongoose.set('useCreateIndex', true);

    return mongoose.connect(mongodbUri, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
      useCreateIndex: true,
      useFindAndModify: false
    }).then(() => {
        return {status: 'success', message: 'Mongoose connected!'};
      })
      .catch((err) => {
        return {status: 'error', message: "Connection database failed " + err.message }
      }) 
  }
}

export default DatabaseConnection;