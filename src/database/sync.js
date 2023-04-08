import Food from '@/app/models/Food';
import FoodOrder from '@/app/models/FoodOrder';
import Order from '@/app/models/Order';
import Session from '@/app/models/Session';
import User from '@/app/models/User';

export default async function sync() {
  await User.sync({ alter: true });
  await Food.sync({ alter: true });
  await Session.sync({ alter: true });
  await FoodOrder.sync({ alter: true });
  await Order.sync({ alter: true });
}
