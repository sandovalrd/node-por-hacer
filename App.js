const argv = require('./config/Yargs').argv;
const PorHacer = require('./por-hacer/PorHacer');
const colors = require('colors');
const comando = argv._[0];

const { descripcion, completado } = argv;

switch (comando) {
    case 'crear':
        const tarea = PorHacer.crearTarea(descripcion);
        console.log(tarea);

        break;
    case 'listar':
        const lista = PorHacer.cargarTarea();
        console.log('=========Por Hacer==================='.green);
        for (const item of lista) {
            console.log(`Tarea: ${item.descripcion} completada: ${item.completado}`);
        }
        console.log('====================================='.green);

        break;
    case 'actualizar':
        const actualizar = PorHacer.actualizarTarea(descripcion, completado);
        console.log(actualizar);
        break;
    case 'borrar':
        const borrar = PorHacer.borrarTarea(descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no encontrado');
        break;
}