const express=require('express');
const app=express();
const cors=require('cors');
const port=8000;

app.use(cors({
origin:"http://127.0.0.1:5500"
}));
app.use(express.static('public'));

app.get('/gethello',(req,res)=>{
    res.send("Hello NodeJS");
});


app.listen(port,()=>{
    console.log(`App Listening at http://localhost:${port}`);
});
