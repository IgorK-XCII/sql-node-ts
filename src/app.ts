import express from 'express';
import {userRouter} from './routes/userRouter';
import {create} from 'express-handlebars';
import {Database} from './model/Database';
import {SQL} from './model/SQL';
import {mainRouter} from './routes/mainRouter';
import path from 'path';

const app = express();
const hbs = create({
  defaultLayout: 'main',
  extname: 'hbs',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, 'views'));

const PORT = 3000;

app.use('/user', userRouter);
app.use('/', mainRouter);

app.use((req, res) => {
  res.status(404).send('404 PAGE NOT FOUND');
});

export const sqlDatabase = new Database(new SQL({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'node_sql',
}));

try {
  app.listen(PORT, () => console.log(`Server has been started at PORT:${PORT}`));
} catch (e) {
  console.error(e);
}
