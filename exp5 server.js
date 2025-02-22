const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');

const app =express();
const PORT =3000;

//Middleware to parse from data
app.use(bodyParser.urlencoded({extended: true}));

//Serve static files (HTML,CSS,JS)
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.get('/',(req,res) => {
res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/login',(req,res) => {
res.sendFile(path.join(__dirname,'public','login.html'));
});

app.get('/register',(req,res) => {
res.sendFile(path.join(__dirname,'public','register.html'));
});

//Handle Register Form Submission
app.post('/login',(req,res) => {
 const { username,password } = req.body;
 console.log('Login Attempt: ${username},${password}');
 res.send('Welcome, ${username}!');
 });

 //Handle Register Form Submission
 app.post('/register', (req,res) => {
  const { username,password } = req.body;
  console.log('New Register: ${username},${password}');
    res.send('Account created for ${username}!');
});
app.listen(PORT,()=>{
    console.log('Server running at http://localhost:${PORT}');
});



