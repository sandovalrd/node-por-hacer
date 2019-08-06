const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion del elemento'
}
const completado = {
    alias: 'c',
    desc: 'Definir el estado del elemento',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado del elemento', { descripcion, completado })
    .command('listar', 'Actualiza el estado del elemento')
    .command('borrar', 'Actualiza el estado del elemento', { descripcion })
    .help()
    .argv


module.exports = { argv }