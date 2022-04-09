const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const usuarioRouter = require('./src/routes/usuario_routes');
app.use('/usuarios', usuarioRouter);

const ciudadRouter = require('./src/routes/ciudad_routes');
app.use('/ciudad', ciudadRouter);

const hospitalRouter = require('./src/routes/hospital_routes');
app.use('/hospital', hospitalRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
