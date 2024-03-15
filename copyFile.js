const fs = require('fs-extra');

async function copyFile() {
    try {
        await fs.copy('./build/app.js', './build/index.js');
        console.log('Arquivo copiado com sucesso!');
    } catch (err) {
        console.error('Erro ao copiar arquivo:', err);
    }
}

copyFile();
