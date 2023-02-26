import express, { Express } from 'express';
import dotenv from 'dotenv';
import { router as imagesRouter } from './src/routes/Image';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/img', imagesRouter);


app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
