//importar biblioteca Express;
import express from "express";

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
app.use(express.json());

/*
A função listen recebe dois valores,sendo primeiro a porta e segundo deixamos em vazio,
o comando => { } é uma arrow function
*/
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

/*
Criamos uma rota para este servidor e o que o servidor responderá.
O primeiro parâmetro é a definição da rota que o cliente usará pra obter a rota deste servidor, ou seja,
quando houver uma conexão neste rota e nesta porta.
O segundo parâmetro é uma função que recebe outros dois parâmetros, (req = requisição, res = resposta).
Enviamos uma resposta em texto com o status em 200.*/
app.get("/posts", (req, res) =>{
    res.status(200).json(posts);
});

/*A função recebe um número id, entra no array de posts e depois entra em cada um dos objetos.
Se o id do parâmetro for igual ao do array, ele retornará este id como número*/
function buscarPost(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

/*O : indica para o express que a informação será substituida por um dado variável,
a constante index faz a busca na função e passa os parâmetros para a requisição.
O retorno posts[index] passa a posição do post que queremos retornar
*/
app.get("/posts/:id", (req, res) =>{
    const index = buscarPost(req.params.id);
    res.status(200).json(posts[index]);
});