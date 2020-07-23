import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Adicionar extends Component{

  state = {
    contato: {},
  }

  async componentDidMount(){
    this.setState({ contato: {} });
  }


  sendForm = async() => {
      let nome = document.getElementById("nome").value;
      let avatar = document.getElementById('imagem').value;
      let description = document.getElementById('descricao').value;

      //console.log(dados);
      //const response = await api.post(`/contato/`, {dados});

      let response = await api.post(`/contato`, { nome, avatar, description })
      this.setState({contato: response.data})
      if (this.state.contato.nome !== "") {
        alert(`${this.state.contato.nome} foi adicionado com sucesso`);
        document.getElementById("nome").value = '';
        document.getElementById("imagem").value = '';
        document.getElementById("descricao").value = '';
      }else{
        alert('não foi possivel adicionar');
      }
    }

  render(){
    return (
      <div>
        <div className="form-group">
          <label htmlFor="nome">Nome do Contato</label>
          <input type="text" className="form-control" id="nome" />
        </div>
        <div className="form-group">
          <label htmlFor="imagem">URL do Avatar</label>
          <input type="url" className="form-control" id="imagem"/>
        </div>
        <div className="form-group">
          <label className="form-check-label" htmlFor="descricao">Descrição do Contato</label>
          <input type="text" className="form-control" id="descricao"/>
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={this.sendForm}>Criar</button>
        <Link to={`/`} className="btn btn-secondary btn-block">Voltar a Home</Link>
      </div>
    );
  }
}
