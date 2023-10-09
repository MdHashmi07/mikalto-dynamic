import { createServer } from 'http';
import { port } from './config.js';
import { handleRoutes } from './routes/handleRoute.js';

const server = createServer((request, response) => {
    try {
        response.statusCode = 200;
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.end(handleRoutes(request));
    } catch (error) {
        console.log(error);
    }
});

server.listen(port, () => {
    console.log(`Server listen on port: ${port}`);
});























































