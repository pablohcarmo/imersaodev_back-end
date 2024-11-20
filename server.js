//importa biblioteca do Express;
import express from "express";
import routes from "./src/routes/postsRoutes.js";

//Array para guardar nosso objetos
const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato fazendo yoga",
        imagem: "http://placekitten.com/400/300"
    },
    {
        id: 3,
        descricao: "Gatinho dormindo",
        imagem: "http://placekitten.com/200/200"
    },
    {
        id: 4,
        descricao: "Gato explorando a caixa",
        imagem: "http://placekitten.com/400/300"
    },
    {
        id: 5,
        descricao: "Gato com um brinquedo",
        imagem: "http://placekitten.com/400/300"
    },
    {
        id: 6,
        descricao: "Gato olhando pela janela",
        imagem: "http://placekitten.com/200/200"
    }
];

//declaração do Express como uma função
const app = express();
routes(app);

//Inicialização do servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});



/*
//A função recebe um número id, entra no array de posts e depois entra em cada um dos objetos.
//Se o id do parâmetro for igual ao do array, ele retornará este id como número
function buscarPost(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

//O : indica para o express que a informação será substituida por um dado variável,
//a constante index faz a busca na função e passa os parâmetros para a requisição.
//O retorno posts[index] passa a posição do post que queremos retornar
app.get("/posts/:id", (req, res) =>{
    const index = buscarPost(req.params.id);
    res.status(200).json(posts[index]);
});
*/