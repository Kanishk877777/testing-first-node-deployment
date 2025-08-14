const express = require('express')
const app = express();

app.get('/', (req, res, next) => {
    console.log('this is first middleware', req.url, req.method);
    next();


})

app.get('/',(req,res,next)=>{
    console.log("this is first.5 middleware", req.url);
    res.send('<h1>welcome to home page</h1>')
    
})

app.get('/contact-us', (req, res, next) => { //app.get() is being used to take user input
    console.log('this is second middleware', req.url);

    res.send('<h1>enter details</h1><form action="/contact-us" method="POST"><input type="text" name="name" placeholder="entername" /><input type="Submit"/>')
})

app.use(express.urlencoded({ extended: true }))// used for accessing user inputs. vanilla nodejs had buffer of chunks made into js objects

app.post('/contact-us',(req,res,next)=>{ //app.post() is being used to parse user input
    console.log('this is third middleware',req.url,req.method,req.body);
    const usrname = req.body.name;
    console.log(`new user id is ${usrname}`);
    res.send(`<h1>registration successful !! welcome ${usrname} </h1><br><a href="/">Click to return to home</a>`)
    
    
})



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}/`);

})