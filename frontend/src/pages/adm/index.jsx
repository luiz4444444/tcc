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

        <div className="painel">
          <div className="cadastrar">
            <h1>Cadastrar</h1>
            <button>
              <img src="/assets/images/adm/cadastro.png" alt="Cadastrar" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
