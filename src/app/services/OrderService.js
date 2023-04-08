import Food from '../models/Food';
import FoodOrder from '../models/FoodOrder';
import Order from '../models/Order';

class OrderService {
  async listAll(user) {
    return user.getOrders({
      include: FoodOrder,
    });
  }

  async order({ user, foodIds }) {
    const foods = await Food.findAll({
      where: {
        id: foodIds,
      },
    });
    const foodOrders = await Promise.all(foods.map(async (food) => FoodOrder.create({
      name: food.name,
      price: food.price,
    })));
    const order = await Order.create();
    order.addFoodOrders(foodOrders);
    user.addOrder(order);
    await order.save();

    return order;
  }
}

export default new OrderService();
