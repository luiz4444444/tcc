import './index.scss';
import { Link } from 'react-router-dom';

export default function () {

    return (

        <div className='pagina-login pagina'>
            <div className='corpo'>


                <div className='direita'>
                    <div className='esquerda'>
                        <form className='Cadastro'>
                            <h1>Cadastro</h1>
                            <input name='Nome' placeholder="Não use seu nome verdadeiro" type="text" />
                            <input name='Senha' placeholder="Crie uma senha" type="password" />
                            <button type='button'>Cadastrar</button>
                        </form>
                    </div>
                    <div className='posicao'>
                        <form className='Login'>
                            <h1>Faça login</h1>
                            <input name='Nome-Login' placeholder="Usuário" type="text" />
                            <input name='Senha-Login' placeholder="Senha" type="password" />
                            <button type='button'>Entrar</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
}  