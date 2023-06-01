import Food from '../models/Food';
import CRUDController from './CRUDController';

const UserFoodController = CRUDController(Food, {
  routesOnly: ['index', 'show'],
});

export default UserFoodController;
