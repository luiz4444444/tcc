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
                <Link to="/client" className='botao'>Agendar Horário</Link>
               </div>
            </header>

            <div className='area-introducao'>
                <h1 className='barber'>Ale Barber</h1>
                <h2 className='titulo-text'>CURTA NOSSOS SERVIÇOS DE BARBEIRO</h2>
                <p className='introducao'>Hórario de funcionamento: 09:00 às 18:00</p>
                <div className='baixo-botao'>
                    <Link to="/client" className='botao'>Agendar Horário</Link>
                </div>
            </div>


            <div className='area-sobre'>
                <div className='trabalhos'>
                    <img src="/assets/images/wader.jpg"/>
                </div>
                <div className='sobre'>
                    <h1 className='titulo-sobre'>Sobre</h1>
                    <p className='texto-sobre'> Bem-vindo à Ale Barber! Aqui, a gente não faz só cortes; a gente cria experiências.<br /> Somos um time de apaixonados por estilo, prontos para transformar seu visual e elevar sua autoestima.<br /> Desde a nossa abertura, a ideia é simples:<br /> oferecer um espaço descontraído, onde você pode relaxar, bater um papo e sair se sentindo incrível.<br /> A gente acredita que cada detalhe conta,<br /> desde um corte bem feito até aquele atendimento acolhedor.<br /> Seja pra dar um tapa no visual ou pra desestressar no dia a dia,<br /> estamos aqui pra te atender do jeitinho que você merece.<br /> Venha conhecer a gente e fazer parte da nossa família! </p>
                    <h3 className='horario'>Horário de funcionamento 08:00 as 18:00</h3>
                </div> 
            </div>

            <div className='area-servicos'>
                <div className='textos'>
                    <h1>Serviços</h1>
                    <p>Transforme seu visual com nossos cuidados especializados. Aqui na Ale Barber, oferecemos uma experiência única, desde cortes clássicos até estilos modernos. Venha descobrir o que podemos fazer por você!</p>
                </div>

                <div className='cardes'>
                    <div className='mae'>
                        <div className='card'>
                            <img src="/assets/images/corte1.png" alt="corte-de-cabelo" />
                                <div className='baixo-carde'> 
                                    <h2>Corte de Cabelo</h2>
                                    <p className='precos-cardes'>R$ 35,00</p>
                                </div>
                        </div>

                        <div className='card'>
                            <img src="/assets/images/corte2.png" alt="corte-completo" />
                                <div className='baixo-carde'>
                                    <h2>Corte de Cabelo</h2>
                                    <p className='precos-cardes'>R$ 40,00</p>
                                </div>
                        </div>

                        <div className='card'>
                            <img src="/assets/images/corte3.png" alt="corte-e-barba" />
                                <div className='baixo-carde'>
                                    <h2>Corte e Barba</h2>
                                    <p className='precos-cardes'>R$ 65,00</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="barbeiros"> 
                    <div className="area-barbeiros"> 
                        <img src="/assets/images/BARBEIRO1.png" alt="Luiz Guilherme"/>
                        <div className="apricativos"> 
                            <img src="/assets/images/twitter.png" alt="Twitter"/> 
                            <img src="/assets/images/instagram.png" alt="Instagram"/> 
                            <img src="/assets/images/facebook.png" alt="facebook"/> 
                        </div> 
                    </div> 
                            
                    <div className="area-barbeiros"> 
                        <img src="/assets/images/BARBEIRO2.png" alt="Gabriel Chaves"/> 
                        <div className="apricativos"> 
                            <img src="/assets/images/twitter.png" alt="Twitter"/> 
                            <img src="/assets/images/instagram.png" alt="Instagram"/> 
                            <img src="/assets/images/facebook.png" alt="facebook"/> 
                        </div>
                    </div>
                </div>
            </div>

                
        </div>
    );
}