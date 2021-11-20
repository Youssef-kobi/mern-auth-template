import express from 'express';

const app = express();

app.get("/hello", (req, res) => {
  res.send("hello word");
});

app.listen(1337,() =>{
  console.log('server started')
})