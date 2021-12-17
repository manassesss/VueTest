import {Sequelize, Model} from "sequelize";

export default class User extends Model {
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
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: "Email já existe!"
                },
                validate: {
                    isEmail: {
                        msg: "Email inválido!"
                    }
                },
            },
            birth: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [8, 255],
                        msg: "Campo telefone deve ter mais de 8 caracteres."
                    }
                },
            },
            cep: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 1000],
                        msg: "Campo endereco deve ter entre 3 e 1000 caracteres."
                    }
                },
            },
            password: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 1000],
                        msg: "Campo endereco deve ter entre 3 e 1000 caracteres."
                    }
                },
            },
        },{
            sequelize
        });
        return this;
    }
    
}