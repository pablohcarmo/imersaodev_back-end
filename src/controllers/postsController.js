import {getTodosOsPosts, criarPost} from "../models/postsModel.js";
import fs from "fs";
//Este controlador será responsável por listar os posts, receber a requisição e enviar a resposta
export async function listarPosts (req, res){
    const posts = await getTodosOsPosts();
    res.status(200).json(posts);
}

//Criada uma nova função para criar um novo post
export async function postarNovoPost(req, res){
    // enviar requisição para o cabeçalho
    const novoPost = req.body;
    //o Node tentará enviar o novo post, caso dê errado, ele interromperá a requisição
    try{
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro){
        //Caso dê erro, ele exibirá este erro no console
        console.error(erro.message);
        res.status(500).json({"Erro ":"falha na requisição"});
    }
}

//Função para upload de imagens
export async function uploadImagem(req, res){
    // enviar requisição para o cabeçalho
    const novoPost = req.body;
    //o Node tentará enviar o novo post, caso dê errado, ele interromperá a requisição
    try{
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync( req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch (erro){
        //Caso dê erro, ele exibirá este erro no console
        console.error(erro.message);
        res.status(500).json({"Erro ":"falha na requisição"});
    }
}