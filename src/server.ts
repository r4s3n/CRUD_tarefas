import fastify from "fastify";
import multipart from "@fastify/multipart";
import {tasksRoutes} from './routes/routeTasks'


const app = fastify();
const port = 3333;

app.register(multipart)
app.register(tasksRoutes, {
    prefix: 'tasks'
})

app.listen({
    port:port,
}).then(() => {
    console.log('HTTP server Running!')
})