const mongoose = require('mongoose');

const URL_MONGO = 'mongodb+srv://luisjasso:dasefx818@cluster0-yiaq1.mongodb.net/test';

mongoose.connect(
    URL_MONGO,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
(error) => {
    if(error) console.log(error);
    if(!error) console.log('Conexion exitosa Director');
}
);


const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: Number,
        default: 18
    },
    nacionality:{
        type: String,
        enum: ['MX', 'US', 'NA'],
        default: 'NA',
    },
},{timestamps:true});

const Director = mongoose.model('Director', DirectorSchema);

module.exports = { Director };