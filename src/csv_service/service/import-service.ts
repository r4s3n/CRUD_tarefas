import { parse } from 'csv'
import { Readable } from 'node:stream'
import {CreateService} from '../../task_service/service/create-service'

class ImportCsvService{
    async execute(fileStream: Readable){
        const parser = fileStream.pipe(
            parse({
                from_line: 2,
                delimiter: ';',
                trim: true,
                
            })
        )

        const createService = new CreateService()
        let count = 0

        for await (const line of parser){
            const [title, description] = line
            console.log(`Leu a linha ${count}`)

            await createService.execute({
                title,
                description
            })

            count++
        }

        return {
            message: 'CSV imported successfully',
            tasks_created: count
        }
    }
}

export { ImportCsvService}