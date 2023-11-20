import express from "express";
import { Blockchain } from "./class/Blockchain";

const app = express();
const PORT = 777;
const blockchain = new Blockchain();

app.use(express.json());

app.get("/blockchain", (_: any, res: any) => {
  res.json({ code: 200, blockchain: blockchain.getChain() });
});

app.post("/blockchain", (req: any, res: any) => {
  blockchain.addBlock(req.body.data);
  res.json({ code: 200, blockchain: blockchain.getChain() });
});

app.listen(PORT, () => {
  console.log(`Blockchain listening to ::${PORT}`);
});
