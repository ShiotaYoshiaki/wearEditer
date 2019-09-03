import express from 'express';
import analyze from '../service/analyze';

const router = express.Router();

// routerにルーティングの動作を書いてく
router.get('/analyze/:param?', async (req, res) => {
  const param = req.params;
  res.json(await analyze(param));
});

//routerをモジュールとして扱う準備
module.exports = router;

