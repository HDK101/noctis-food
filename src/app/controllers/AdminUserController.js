import User from '../../models/User';
import CRUDController from '../CRUDController';

const AdminUserController = CRUDController(User, {
  exclude: 'passwordHash',
});

export default AdminUserController;
