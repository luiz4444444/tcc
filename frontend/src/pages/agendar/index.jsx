import React, { useState } from 'react';
import './index.scss';
import DatePicker from 'react-datepicker';

export default function Agendar() {
  
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [unit, setUnit] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento confirmado para ${name} em ${date} às ${time} na unidade ${unit}`);
  };

  return (
    <div className='pagina-agendador'>
      <div className="agendador">
        <h2>Agendar horário</h2>
        <form className='estrutura' onSubmit={handleSubmit}>
          <div>
            <label>Nome completo</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Digite seu nome" 
            />
          </div>
          <div>
            <label>Selecione a data</label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 


            />
          </div>
          <div>
            <label>Selecione uma unidade</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="">Escolha uma unidade</option>
              <option value="R. Pedro Escobar, 52 - Jardim Eliana">R. Pedro Escobar, 52 - Jardim Eliana</option>
              <option value="Avenida Washington Luís, 1234 - Brooklin">Avenida Washington Luís, 1234 - Brooklin</option>
            </select>
          </div>
          <div>
            <label>Selecione um horário</label>
            <div className="time-buttons">
              <button type="button" onClick={() => setTime('08:00')}>08:00</button>
              <button type="button" onClick={() => setTime('09:00')}>09:00</button>
              <button type="button" onClick={() => setTime('10:00')}>10:00</button>
              <button type="button" onClick={() => setTime('11:00')}>11:00</button>
              <button type="button" onClick={() => setTime('12:00')}>12:00</button>
              <button type="button" onClick={() => setTime('13:00')}>13:00</button>
              <button type="button" onClick={() => setTime('14:00')}>14:00</button>
              <button type="button" onClick={() => setTime('15:00')}>15:00</button>
              <button type="button" onClick={() => setTime('16:00')}>16:00</button>
              <button type="button" onClick={() => setTime('17:00')}>17:00</button>
              <button type="button" onClick={() => setTime('18:00')}>18:00</button>
            </div>
          </div>
          <button type="submit" className="submit-button">Agendar horário</button>
        </form>
      </div>
    </div>
  );
};