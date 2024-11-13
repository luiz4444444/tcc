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
                    <h1>Resumo Geral</h1>
                    <img src="/assets/images/adm/grafico-histograma.png" alt="resumo-geral" className='icone'/>

                    <h1>Catálogo</h1>
                    <img src="/assets/images/adm/aplicativos.png" alt="catalogo" className='icone'/>

                    <h1>Pagamentos</h1>
                    <img src="/assets/images/adm/dolar.png" alt="pagamentos" className='icone'/>

                    <h1>Profissionais</h1>
                    
                </div>
            </div>
        </div>
    )
}