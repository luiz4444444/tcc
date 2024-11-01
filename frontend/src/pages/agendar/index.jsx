
import React, { useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Agendamento = () => {
  const myRef = useRef(null);
  const [nome, setNome] = useState('');
  const [data, setData] = useState(new Date());
  const [unidade, setUnidade] = useState('');
  const [horario, setHorario] = useState('');
  const [mensagem, setMensagem] = useState('');

  const unidades = ['Cocaia - São Paulo', 'Outra Unidade']; // Exemplo de unidades disponíveis
  const horarios = ['09:00', '10:00', '11:00', '12:00'];

  const handleAgendar = () => {
    if (nome && data && unidade && horario) {
      setMensagem(`Agendamento realizado para ${nome} em ${data.toLocaleDateString()} às ${horario} na unidade ${unidade}.`);
    } else {
      setMensagem('Por favor, preencha todos os campos.');
    }
  };

  useEffect(() => {
    if (myRef.current) {

    }
  }, []);

  return (
    <div style={styles.modal}>
      <h2>Agendar horário</h2>
      
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={styles.input}
      />

      <label>Selecione a data</label>
      <DatePicker
        selected={data}
        onChange={(date) => setData(date)}
        dateFormat="dd/MM/yyyy"
        style={styles.datePicker}
      />

      <label>Selecione uma unidade</label>
      <select
        value={unidade}
        onChange={(e) => setUnidade(e.target.value)}
        style={styles.select}
      >
        <option value="">Selecione uma unidade</option>
        {unidades.map((uni, index) => (
          <option key={index} value={uni}>{uni}</option>
        ))}
      </select>

      <label>Selecione um horário</label>
      <div style={styles.horariosContainer}>
        {horarios.map((h, index) => (
          <button
            key={index}
            onClick={() => setHorario(h)}
            style={{
              ...styles.horarioButton,
              backgroundColor: horario === h ? '#FFBF00' : '#f0f0f0'
            }}
          >
            {h}
          </button>
        ))}
      </div>

      <button onClick={handleAgendar} style={styles.agendarButton}>
        Agendar horário
      </button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

const styles = {
    modal: {
      padding: '20px',
      backgroundColor: '#333',
      color: '#fff',
      borderRadius: '10px',
      width: '300px',
      margin: '0 auto',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    datePicker: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      margin: '10px 0',
    },
    select: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      margin: '10px 0',
    },
    horariosContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '10px 0',
    },
    horarioButton: {
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      width: '60px',
    },
    agendarButton: {
      padding: '10px',
      width: '100%',
      backgroundColor: '#FFBF00',
      color: '#000',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '10px',
    },
  };
  
  export default Agendamento;

