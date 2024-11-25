//importa função do script dbConfig.js
import conectarAoBanco from "../config/dbConfig.js";

//Esta linha importa a função `conectarAoBanco` do arquivo `dbConfig.js`.
//Essa função é responsável por estabelecer a conexão com o banco de dados.

//Quando houver a conexão, todos os dados relativos serão guardados na variável
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

//Esta linha estabelece a conexão com o banco de dados, utilizando a string de conexão
//armazenada na variável de ambiente `STRING_CONEXAO`. O resultado da conexão
//é armazenado na variável `conexao`.

export async function getTodosOsPosts(){
    //Variável que acessa a base de dados do banco
    const db = conexao.db("imersao-instabytes");
    //Esta linha acessa o banco de dados específico chamado "imersao-instabytes"
    //a partir da conexão estabelecida.

    //Após o  acesso ao banco, buscamos os dados dentro de uma coleção
    const colecao = db.collection("posts");
    //Esta linha seleciona a coleção "posts" dentro do banco de dados.
    //É nessa coleção que os dados dos posts serão armazenados.

    return colecao.find().toArray();
    //Esta linha executa uma operação de busca em toda a coleção "posts"
    //e retorna todos os documentos (posts) em um array.
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
    //Esta função tem a mesma lógica inicial de acessar o banco de dados e a coleção "posts".
    //A diferença é que aqui utilizamos o método insertOne para inserir um novo documento
    //(um novo post) na coleção. O parâmetro `novoPost` contém os dados do novo post.
}