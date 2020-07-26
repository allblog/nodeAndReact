const mongoose = require('mongoose');
const Contatos = mongoose.model('Contatos');

module.exports = {
  async index(req, res){
    const {page = 1} = req.query;
    const contatos = await Contatos.paginate({}, {page, limit: 100});
    return res.json(contatos);
  },
  async show(req, res){
    const contato = await Contatos.findById(req.params.id);
    return res.json(contato);
  },
  async store(req, res){
    const contato = await Contatos.create(req.body);
    return res.json(contato);
  },
  async destroy(req, res){
    await Contatos.findByIdAndRemove(req.params.id);
    return res.send();
  }
}
