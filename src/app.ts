import express from 'express'
import DatabaseConnection from './configs/database'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

const dbConnect = new DatabaseConnection().connect()
    .then((response) => {
    if (response.status === 'success') {
        console.log(response.message);
    } else {
        console.log(response.message);
    }
});


export { app }