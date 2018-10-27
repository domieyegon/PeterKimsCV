const express= require('express');
const exphbs=require('express-handlebars');
const path=require('path');

const app= express();

app.engine('handlebars', exphbs({
    defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Set static path to public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
    res.render('kims/index')
});

app.get('/kims',(req,res)=>{
    res.render('kims/cv');
});
app.get('/gallery',(req,res)=>{
    res.render('kims/gallery');
});

const port=process.env.PORT || 5000;
app.listen(port,()=>{
   console.log(`Server started from port number ${port}`)
});
