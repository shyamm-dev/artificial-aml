import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

const corsOptions = { origin: 'http://localhost:4200' };

app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
  res.send({ ok: true });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});