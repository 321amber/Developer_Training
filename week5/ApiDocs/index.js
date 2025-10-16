const express = require('express');
require('dotenv').config();
const router = require('./routes')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const app = express();

app.use(express.json());

app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, ()=>{
    console.log("server is running at the port 3000");   
});