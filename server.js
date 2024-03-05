const express = require('express');
const mongoose = require("./database/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}),
)

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)


app.get('/', (req, res) => {
    res.json({message: 'Dados Obtidos!'})
})

app.listen(3004, ()=> {
    console.log('Server Esta Rodando')
});
