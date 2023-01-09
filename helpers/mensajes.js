const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise ( resolve => {
 
        console.log('==================='.green);
        console.log('SELECCIONE UNA OPCIÓN'.green);
        console.log('==================='.green);
        console.log(` `);
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Mostrar todas las tareas`);
        console.log(`${'3.'.green} Mostrar todas las tareas completadas`);
        console.log(`${'4.'.green} Mostrar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir`);


        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción:', (opt)=>{
            readline.close();
            resolve(opt);
        })
    })






}
const pausa = ()=>{
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Presione ${'ENTER'.green} para salir.`, (opt)=>{
            readline.close();
            resolve();
        })
    })


}
module.exports = {
    mostrarMenu,
    pausa
}