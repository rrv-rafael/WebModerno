import React from "react";
import Main from '../template/Main'

const home = props =>
    <Main icon="house-door-fill"
        title="Início"
        subtitle="Segundo Projeto do capítulo de React.">
        <div className="display-4">Bem vindo!</div>
        <hr />
        <p className="mb-0">Sistem para exemplificar a construção de um cadastro desenvolvido em React</p>
    </Main>

export default home