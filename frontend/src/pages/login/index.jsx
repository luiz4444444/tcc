import './index.scss';
import { Link } from 'react-router-dom';

export default function () {

    return (

        <div className='pagina-login pagina'>
            <div className='corpo'>


                <div className='direita'>
                    <div className='esquerda'>
                        <h1>Ale Barber</h1>
                        <h2>Novo login</h2>
                        <Link to="/login" className='botao-login'>Criar Conta</Link>
                    </div>
                    <div className='posicao'>
                        <form>
                            <h1>Faça login</h1>
                            <input name='nome' placeholder="Usuário" type="text" />
                            <input name='senha' placeholder="Senha" type="password" />
                            <button type='button'>Cadastrar</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
}  