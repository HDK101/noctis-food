import { DataTypes } from 'sequelize';
import connection from '@/database/connection';

const Session = connection.define('Session', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

Session.associate = (models) => {
  Session.belongsTo(models.User);
};

export default Session;
