//importa função do script dbConfig.js
import conectarAoBanco from "../config/dbConfig.js";

//Quando houver a conexão, todos os dados relativos serão guardados na variável
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosOsPosts(){
    //Variável que acessa a base de dados do banco
    const db = conexao.db("imersao-instabytes");
    //Após o acesso ao banco, buscamos os dados dentro de uma coleção
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}