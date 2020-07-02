// requireds

const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');

listarTabla = (limite, base) => {
    if (!Number(base)) {
        console.log(`el valor introducido de base ${base} no es un numero`);
        return;
    }
    if (!Number(limite)) {
        console.log(`El valor introducido de limite ${limite} no es un numero`);
        return;
    }

    console.log('===================='.green);
    console.log(`  Tabla de ${base}  `.green);
    console.log('===================='.green);

    let date = '';
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introduciodo ${ base } no es un numero`);
            return;
        }

        let date = '';

        for (let i = 1; i <= limite; i++) {
            date += `${base} * ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(date));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.tx`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}