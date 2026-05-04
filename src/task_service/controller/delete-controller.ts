import {FastifyReply, FastifyRequest } from "fastify";
import {DeleteTask} from '../service/delete-service'

class DeleteControlle{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as {id : string}

        const deleteService = new DeleteTask();
        await deleteService.execute(id)
        
        return res.status(204).send()
    }   
}

export {DeleteControlle}