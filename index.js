import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", async (req, res) =>{
    
    try{
        const result = await axios.get("https://riddles-api.vercel.app/random");
        console.log(result.data);
        res.render("index.ejs", {riddle: result.data.riddle, answer: result.data.answer});
    } catch (error){
        console.log(error.response.data);
        res.status(500);
    }
    
})


app.listen(port, ()=>{
    console.log(`App listening on port ${port} at http://localhost:${port}`);
})