import database from '@/config/database';
import { Sequelize } from 'sequelize';

const connection = new Sequelize(database);

export default connection;
