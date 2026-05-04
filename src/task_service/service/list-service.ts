import { knex } from "../../database";

class ListService{
    async execute (search?: string){

        if (search){
            const list = await knex('tasks')
            .whereLike('title',`%${search}%` )
            .orWhereLike('description', `%${search}`);

            return list
            
        } else {
            const list = await knex('tasks').select();

            return list
        }
        
    }
}

export {ListService}