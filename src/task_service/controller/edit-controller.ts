import {FastifyReply, FastifyRequest } from "fastify"
import {EditTask} from '../service/edit_service'
import { EditTaskSchema } from "../schema/editTasks.schema"

class EditController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as { id: string}
        const {title, description} = EditTaskSchema.parse(req.body);

        const editService = new EditTask();

        const edit = await editService.execute(id, {title, description})

        return res.status(202).send(edit)
    }
}

export {EditController}