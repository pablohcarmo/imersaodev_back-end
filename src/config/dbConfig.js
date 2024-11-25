import { MongoClient } from 'mongodb';

// Importa a classe MongoClient do pacote 'mongodb'.
// Essa classe é essencial para estabelecer conexões com bancos de dados MongoDB.

export default async function conectarAoBanco(stringConexao) {
    // Define uma função assíncrona chamada 'conectarAoBanco' que recebe um parâmetro
    // 'stringConexao' representando a string de conexão com o banco de dados.

    let mongoClient;
    // Declara uma variável 'mongoClient' para armazenar o cliente do MongoDB,
    // que será usado para realizar operações no banco de dados.

    try {
        // Bloco try-catch para lidar com possíveis erros durante a conexão.

        mongoClient = new MongoClient(stringConexao);
        // Cria uma nova instância do cliente MongoDB, passando a string de conexão.
        // Essa instância representa nossa conexão com o banco.

        console.log('Conectando ao cluster do banco de dados...');
        // Imprime uma mensagem no console indicando que a conexão está sendo estabelecida.

        await mongoClient.connect();
        // Espera a conexão ser estabelecida. O método 'connect()' é assíncrono,
        // então usamos 'await' para esperar a conclusão da operação.

        console.log('Conectado ao MongoDB Atlas com sucesso!');
        // Imprime uma mensagem de sucesso caso a conexão seja estabelecida.

        return mongoClient;
        // Retorna o cliente MongoDB para que possa ser usado em outras partes do código
        // para realizar operações no banco de dados.

    } catch (erro) {
        // Se ocorrer algum erro durante a conexão, o bloco catch é executado.

        console.error('Falha na conexão com o banco!', erro);
        // Imprime uma mensagem de erro no console, junto com o objeto de erro.

        process.exit();
        // Encerra a execução do processo, pois um erro na conexão geralmente indica
        // um problema crítico que impede o funcionamento correto da aplicação.
    }
}