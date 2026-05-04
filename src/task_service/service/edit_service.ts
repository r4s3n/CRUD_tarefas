import { knex } from "../../database";
import {EditTaskProds} from '../dto/task.dto'

class EditTask{
    async execute(taskId: string, {title, description}: EditTaskProds){

        const task = await knex('tasks')
        .where({
            id:taskId
        }).first()

        if(!task){
            throw new Error('Task not found!')
        }

        let data: EditTaskProds = {}

        if(title !== undefined && title !== task.title){
            data.title = title
        }

        if(description !== undefined && description !== task.description){
            data.description = description
        }

        if(Object.keys(data).length != 0){
            data.updated_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
        } else {
            throw new Error('nothing to update')
        }

        await knex('tasks').where({id: task.id}).update(data)

        const edit = await knex('tasks')
        .where({
            id: task.id
        })
        .first()

        return edit
    }
}

export {EditTask}