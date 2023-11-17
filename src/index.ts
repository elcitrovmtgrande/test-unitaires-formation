import express from 'express';

const app = express();
const PORT = 777;

app.get('/blockchain', (_: any, res: any) => {
  res.json({ code: 200, blockchain: [] });
});

app.post('/blockchain', (_: any, res: any) => {
  res.json({ code: 200, blockchain: [] });
});

app.listen(PORT, () => {
  console.log(`Blockchain listening to ::${PORT}`);
});
