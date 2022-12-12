import { ProjectController } from '../controllers';
import RouteConfig from './common.routes.config';
import validateJWT from '../auth/validateJWT';
import { CheckProject } from '../middleware/CheckProject';
import { CheckOwner } from '../middleware/CheckOwner';
import { CheckProjectId } from '../middleware/CheckProjectId';

class ProjectRoutes extends RouteConfig {
  private ProjectController: ProjectController;

  constructor() {
    super();
    this.ProjectController = new ProjectController();
    this.configureRoutes();
  }

  configureRoutes() {
    this.router.post(
      '/project/create',
      CheckProject,
      validateJWT,
      this.ProjectController.create,
    );
    this.router.get(
      '/project/showAll',
      validateJWT,
      this.ProjectController.get,
    );
    this.router.get(
      '/project/:id',
      CheckProjectId,
      validateJWT,
      this.ProjectController.getById,
    );
    this.router.put(
      '/project/:id',
      CheckOwner,
      validateJWT,
      this.ProjectController.put,
    );
    this.router.patch(
      '/project/:id/done',
      CheckOwner,
      validateJWT,
      this.ProjectController.patch,
    );
    this.router.delete(
      '/project/:id',
      CheckOwner,
      validateJWT,
      this.ProjectController.delete,
    );
  }
}

export default ProjectRoutes;
