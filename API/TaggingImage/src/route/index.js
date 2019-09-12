import express from 'express';
import analyze from '../service/analyze';

const router = express.Router();

router.get('/analyze/:param?', async (req, res) => {
  const param = req.params;
  res.json(await analyze(param));
});

module.exports = router;

