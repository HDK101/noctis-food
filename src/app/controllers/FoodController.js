import Food from '../models/Food';
import CRUDController from './CRUDController';

const FoodController = CRUDController(Food);
export default FoodController;
