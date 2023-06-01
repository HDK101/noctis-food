import User from '../../models/User';
import CRUDController from '../CRUDController';

const UserController = CRUDController(User, {
  exclude: 'passwordHash',
  routesOny: ['store', 'update', 'destroy'],
});

export default UserController;
