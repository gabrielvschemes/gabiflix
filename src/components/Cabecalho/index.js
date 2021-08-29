import React from 'react';
import './style.css';
import Logo from './marca.png';
import Barra from './Lupa.png';

const Cabecalho= ({black=''}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                <img src={Logo}></img> 
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png" alt="Usuário" />
                </a>
                <div className="search-box">
                    <input type="text" className="search-txt" placeholder="Pesquisar"></input>
                    <a href="#" className="search-btn">
                    <img src={Barra} alt="Lupa" height="20" width="20"></img>
                    </a>
                </div>
            </div>
            
               </header>
    )
}
export default Cabecalho;