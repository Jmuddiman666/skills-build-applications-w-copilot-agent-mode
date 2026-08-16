import { Router } from 'express';
import type { Model } from 'mongoose';

export const createResourceRouter = (resourceName: string, resourceModel: Model<any>): Router => {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      const items = await resourceModel.find().lean().exec();
      response.json({ resource: resourceName, count: items.length, items });
    } catch (error) {
      next(error);
    }
  });

  return router;
};