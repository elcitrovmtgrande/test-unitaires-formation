import express from 'express';
import { Blockchain } from './class/Blockchain';

const app = express();
const PORT = 777;
const newBlockChain = new Blockchain();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/blockchain', (_req, res) => {
  res.json({ code: 200, newBlockChain });
});

app.post('/blockchain', (req, res) => {
  if (req.body.data) {
    newBlockChain.mine(req.body.data);
  } else {
    newBlockChain.mine("CatCoin");
  }
  res.json({ code: 200, newBlockChain });
});

app.listen(PORT, () => {
  console.log(`Blockchain listening to ::${PORT}`);
});
