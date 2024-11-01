create database db_canais;

use db_canais;

CREATE TABLE tb_area_cliente (
    id_pessoa INT PRIMARY KEY,
    nm_nome_cliente VARCHAR(200),
    ds_cep VARCHAR(200),
    ds_rua VARCHAR(200),
    ds_bairro VARCHAR(200),
    nr_numero INT,
    ds_email VARCHAR(200)
);

CREATE TABLE tb_servicos (
    id_trabalhos INT PRIMARY KEY,
    ds_corte VARCHAR(200),
    bt_sombrancelha TINYINT(1),
    bt_progressiva TINYINT(1),
    bt_hidratacao TINYINT(1),
    bt_luzes TINYINT(1),
    ds_barba VARCHAR(200),
    vl_valor DECIMAL(15, 2)
);

CREATE TABLE tb_data_hora (
    dt_hora TIME,
    dt_dia DATE,
    tb_area_cliente_id_pessoa INT,
    tb_servicos_id_trabalhos INT,
    CONSTRAINT fk_area_cliente FOREIGN KEY (tb_area_cliente_id_pessoa) REFERENCES tb_area_cliente(id_pessoa),
    CONSTRAINT fk_servicos FOREIGN KEY (tb_servicos_id_trabalhos) REFERENCES tb_servicos(id_trabalhos)
);