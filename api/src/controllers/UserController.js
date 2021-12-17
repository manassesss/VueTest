import User from '../models/User';


class UserController {
    async store(req, res){
        try{
            const novoUser = await User.create(req.body);

            res.json(novoUser);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }

    async index(req, res){
        try{
            const users = await User.findAll();

            res.json(users);
        }catch(e){
            res.status(400).json( {errors: e})
        }
        
    }
    

    async select(req,res){
        try{
            
            const user = await User.findOne({ where: { email: req.body.email, password: req.body.password }});
            
            
            res.json(user);
        }catch(e){
            return res.status(400).json({ 
                errors: ['Dados nao batem']
             });
        }
    }

    async update(req, res){
        try{

            const user = await User.findByPk(req.params.id)

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const userAtualizada = await user.update(req.body);

             res.json(userAtualizada);
        }catch(e){
            return res.json(null)
        }
    }

    async delete(req, res){
        try{

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const userdestruido = await User.destroy({where:{id: req.params.id}})

             res.json(userdestruido);
        }catch(e){
            return res.json(null)
        }
    }

    
}

export default new UserController();