const express = require('express');

const server = express()
const port = 8080

server.use(express.json())
require("./controller/authController")(server)

server.listen(port, ()=> console.info('server is running!'))

