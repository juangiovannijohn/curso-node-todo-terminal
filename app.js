import colors from 'colors';// para colorear los string en consola

import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import { Tareas } from  './models/tareas.js';





const main = async() =>{

    let opt = '';
    const tareas =  new Tareas();
    do {
      opt =  await inquirerMenu();

      switch (opt) {
        case '1':
         const descripcion = await leerInput('Descripción: ');
          tareas.crearTarea(descripcion);
        break;
        case '2':
          console.log(tareas._listado)
          
        break;
        case '3':
          
        break;
        case '4':
          
        break;
        case '5':
          
        break;
        case '6':
          
        break;
      }

      await pausa();

    } while (opt !== '0');




}
main();