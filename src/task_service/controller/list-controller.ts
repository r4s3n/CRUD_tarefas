import {FastifyRequest, FastifyReply} from 'fastify'
import {ListService} from '../service/list-service'

class ListController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {search} = req.query as {search?: string}

        const listService = new ListService();
        const list = await listService.execute(search)

        return res.status(200).send(list)
    }
}

export {ListController}