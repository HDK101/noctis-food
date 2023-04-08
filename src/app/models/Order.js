import { DataTypes } from 'sequelize';
import connection from '@/database/connection';

const Order = connection.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

Order.associate = (models) => {
  const { FoodOrder, User } = models;
  Order.belongsTo(User);
  Order.hasMany(FoodOrder);
};

export default Order;
