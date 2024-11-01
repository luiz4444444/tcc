/* import './index.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default function Agendar() {

    const AgendarHorario = () => {
        const [nome, setNome] = useState('');
        const [data, setData] = useState(new Date());
        const [unidade, setUnidade] = useState('');
        const [horario, setHorario] = useState('');
        const [confirmacao, setConfirmacao] = useState('');
      
      
        const unidades = ['Cocaia - São Paulo', 'Outra Unidade']; // Exemplo de unidades disponíveis
        const horarios = ['09:00', '10:00', '11:00', '12:00'];
      
      
        const handleAgendar = () => {
          if (nome && data && unidade && horario) {
            setConfirmacao(`Agendamento realizado para ${nome} em ${data.toLocaleDateString()} às ${horario} na unidade ${unidade}.`);
          } else {
            setConfirmacao('Por favor, preencha todos os campos.');
          }
      };
    }
}
    <div className='agendamento' style={(style.modal)}>
        <h2>Agendar Horário</h2>

        <input 
        type="text"
        placeholder='Digite seu nome'
        value={nome}
        onChange={(e) =>
        setNome(e.target.value)}
        style={styles.input}
        />

        <label>Selecione a Data</label>
        <DatePicker
            selected={data}
            onChange={(date) => setData (date)}
            dateFormat='DD/MM/AA'
            style={styles.DatePicker}
        />
        
        <input>Selecione uma Unidade</input>

            value={inidade}
            onChange={(e) =>
        setUnidade(e.target.value)}
            style={styles.select}
        <option value="Selecione uma Unidade"></option>
        {unidades.map((uni, index) => (
            <option key={index} value={uni}>{uni}</option>
        ))}
  
    </div>
};

export default AgendarHorario;
*/