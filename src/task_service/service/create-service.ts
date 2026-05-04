import {knex} from '../../database'
import { randomUUID } from 'node:crypto'
import { TaskProds } from '../dto/task.dto'

class CreateService{
    async execute ({title, description}: TaskProds){

        const data = {
            id: randomUUID(),
            title: title,
            description: description
        }

        const create = await knex('tasks')
            .insert(data)
            .returning('*')

        return create
    }
}

export {CreateService}