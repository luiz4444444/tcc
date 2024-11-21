import './index.scss'
import React, { useState }  from 'react';
import { Link } from 'react-router-dom'

export default function Adm2(){
    const users = [
        {
            id: '8128428',
            nome: 'luiz',
            idade: 17,
            email: 'alvesluiz547@gamil.com'
        },
    ]

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [unit, setUnit] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Agendamento confirmado para ${name} em ${date} às ${time} na unidade ${unit}`);
    };

    return(
        <div className='pagina-adm2 pagina'>
            <form>
                <h1>Agendar</h1>

                <input placeholder='Nome' className='nome' type="text" />
                <input placeholder='Data' className='data' type='date'/>
                <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                    <option value="">Escolha uma unidade</option>
                    <option value="R. Pedro Escobar, 52 - Jardim Eliana">R. Pedro Escobar, 52 - Jardim Eliana</option>
                    <option value="Avenida Washington Luís, 1234 - Brooklin">Avenida Washington Luís, 1234 - Brooklin</option>
                </select>
                <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                    <option value="Escolha um Serviço">Escolha um Serviço</option>
                    <option value="Corte e Sombrancelha">Corte e Sombrancelha</option>
                    <option value="Corte e Sombrancelha">Corte e Sombrancelha</option>
                    <option value="Corte e Progressiva">Corte e Progressiva</option>
                    <option value="Corte e Botox">Corte e Botox</option>
                    <option value="Corte (Degradê)">Corte (Degradê)</option>
                    <option value="Corte + Hidratação">Corte + Hidratação</option>
                    <option value="Cortes + Luzes Platinadas">Cortes + Luzes Platinadas</option>
                    <option value="Platinado Nevou">Platinado Nevou</option>
                    <option value="Pezinho ou Barba (Degradê)">Pezinho ou Barba (Degradê)</option>
                    <option value="Corte Degradê Infantil">Corte Degradê Infantil</option>
                    <option value="Corte Social Infantil">Corte Social Infantil</option>
                    <option value="Corte e Barba (Sombrancelha)">Corte e Barba (Sombrancelha)</option>
                    <option value="Corte Visagismo">Corte Visagismo</option>
                    <option value="Corte & Limpeza de Pele">Corte & Limpeza de Pele</option>
                    <option value="Corte e Barba e Limpeza de Pele">Corte e Barba e Limpeza de Pele</option>
                </select>
                <button type='button'>cadastrar</button>
            </form>

            {users.map((user) =>(
                <div key={user.id} className='card'>
                    <div>
                        <p>Nome: {user.nome}</p>
                        <p>idade: {user.idade}</p>
                        <p>email: {user.email}</p>  
                    </div>
                    <button>
                        
                    </button>
                </div>
            ))}
            
        </div>
    )
    
}