import express from 'express';
import {listarPosts} from '../controllers/postsController.js';

/*Criamos uma rota para este servidor e o que o servidor responderá.
O primeiro parâmetro é a definição da rota que o cliente usará pra obter a rota deste servidor, ou seja,
quando houver uma conexão neste rota e nesta porta.
O segundo parâmetro é uma função que recebe outros dois parâmetros, (req = requisição, res = resposta).
Enviamos uma resposta em texto com o status em 200.*/

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listarPosts);
}

export default routes;