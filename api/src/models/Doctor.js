import {Sequelize, Model} from "sequelize";

export default class Doctor extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Campo nome deve ter entre 3 e 255 caracteres."
                    }
                }
            },
            field: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
        },{
            sequelize
        });
        return this;
    }
    
}