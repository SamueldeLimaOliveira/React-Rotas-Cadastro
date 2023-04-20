import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Página inicial</h1>
        <nav>
        <ul>
          
            <Link to="/cadastro">Cadastro</Link>  
         
            <Link to="/login">Login</Link>
          
            <Link to="/principal">Principal</Link>

        </ul>
        </nav>
      </div>
    );
  }
}

export default Home;
