import { Router } from 'express';
import mockRouter from './mock';

const rootRouter: Router = Router();

rootRouter.use('/mock', mockRouter);

export default rootRouter;
