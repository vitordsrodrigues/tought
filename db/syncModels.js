const sequelize = require('./conn');
const User = require('../models/User');
const Evento = require('../models/Toughts');


// Define as associações




// Sincroniza os modelos com o banco de dados
const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true }); // Usando alter em vez de force para ser mais seguro
        console.log('✅ Tabelas sincronizadas com sucesso!');
        
        // Não vamos mais usar process.exit() aqui
        return true;
    } catch (error) {
        console.error('❌ Erro ao sincronizar tabelas:', error);
        throw error; // Propaga o erro para o Vercel saber que o build falhou
    }
};

// Exporta a função para ser usada no build
module.exports = syncDatabase;

// Se o arquivo for executado diretamente (não importado como módulo)
if (require.main === module) {
    syncDatabase()
        .then(() => process.exit(0))
        .catch(() => process.exit(1));
} 