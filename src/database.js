const mongoose = require ('mongoose');

const URI = 'mongodb+srv://CodexUDA:Codex2022*@codex.sdbfl4l.mongodb.net/CodexGameShop';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

    module.exports=mongoose;