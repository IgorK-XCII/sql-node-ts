import express, {Response} from 'express';
import {create} from 'express-handlebars';
import path from 'path';
import {todosListRoute} from './routes/todosListRoute';
import {createTodosRoute} from './routes/createTodosRoute';
import {aboutRoute} from './routes/aboutRoute';


const app = express();
const hbs: Exphbs = create({
  defaultLayout: 'main',
  extname: 'hbs',
});
const PORT = 3000;

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, '..', 'src', 'views'));
app.use(express.static(path.resolve(__dirname, '..', 'src', 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/create', createTodosRoute);
app.use('/about', aboutRoute);
app.use('/', todosListRoute);

app.use((req, res: Response) => {
  res.status(404).send('PAGE NOT FOUND 404');
});


try {
  app.listen(PORT, () => console.log(`App running on PORT:${PORT}`));
} catch (e) {
  console.log(e.text);
}
