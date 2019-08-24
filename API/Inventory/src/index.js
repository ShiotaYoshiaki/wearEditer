import express from 'express';
import config from '../config';

const app = express();

app.get('/api/inventory', (req, res)=>{
  res.send('Hello express');
});

//3000番ポートを使ってサーバーを立ち上げ
app.listen(config.port, ()=>{
  console.log(`app listening on ${config.port}`);
});