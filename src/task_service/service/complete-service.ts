import { knex } from "../../database";

class CompleteService{
    async execute(taskId: string){
        const task = await knex('tasks')
        .where({
            id:taskId
        }).first()

        if(!task){
            throw new Error("Task not found!")
        }

        if(task.completed_at !== null){
            throw new Error("Task has already been completed!")
        }

        await knex('tasks')
        .where({id:task.id})
        .update({
            completed_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
        })

        const completed = await knex('tasks')
        .where({
            id:task.id
        }).first()


        return completed
    }
}

export {CompleteService}