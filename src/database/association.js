import User from '@/app/models/User';
import Food from '@/app/models/Food';
import FoodCategory from '@/app/models/FoodCategory';
import Session from '@/app/models/Session';
import FoodOrder from '@/app/models/FoodOrder';
import Order from '@/app/models/Order';

const models = {
  User,
  Food,
  FoodCategory,
  Session,
  FoodOrder,
  Order,
};

Object
  .values(models)
  .filter((model) => model.associate)
  .forEach((model) => model?.associate(models));
