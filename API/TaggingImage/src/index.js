import express from 'express';
import bodyParser from 'body-parser';
import conf from '../config.json';
import router from './route/index';

const app = express();

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/tag', router);

//サーバ起動
app.listen(conf.port);
console.log('listen on port ' + conf.port);