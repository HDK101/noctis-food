import Food from '@/app/models/Food';
import FoodCategory from '@/app/models/FoodCategory';
import FoodOrder from '@/app/models/FoodOrder';
import Session from '@/app/models/Session';
import User from '@/app/models/User';

export default async function sync() {
  await User.sync({ alter: true });
  await Food.sync({ alter: true });
  await FoodCategory.sync({ alter: true });
  await Session.sync({ alter: true });
  await FoodOrder.sync({ alter: true });
}
