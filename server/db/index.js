const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sacred:sacred@cluster0-qangt.mongodb.net/rest?retryWrites=true",
    { useNewUrlParser: true }).catch
    (err => console.log('Erro ao conectar a database'));

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = mongoose;