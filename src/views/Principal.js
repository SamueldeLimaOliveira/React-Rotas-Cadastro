import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './Firebase';

class Principal extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome:"",
      sobrenome: "",
      datanascimento: ""
    }
  }

  async componentDidMount(){

    await firebase.auth().onAuthStateChanged(async(usuario)=>{
      if(usuario){
        var uid = usuario.uid;

        await firebase.firestore().collection("usuario").doc(uid).get()
        .then((retorno)=>{
          this.setState({
            nome: retorno.data().nome,
            sobrenome: retorno.data().sobrenome,
            datanascimento: retorno.data().datanascimento

          });

        });
      }

    });

  }

  render(){
    return(
      <div>
        <h4>Nome: {this.state.nome}</h4> 
        <h4>Sobrenome: {this.state.sobrenome}</h4>  
        <h4>Data Nascimento: {this.state.datanascimento}</h4>

        <br/><br/><br/><br/><br/><br/><br/>
        <Link to="/">
          <button>Página inicial</button>
        </Link>
      </div>
    )
  }  
  
}

export default Principal;
