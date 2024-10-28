import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

    return(
        <div className='pagina-cliente pagina'>
            <header className='cabecalho'>
                <img src="/assets/images/account.png" className='icone' />
               <div className='textos'>
                <p>Sobre</p>
                <p>Serviços</p>
                <p>Loja</p>
               </div>
               <div className='localiza-botao'>
                <Link to="/client" className='botao'>Agendarr Horário</Link>
               </div>
            </header>
            <div className='texto'>
                <h1 className='barber'>Ale Barber</h1>
                <h2 className='titulo-text'>CURTA NOSSOS SERVIÇOS DE BARBEIRO</h2>
                <p className='introducao'>Hórario de funcionamento: 09:00 às 18:00</p>
                <div className='baixo'>
                    <Link to="/client" className='botao'>Agendar Horário</Link>
                </div>
            </div>
        </div>
    );
}