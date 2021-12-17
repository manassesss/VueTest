import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import User from '../models/User';
import Appointments from '../models/Appointments';
import Doctor from '../models/Doctor'

 
const models = [User, Appointments, Doctor];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
