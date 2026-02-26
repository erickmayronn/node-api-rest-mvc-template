import express, { Express, NextFunction, Request, Response } from 'express';
import { errorMiddleware } from './middleware/errors';
import { BadRequestException } from './exceptions/bad-requests';

const app: Express = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/error', (req: Request, res: Response, next: NextFunction) => {
  next(new BadRequestException('This is an error test request', 1002));
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
