import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap';
import Cabecalho from '../components/Cabecalho'
import Pagina from '../components/Pagina';

const array = () => {

    const carros = ['Civic', 'Tucson', 'Celta', 'Tempra', 'Marea', 'Doblo']

    return (
        <>
            <Pagina tituloArray="Array">
                <Container>

                    <h1>Lista Ordenada</h1>
                    
                    <ol>

                    {carros.map(item => (
                        <li>{item}</li>
                    ))}
                    </ol>

                </Container>
            </Pagina>
        
        </>
      )
    }

export default array