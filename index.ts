import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', async (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port ?? 3000, () => {
  console.log(`Server is running at port ${port}`);
});
