import './index.scss';
import { Link } from 'react-router-dom';

export default function Adm() {

    return (
        <div className='pagina-cliente adm'>
            <div className='mae'>
                <div className='cabeçalho'>
                    <img src="/assets/images/adm/logo-adm.png" alt="logo" />
                    <h1>Painel</h1>
                    <p>sair</p>
                </div>

                <div className='painel'>
                    <div className='pagamento'>
                        <img src="/assets/images/adm/dinheiro-adm.png" alt="dinheiro-ícone" />
                        <h1>Pagamento</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}