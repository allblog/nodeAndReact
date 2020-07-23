import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Contato extends Component{

  state = {
    contato: {},
  }

  async componentDidMount(){
    //pega o id que vem atravez da url
    const {id} = this.props.match.params;
    const response = await api.get(`/contato/${id}`);
    //seta o estado
    this.setState({ contato: response.data });
  }

  apagar = async () => {
    let { contato } = this.state;
    console.log(contato);
    console.log(contato._id);
    const id = contato._id;
    let resposta = true;//window.confirm("deseja apagar este contato?");
    if(resposta === true){
      alert("apagado")
      console.log(id);
      api.delete(`/contato/`, contato._id).catch(function(req,res){
        console.log(req);
      })
    }else{
      alert('tudo bem');
    }
  }

  render() {//renderiza tudo
    //pega a variavel do estado
    const { contato } = this.state;

    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={`${contato.avatar}`} className="card-img" alt={`${contato.nome}`}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{contato.nome}</h5>
              <p className="card-text">{contato.description}</p>
              <Link to={`/`} className="btn btn-secondary btn-block">Voltar a Home</Link>
              <button className="btn btn-danger btn-block" onClick={this.apagar}>APAGAR</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
