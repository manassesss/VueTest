import {Sequelize, Model} from "sequelize";

export default class Appointments extends Model {
    static init(sequelize) {
        super.init({
            patient: {
                type: Sequelize.STRING,
            },
            doctor: {
                type: Sequelize.STRING,
            },
            schedule: {
                type: Sequelize.DATE,
            },
            field: {
                type: Sequelize.STRING,
            }, 
        },{
            sequelize,
            tableName: 'appointments',
        });
        return this;
    }
}