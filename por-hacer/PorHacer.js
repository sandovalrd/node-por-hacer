const fs = require('fs');
let listadoPorHacer = [];

guardarTarea = (listado) => {
    const data = JSON.stringify(listado);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('Error al guardar', err);

    });
}

const cargarTarea = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    return listadoPorHacer;
}

const crearTarea = (descripcion) => {
    cargarTarea();
    const porHacer = {
        descripcion,
        completado: false
    }

    const listado = [...listadoPorHacer, porHacer];
    guardarTarea(listado);
    return listado;
}

const actualizarTarea = (descripcion, estado) => {
    cargarTarea();
    const index = listadoPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = estado;
        guardarTarea(listadoPorHacer);
        return true;
    }
    return false;
}
const borrarTarea = (descripcion) => {
    cargarTarea();
    const listado = listadoPorHacer.filter((tarea) => {
        return descripcion !== tarea.descripcion;
    });
    guardarTarea(listado);
    if (listado.length === listadoPorHacer.length) {
        return false;
    }
    return true;
}
module.exports = {
    crearTarea,
    cargarTarea,
    actualizarTarea,
    borrarTarea
}