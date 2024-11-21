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

        <div className="container">

          <div className="painel">

            <h1>Listar</h1>
            <Link to="/adm/listar" className="link-listar">
              <img src="/assets/images/adm/listar-usuarios.png" alt="listar" />
            </Link>

            <h1>Cadastrar</h1>
            <Link to="/adm/cadastrar" className="link-cadastrar">
              <img src="/assets/images/adm/adicionar-usuarios.png" alt="Cadastrar" />
            </Link>

            <h1>Alterar</h1>
            <Link to="/adm/alterar" className="link-editar">
              <img src="/assets/images/adm/editar-usuarios.png" alt="Editar" />
            </Link>

            <h1>Deletar</h1>
            <Link to="/adm/alterar" className="link-deletar">
              <img src="/assets/images/adm/deletar-usuarios.png" alt="Deletar" />
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}
