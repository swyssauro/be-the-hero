import React from 'react';
import './styles.css';


// Imports assets
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
    return(
        <div className="container-logon">
            <section className="form">
                <img src={logoImg} alt="BeTheHero"/>
            <form>
                <h1>Faça seu logon</h1>
                <input placeholder="Identification"/>
                <button className="button" type="submit">Entrar</button>

                <a href="/register"> 
                    <FiLogIn size={16} color="#E02021" /> 
                    Não tenho cadastro
                </a>
            </form>
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}