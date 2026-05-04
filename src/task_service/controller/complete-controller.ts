import {FastifyReply, FastifyRequest } from "fastify"
import {CompleteService} from '../service/complete-service'


class CompleteController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as {id: string}

        const completeService = new CompleteService();
        const completed = await completeService.execute(id)

        return res.status(202).send(completed)
    }
}

export {CompleteController}