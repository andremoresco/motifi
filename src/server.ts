import { app } from './NewApp'

app.listen(+(process.env.APP_PORT || 3000))