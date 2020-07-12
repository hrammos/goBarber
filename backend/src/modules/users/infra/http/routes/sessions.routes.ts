import { Router } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AuthenticateUserSessionService from '@modules/users/services/AuthenticateUserSessionService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const usersRepository = new UsersRepository();
  const authenticateUser = new AuthenticateUserSessionService(usersRepository);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  return response.json({ user, token });
});

export default sessionsRouter;
