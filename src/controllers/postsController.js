import getTodosOsPosts from "../models/postsModel.js";
//Este controlador será responsável por listar os posts, receber a requisição e enviar a resposta
export async function listarPosts (req, res){
    const posts = await getTodosOsPosts();
    res.status(200).json(posts);
}