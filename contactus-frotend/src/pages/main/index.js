import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './style.css';

export default class Main extends Component{
  state = {
    contatos: [],
    contatosInfo: [],
  }

  componentDidMount(){
    this.loadContatos();
  }

  loadContatos = async () => {
    const response = await api.get('/contato/');
    const {docs, ...contatosInfo} = response.data;
    this.setState({contatos: docs, contatosInfo});
  }

  render(){
    const { contatos } = this.state;
    //<span className="text-right ml-1 mb-1 badge badge-primary">TOTAL: {contatosInfo.total}</span>
    return(
      <div className="contatos">
      <Link to={`/adicionar`} className="btn btn-primary btn-block" data-toggle="modal">adicionar</Link>
      {contatos.map(contato => (
        <div className="list-group-item list-group-item-action" key={contato._id}>

          <div className="row">

            <div className="col col-2">
            <img src={`${contato.avatar}`} className="avatar" alt=""/>
            </div>

            <div className="col col-10">
            <Link to={`/contato/${contato._id}`} >{contato.nome}</Link>
            <p>{contato.description}</p>
            </div>

          </div>

        </div>
      ))}
      </div>
    )
  }
}
