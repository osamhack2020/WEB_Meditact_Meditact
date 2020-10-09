import './env';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import db from './models';
import routes from './routes';
import './config/passport';

const PORT = process.env.PORT;
const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors policy setting
app.use(cors());

// logger setting
app.use(logger('common'));

// router middleware
app.use(routes);

// server start
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

// db connection
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log('Cannot connect to database!', err);
    process.exit();
  });
