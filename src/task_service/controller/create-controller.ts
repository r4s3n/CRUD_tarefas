import {FastifyReply, FastifyRequest } from "fastify";
import {CreateService} from '../service/create-service'
import {createTaskSchema} from '../schema/createTask.schema'


class CreateController{
    async handle(req:FastifyRequest, res: FastifyReply){

        const {title, description} = createTaskSchema.parse(req.body);
        const createService = new CreateService();

        const create = await createService .execute({title, description})

        return res.status(201).send(create)
    }
}

export {CreateController}