const mongoose = require('mongoose');

// userNewUrlParser:  Mongoose usa o novo sistema de url
//useUnifiedTopology:  Sistema de monitoramento do banco de dados
const params = {

}
mongoose.connect('mongodb://localhost:27017/noderest',
{});

mongoose.Promise = global.Promise;

module.exports = mongoose;




