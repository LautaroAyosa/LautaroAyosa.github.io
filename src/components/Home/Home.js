import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css'

const Home = () => {

    return (
        <div>
            
            <main>
                <div class="miniBackground">
                    <div>
                        <h1 className='rubikMono'>OMBÚ</h1>
                        <h2 className="subtitulo rubik">Sumate a decenas de grandes <br/>
                         empresas que confían en nosotros</h2>
                        <a href='/contact'><button type="button" className="rubik600">Hacé tu consulta</button></a>
                    </div>
                    <img className="posLogo" src="./img/logo Ombu PNG color.png" alt="logo tintorería OMBÚ color"/>
                </div>

                <div className="more rubik">
                    <img src="./img/expand-arrow.png" alt="arrow down"/>
                </div>
                <div className="empresas">
                </div>
                
            </main>
            
        </div>
    )
}

export default Home;