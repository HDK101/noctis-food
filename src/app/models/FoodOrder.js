import { DataTypes } from 'sequelize';
import connection from '@/database/connection';

const FoodOrder = connection.define('FoodOrder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  price: DataTypes.BIGINT.UNSIGNED,
  image: DataTypes.STRING,
});

FoodOrder.associate = (models) => {
  const { Order } = models;
  FoodOrder.belongsTo(Order);
};

export default FoodOrder;
