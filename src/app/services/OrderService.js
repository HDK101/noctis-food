import Food from '../models/Food';
import FoodOrder from '../models/FoodOrder';
import Order from '../models/Order';

class OrderService {
  async listAll(user) {
    return user.getOrders({
      include: FoodOrder,
    });
  }

  async retrieve(user, id) {
    const orders = await user.getOrders({
      include: FoodOrder,
    });

    console.log(orders);

    return orders.find((order) => order.id === Number(id));
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
      image: food.image,
    })));
    const order = await Order.create();
    order.addFoodOrders(foodOrders);
    user.addOrder(order);
    await order.save();

    return order;
  }
}

export default new OrderService();
