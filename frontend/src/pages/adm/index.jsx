import React, { useState } from 'react';
import './index.scss';

const Dashboard = () => {
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <div className="container">
      <h1>Painel</h1>
      <div className="painel-item" onClick={() => handleClick('Lista Dos Usuários')}>
        <img src='/assets/images/adm/listar-usuarios.png' alt="Listar" className="icon" />
        <p>Listar</p>
      </div>
      <div className="painel-item" onClick={() => handleClick('Cadastrar Novos Ctens')}>
        <img src='/assets/images/adm/adicionar-usuarios.png' alt="Cadastrar" className="icon" />
        <p>Cadastrar</p>
      </div>
      <div className="painel-item" onClick={() => handleClick('Alterar Coisas Do Cliente')}>
        <img src='/assets/images/adm/editar-usuarios.png' alt="Alterar" className="icon" />
        <p>Alterar</p>
      </div>
      <div className="painel-item" onClick={() => handleClick('Deletar')}>
        <img src='/assets/images/adm/deletar-usuarios.png' alt="Deletar" className="icon" />
        <p>Deletar</p>
      </div>
      {showModal && (
        <Modal content={modalContent} closeModal={closeModal} />
      )}
    </div>
  );
};

const Modal = ({ content, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Dashboard;
