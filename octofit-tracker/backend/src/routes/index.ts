import { Router } from 'express';
import {
	ActivityModel,
	LeaderboardEntryModel,
	TeamModel,
	UserModel,
	WorkoutModel,
} from '../models/index.js';
import { createResourceRouter } from './resourceRoutes.js';

const apiRouter = Router();

apiRouter.use('/users', createResourceRouter('users', UserModel));
apiRouter.use('/teams', createResourceRouter('teams', TeamModel));
apiRouter.use('/activities', createResourceRouter('activities', ActivityModel));
apiRouter.use('/leaderboard', createResourceRouter('leaderboard', LeaderboardEntryModel));
apiRouter.use('/workouts', createResourceRouter('workouts', WorkoutModel));

export default apiRouter;