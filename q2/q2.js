// 2. Develop a web server which serves static resources.
const express= require('express');
const app=express();
const port=8000;

app.use(express.static('public'));


app.listen(port,()=>{
    console.log(`App Listening at http://localhost:${port}`);
});
