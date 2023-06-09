import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'

const Pagina = (props) => {

  return (
    <>
        <Cabecalho/>
        <div className='bg-secondary py-5 text-white text-center mb-3' >
            <Container>
            <h1>{props.titulo}{props.tituloArray}{props.tituloObjeto}</h1>
        </Container>
      </div>

      {props.children}

      <div style={{ width: `100%` }} className='bg-secondary position-fixed bottom-0 py-3 text-white text-center'>
        <p>Todos os direitos reservados</p>
      </div>
    
    </>
  )
}

export default Pagina