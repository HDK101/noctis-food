import { DataTypes } from 'sequelize';
import connection from '@/database/connection';

const Order = connection.define('Food', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  price: DataTypes.BIGINT.UNSIGNED,
});

Order.associate = (models) => {
  const { FoodOrder, User } = models;
  Order.belongsTo(User);
  Order.hasMany(FoodOrder);
};

export default Order;
