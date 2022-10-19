const db = require('../config/db');
const app = require("../config/server");


app.get('/', (req, res)=>{
    res.render('../views/index')
});
app.get('/404', (req, res)=>{
    res.render('../views/404')
});
app.get('/cover', (req, res)=>{
    res.render('../views/cover')
});
app.get('/find', (req, res)=>{
    res.render('../views/find')
});
app.get('/login', (req, res)=>{
    res.render('../views/login')
});
app.get('/notaPrueba', (req, res)=>{
    res.render('../views/notaPrueba')
});
app.get('/once', (req, res)=>{
    res.render('../views/once')
});
app.get('/onceA', (req, res)=>{
    res.render('../views/onceA')
});
app.get('/school', (req, res)=>{
    res.render('../views/school')
});
app.get('/search', (req, res)=>{
    res.render('../views/search')
});
app.get('/singin', (req, res)=>{
    res.render('../views/singin')
});
app.get('/terminos', (req, res)=>{
    res.render('../views/terminos')
});
app.get('/userPrueba', (req, res)=>{
    res.render('../views/userPrueba')
});
