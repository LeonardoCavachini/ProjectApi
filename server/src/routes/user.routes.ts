import { UserController } from '../controllers';
import RouteConfig from './common.routes.config';
import { validateUserName } from '../middleware/CheckUsername';
import { CheckUser } from '../middleware/CheckLogin';

class UserRoutes extends RouteConfig {
  private UserController: UserController;

  constructor() {
    super();
    this.UserController = new UserController();
    this.configureRoutes();
  }

  configureRoutes() {
    this.router.post(
      '/register',
      validateUserName,
      this.UserController.register,
    );
    this.router.post('/login', CheckUser, this.UserController.login);
  }
}

export default UserRoutes;
