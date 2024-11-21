import './index.scss'
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

    return(
        <div className='pagina-adm2 pagina'>
            <form>
                <h1>Cadastro dos Clientes</h1>
                <input placeholder='nome' className='nome' type="text" />
                <input placeholder='idade' className='idade' type='number'/>
                <input placeholder='email' className='email' type='email'/>
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