import {FastifyReply, FastifyRequest } from "fastify"
import {ImportCsvService} from '../service/import-service'

class ImportCsvController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const file = await req.file()

        if(!file){
            return res.status(400).send({
                error: 'CSV file is required'
            })
        }

        const importCsv= new ImportCsvService()

        const result = await importCsv.execute(file.file)


        return res.status(201).send(result)
    }
}

export {ImportCsvController}