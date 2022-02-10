//Dependency imports
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

//File imports
const routes = require('./controllers');
const sequelize = require('./config/connection');

//Variables
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `Now listening on ${PORT}. Visit http://localhost:${PORT} and log-in to start bloggin'!`
    )
  );
});
