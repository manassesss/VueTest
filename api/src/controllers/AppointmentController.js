import Appointments from '../models/Appointments'
const path = require('path');

class AppointmentController { 
    async store(req, res){
        try{
            console.log(req.body);

            const novoAppointments = await Appointments.create(req.body);
            
            res.json(novoAppointments);
        }catch(e){
            res.status(400).json({ errors: e})
        }
        
    }

    async index(req, res){
        try{
            const appointments = await Appointments.findAll();

            res.json(appointments);
        }catch(e){
            res.status(400).json({ errors: e})
        }
        
    }
   

    async select(req, res){
        try{
            const appointments = await Appointments.findByPk(req.params.id)
                res.json(appointments);
        }catch(e){
            res.status(400).json({ errors: e.errors.map((err) => err.message)})
        }
    }

    async update(req, res){
        try{

            const appointments = await Appointments.findByPk(req.params.id)

            if(!req.params.id){
                return res.status(400).json({ 
                    errors: ['ID não enviado']
                 });
            }

            const appointmentsAtualizada = await appointments.update(req.body);

             res.json(appointmentsAtualizada);
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

            const appointmentsdestruido = await Appointments.destroy({where:{id: req.params.id}})

             res.json(appointmentsdestruido);
        }catch(e){
            return res.json(null)
        }
    }

   
}

export default new AppointmentController();