import './index.scss'
import { Link } from 'react-router-dom'

export default function Adm() {
  return (
    <div className="pagina-cliente adm">
      <div className="mae">
        <div className="cabeçalho">
          <img src="/assets/images/adm/logo-adm.png" alt="logo" />
          <h1>Painel</h1>
          <Link to="/">
            <img
              src="/assets/images/adm/saida.png"
              alt="sair"
              className="sair"
            />
          </Link>
        </div>

        <div className='container'>

          <div className='grupinho'>
            <Link to="/adm/listar" className="link-com-imagem">
              <img src="/assets/images/adm/listar-usuarios.png" alt="listar" className='imagem'/>
            </Link>
            <h1>Listar</h1>
          </div>

          <div className='grupinho'>
            <Link to="/adm/cadastrar" className="link-com-imagem">
              <img src="/assets/images/adm/cadastro.png" alt="Cadastrar" className='imagem'/>
            </Link>
            <h1>Cadastrar</h1>
          </div>

          <div className='grupinho'>
            <Link to="/adm/alterar" className="link-com-imagem">
              <img src="/assets/images/adm/editar-usuarios.png" alt="Editar" className='imagem'/>
            </Link>
            <h1>Alterar</h1>  
          </div>

          <div className='grupinho'>
            <Link to="/adm/alterar" className="link-com-imagem">
              <img src="/assets/images/adm/deletar-usuarios.png" alt="Deletar" className='imagem'/>
            </Link>
            <h1>Deletar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}