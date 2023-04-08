import { DataTypes } from 'sequelize';
import connection from '@/database/connection';
import bcrypt from 'bcrypt';

const User = connection.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.VIRTUAL,
  },
  passwordHash: {
    type: DataTypes.STRING,
  },
}, {
  hooks: {
    beforeSave: async (instance) => {
      const saltRounds = 10;
      instance.passwordHash = await bcrypt.hash(instance.password, saltRounds);
    },
  },
});

User.associate = (models) => {
  User.hasMany(models.Session);
  User.hasMany(models.Order);
};

/*
User.beforeCreate = (instance) => {
  instance.passwordHash = bcrypt.hash(instance.password, saltRounds);
  console.log(instance.passwordHash);
}
*/

User.signIn = async (login, password) => {
  const user = await User.findOne({
    where: {
      login,
    },
  });

  const result = await bcrypt.compare(password, user.passwordHash);
  if (!result) throw new Error('Invalid credentials');

  return user;
};

User.toJSON = () => ({});

export default User;
