import React from 'react'
import PageDefault from '../../../components/pageDefault';
import { Link } from 'react-router-dom';




function CadastroVideo() {
    return(
      <PageDefault>

        <h1>Cadastro de Categoria</h1>
        
        <Link to = "/cadastro/categoria">
          cadastro de categoria
        </Link>
      
      </PageDefault>
    )
  }

  export default CadastroVideo;