import colors from 'colors';// para colorear los string en consola

import { inquirerMenu } from './helpers/inquirer.js';

//const { mostrarMenu, pausa } = require('./helpers/mensajes');



console.clear();


const main = async() =>{

    let opt = '';
    do {
      opt =  await inquirerMenu();
      console.log({opt});
    
    } while (opt !== '0');




}
main();