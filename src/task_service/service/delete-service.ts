import { knex } from "../../database";

class DeleteTask{
    async execute(taskid: string){
        const task = await knex('tasks')
        .where({
            id:taskid
        }).first()

        if(!task){
            throw new Error('Task not found!')
        }

        await knex("tasks")
        .where({
            id:task.id
        }).delete()

    }
}

export {DeleteTask}