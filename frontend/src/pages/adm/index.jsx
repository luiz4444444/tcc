import "./index.scss";
import { Link } from "react-router-dom";

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
          <div className="duplinha">
            <h1>Resumo Geral</h1>
            <img src="/assets/images/adm/grafico-histograma.png" alt="resumo-geral" className="icone"
            />
          </div>
          <div className="duplinha">
            <h1>Serviços</h1>
            <img src="/assets/images/adm/aplicativos.png" alt="catalogo" className="icone"
            />
          </div>
          <div className="duplinha">
            <h1>Pagamentos</h1>
            <img src="/assets/images/adm/dolar.png" alt="pagamentos" className="icone"
            />
          </div>
          <div className="duplinha">
            <h1>Agenda</h1>
            <img  src="/assets/images/adm/calendario.png" alt="agenda" className="icone"
            />
          </div>
          <div className="duplinha">
            <h1>Clientes</h1>
            <img src="/assets/images/adm/usuarios.png" alt="clientes" className="icone"
            />
          </div>
          <div className="duplinha">
            <h1>Profissionais</h1>
            <img src="/assets/images/adm/usuarios.png" alt="clientes" className="icone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
