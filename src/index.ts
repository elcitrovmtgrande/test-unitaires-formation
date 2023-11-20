import express from 'express';
import Blockchain from './class/Blockchain';
import Block from './class/Block';

const app = express();
const PORT = 777;

const blockchain = new Blockchain();

app.get('/blockchain', (_: any, res: any) => {
  res.json({ code: 200, blockchain: blockchain.chain });
});

app.post('/blockchain', (_: any, res: any) => {
  // create a new block
  const block = new Block('test');
  // add it to the blockchain bro
  res.json({ code: 200, blockchain: blockchain.chain });
});

app.listen(PORT, () => {
  console.log(`Blockchain listening to http://localhost:${PORT}`);
});
