import {FastifyInstance} from "fastify";


// Controllers
import {CreateController} from '../task_service/controller/create-controller'
import {ListController} from '../task_service/controller/list-controller'
import {EditController} from '../task_service/controller/edit-controller'
import {DeleteControlle} from '../task_service/controller/delete-controller'
import {CompleteController} from '../task_service/controller/complete-controller'
import { ImportCsvController } from "../csv_service/controller/import-controller";


export async function tasksRoutes(app: FastifyInstance){
    app.post('/', new CreateController().handle)
    app.post('/import', new ImportCsvController().handle)
    app.get('/', new ListController().handle)
    app.put('/:id',new EditController().handle)
    app.delete('/:id',new DeleteControlle().handle)
    app.patch('/:id/complete',new CompleteController().handle)
} 




