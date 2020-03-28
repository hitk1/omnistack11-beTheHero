import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css';

import logo from '../../assets/logo.svg'

export default function Register() {

    const [ong, setOng] = useState([])
    const history = useHistory()

    const handleRegister = async (e) => {
        e.preventDefault()

        const data = {...ong}

        try{
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/')
        } catch(error) {
            alert('deu ruim zé')
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para HOME
                </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" 
                    value={ong.name}
                    onChange={e => { ong.name = e.target.value; setOng(ong)}}/>

                    <input type="email" placeholder="Email" 
                    vlaue={ong.email}
                    onChange={e => {ong.email = e.target.value; setOng(ong)}}/>

                    <input placeholder="WhatsApp" 
                    value={ong.whatsapp}
                    onChange={e => { ong.whatsapp = e.target.value; setOng(ong)}}/>

                    <div className="input-group">
                        <input placeholder="Cidade" 
                        value={ong.city}
                        onChange={e => { ong.city = e.target.value; setOng(ong)}}/>

                        <input placeholder="UF" style={{ width: 80 }}
                        value={ong.uf}
                        onChange={e => { ong.uf = e.target.value; setOng(ong)}}/>

                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
