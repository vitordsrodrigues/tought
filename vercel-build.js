const fs = require('fs-extra');
const path = require('path');

async function copyViews() {
    try {
        // Garante que o diretório views existe no destino
        await fs.ensureDir(path.join(__dirname, '.vercel/output/functions/views'));
        
        // Copia todas as views
        await fs.copy(
            path.join(__dirname, 'views'),
            path.join(__dirname, '.vercel/output/functions/views'),
            { overwrite: true }
        );
        
        console.log('Views copiadas com sucesso!');
    } catch (err) {
        console.error('Erro ao copiar views:', err);
        process.exit(1);
    }
}

copyViews(); 