const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const Contatos = new mongoose.Schema({
  nome:{
    type: String,
    required: true,
  },
  avatar:{
    type: String,
    required: false,
  },
  description:{
    type: String,
    required: true
  },
});

Contatos.plugin(mongoosePaginate);
mongoose.model('Contatos', Contatos);
