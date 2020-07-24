import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ProvidersController from '../controllers/ProvidersController';
import ProviderDayAvailabilityControler from '../controllers/ProviderDayAvailabilityControler';
import ProviderMonthAvailabilityControler from '../controllers/ProviderMonthAvailabilityControler';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerDayAvailabilityControler = new ProviderDayAvailabilityControler();
const providerMonthAvailabilityControler = new ProviderMonthAvailabilityControler();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/day-avalability',
  providerDayAvailabilityControler.index,
);
providersRouter.get(
  '/:provider_id/month-avalability',
  providerMonthAvailabilityControler.index,
);

export default providersRouter;
