import express from 'express';
import multer from 'multer';
import {listarPosts, postarNovoPost, uploadImagem} from '../controllers/postsController.js';

/*Criamos uma rota para este servidor e o que o servidor responderá.
O primeiro parâmetro é a definição da rota que o cliente usará pra obter a rota deste servidor, ou seja,
quando houver uma conexão neste rota e nesta porta.
O segundo parâmetro é uma função que recebe outros dois parâmetros, (req = requisição, res = resposta).
Enviamos uma resposta em texto com o status em 200.*/

//Esta variável representa o armazenamento de arquivos, além de que o multer armazena de forma diferente os arquivos
//em SOs Windows, MAC e Linux
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
})
//caso o SO seja Linux ou MAC, basta apenas utilizar esta linha
const upload = multer({dest: "./uploads", storage});

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;