import {z} from 'zod'

export const EditTaskSchema = z.object({
    title: z.string().min(1, 'O titulo não pode ser vazio').optional(),
    description: z.string().min(10, 'Coloque uma descrição').optional(),
})
