import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/logo.svg'
import api from '../../services/api'

import './styles.css';

export default function NewIncident() {

  const [incident, setIncident] = useState([])
  const history = useHistory()

  const handleNewIncident = async (e) => {
    e.preventDefault()

    const data = { ...incident }
    
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: localStorage.getItem('ongId')
        }
      })

      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar o caso')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
        </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={incident.title}
            onChange={e => { incident.title = e.target.value; setIncident(incident) }}
          />

          <textarea
            placeholder="Descrição"
            value={incident.description}
            onChange={e => { incident.description = e.target.value; setIncident(incident) }}
          />

          <input
            placeholder="Valor em reais"
            value={incident.value}
            onChange={e => { incident.value = e.target.value; setIncident(incident) }}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
