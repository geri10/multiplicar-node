const argv = require('./config/yargs').argv;
const colors = require('colors/safe');



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.limite, argv.base);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}

//const { alias } = require('yargs');


//console.log(process.argv);

//let argv2 = process.argv;

//console.log('Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);