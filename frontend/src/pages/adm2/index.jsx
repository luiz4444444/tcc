import { useEffect, useState, useRef } from 'react'
import './index.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import api from "../../services/api"

export default function Adm2(){
const [users, setUsers] = useState([])

const inputName = useRef()
const inputDate = useRef()
const inputUnit = useRef()
const inputTime = useRef()
    
    async function getUsers(){
    const usersFromApi = await api.get('/clientes')
    
    setUsers(usersFromApi.data)
    }

    async function createUsers(){

        await api.post('/clientes', {
            name: inputName.current.value,
            data: inputDate.current.value,
            unit: inputUnit.current.value,
            time: inputTime.current.value
        })
        
        getUsers() 
    }
    
    useEffect(() => {
    getUsers()
    }, [])

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

                <input placeholder='Nome' className='nome' type="text" ref={inputName} />
                <input placeholder='Data' className='data' type='date' ref={inputDate}/>
                <select value={unit} onChange={(e) => setUnit(e.target.value)} ref={inputUnit}>
                    <option value="">Escolha uma unidade</option>
                    <option value="R. Pedro Escobar, 52 - Jardim Eliana">R. Pedro Escobar, 52 - Jardim Eliana</option>
                    <option value="Avenida Washington Luís, 1234 - Brooklin">Avenida Washington Luís, 1234 - Brooklin</option>
                </select>
                <select value={unit} onChange={(e) => setUnit(e.target.value)} ref={inputUnit}>
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

                <div className="horas">
                    <button type="button" onClick={() => setTime('08:00')}>08:00</button >
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
                    <button type="button" onClick={() => setTime('19:00')}>19:00</button>
                </div>
                <button type='button' onClick={createUsers}>cadastrar</button>
            </form>
        </div>
    )
    
}