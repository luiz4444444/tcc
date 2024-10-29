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

            <div className='area-introducao'>
                <h1 className='barber'>Ale Barber</h1>
                <h2 className='titulo-text'>CURTA NOSSOS SERVIÇOS DE BARBEIRO</h2>
                <p className='introducao'>Hórario de funcionamento: 09:00 às 18:00</p>
                <div className='baixo'>
                    <Link to="/client" className='botao'>Agendar Horário</Link>
                </div>
            </div>


            <div className='sobre'>
                <img src="" className=''/>
                <div className='area-sobre'>
                    <h1 className='titulo-sobre'>Sobre</h1>
                    <p className='text-sobre'>Bem-vindo à Ale Barber! Aqui, a gente não faz só cortes; a gente cria experiências. Somos um time de apaixonados por estilo, prontos para transformar seu visual e elevar sua autoestima. Desde a nossa abertura, a ideia é simples: oferecer um espaço descontraído, onde você pode relaxar, bater um papo e sair se sentindo incrível. A gente acredita que cada detalhe conta, desde um corte bem feito até aquele atendimento acolhedor. Seja pra dar um tapa no visual ou pra desestressar no dia a dia, estamos aqui pra te atender do jeitinho que você merece. Venha conhecer a gente e fazer parte da nossa família!</p>
                    <h3 className='horario'>Horário de funcionamento 08:00 as 18:00</h3>
                </div>
                
                
            </div>
        </div>
    );
}