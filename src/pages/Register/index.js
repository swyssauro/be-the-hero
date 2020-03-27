import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

// Imports assets
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsaap, setWhatsaap] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsaap,
            city,
            uf,
        };

        try {
            const response = await api.post('/ongs', data);
            alert(`seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert('error no seu cadastro, tente novamente.');
        }
    }

    return (
        <div className="container-register">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BeTheHero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, encontre na plataforma e ajude pessoas a encontrarem os casos da sua Ong.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02021" />
                        Não tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Ong name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsaap}
                        onChange={e => setWhatsaap(e.target.value)} 
                    />

                    <div className="input-group">
                        <input
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)} 
                        />
                        <input 
                            placeholder="Uf" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}