const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const cors = require("cors");

const app = express();
const port = process.env.APP_PORT || 3001;

app.use(express.json());


const corsOptions = {
  "origin": ["https://totheblock.com", "https://deployrama.github.io", "https://testing.totheblock.com"],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(cors(corsOptions));


routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('My port' + port);
});


