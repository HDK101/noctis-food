import { DataTypes } from 'sequelize';
import connection from '@/database/connection';

const Food = connection.define('Food', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  price: DataTypes.BIGINT.UNSIGNED,
  image: DataTypes.STRING,
});

export default Food;
