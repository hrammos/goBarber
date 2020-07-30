import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

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
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerDayAvailabilityControler.index,
);
providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthAvailabilityControler.index,
);

export default providersRouter;
