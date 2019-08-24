import express from 'express';
import config from '../config';

const app = express();

app.get('/api/inventory', (req, res)=>{
  res.send('Hello express');
});
