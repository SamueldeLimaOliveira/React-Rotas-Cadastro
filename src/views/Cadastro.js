import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from './Firebase';

class Cadastro extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      senha:"",
      nome: "",
      sobrenome: "",
      datanascimento: ""      
    }

    this.gravar = this.gravar.bind(this);

  }

  async gravar(){

    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .then( async (retorno) => {
        firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
          nome: this.state.nome,
          sobrenome: this.state.sobrenome,
          datanascimento: this.state.datanascimento

        });  
    });


    /*firebase.firestore().collection("usuario").add({
      nome: this.state.nome,
      sobrenome: this.state.sobrenome
    });*/

  }

  render(){
    return(
      <div>
        <h1>Cadastro</h1>
       
        <input type="text" placeholder='E-mail' onChange={(e) => this.setState({email:e.target.value})}/>
        <br/> <br/>
       
        <input type="password" placeholder='Senha' onChange={(e) => this.setState({senha:e.target.value})}/>
        <br/> <br/>

        <input type="text" placeholder='Nome' onChange={(e) => this.setState({nome:e.target.value})}/>
        <br/> <br/>

        <input type="text" placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome:e.target.value})}/>
        <br/> <br/> 

        <h4>Data de nascimento</h4>
        <input type="date" placeholder='Nascimento' onChange={(e) => this.setState({datanascimento:e.target.value})}/>
        <br/> <br/>
        
        <button onClick={this.gravar}>Gravar</button>

        <Link to="/">
          <button>Página inicial</button>
        </Link>

      </div>
    )
  }
  
}

export default Cadastro;
