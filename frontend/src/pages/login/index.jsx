import './index.scss';
import { Link } from 'react-router-dom';

export default function () {

    return(

        <div className='pagina-login pagina'>
            <div className='corpo'>
                

                <div className='direita'>
                    <div className='esquerda'>
                        <h1>Ale Barber</h1>
                        <h2>Novo login</h2>
                        <Link to="/login" className='botao'>criar conta</Link>
                    </div>
                    <div>
                        <h1>Faça login</h1>
                        <Link to="/login" className='botao'>usuario</Link>
                        <Link to="/login" className='botao'>senha</Link>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}