import { Router } from 'express';

const mockRouter: Router = Router();

mockRouter.get('/', (req, res) => {
  res.json({ message: 'This is a mock route' });
});

export default mockRouter;
