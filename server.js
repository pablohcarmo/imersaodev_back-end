//importar biblioteca Express;
import express from "express";

//declaração do Express como uma função
const app = express();

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
Enviamos uma resposta em texto com o status em 200.
*/
app.get("/api", (req, res) =>{
    res.status(200).send("Boas vindas à imersão");
});