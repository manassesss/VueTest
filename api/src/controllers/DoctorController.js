import Doctor from '../models/Doctor';


class DoctorController {
    async store(req, res){
        try{
            const novoDoctor = await Doctor.create(req.body);

            res.json(novoDoctor);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }

    async index(req, res){
        try{
            const doctors = await Doctor.findAll();

            res.json(doctors);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
        
    }
    

    async select(req,res){
        try{
            
            const doctor = await Doctor.findOne({ where: { field: req.body.field}});
            
            
            res.json(doctor);
        }catch(e){
            return res.status(400).json({ 
                errors: ['Dados nao batem']
             });
        }
    }

    async update(req, res){
        try{

            const doctor = await Doctor.findByPk(req.params.id)

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const doctorAtualizada = await doctor.update(req.body);

             res.json(doctorAtualizada);
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

            const doctordestruido = await Doctor.destroy({where:{id: req.params.id}})

             res.json(doctordestruido);
        }catch(e){
            return res.json(null)
        }
    }

    
}

export default new DoctorController();