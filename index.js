const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const jokes = [
{ id: 1, text: "Why don't skeletons fight each other? They don't have the guts." },
{ id: 2, text: "Why don't eggs tell jokes? They'd crack each other up." },
{ id: 3, text: "What do you call fake spaghetti? An impasta!" },
];
app.get('/randomjoke', (req,res)=>{
    const randomeJokeIndex = Math.floor(Math.random()*jokes.length)
    const joke = jokes[randomeJokeIndex]
    res.json(joke)
})

app.listen(3000,()=>{
    console.log("server is runing")
})
