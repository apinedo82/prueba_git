const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/baseultima',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, (err) =>{
    if (err){
        console.log(err)
    } else {
        console.log('conectado ya')
    }
}
)





app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
})