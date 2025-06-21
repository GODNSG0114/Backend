import express from 'express';
const app = express()

const port = process.env.PORT || 3000

const joke = [
   {
    id: 1,
    title: "Why don't scientists trust atoms?",
    content: "Because they make up everything!"
  },
   {
    id: 2,
    title: "Parallel lines",
    content: "They have so much in common. It’s a shame they’ll never meet."
  },
   {
    id: 3,
    title: "The skeleton's problem",
    content: "He didn’t go to the party — he had no body to go with."
  },
   {
    id: 4,
    title: "Elevator joke",
    content: "It works on so many levels."
  },
   {
    id: 5,
    title: "The computer's snack",
    content: "It had a byte!"
  }
] ;

app.get('/api/jokes' , (req , res)=>{
    res.send(joke)
})


app.listen(port , ()=>{
    console.log(`Serve at http://localhost:${port}`)
})
