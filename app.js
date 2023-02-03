import colors from 'colors';// para colorear los string en consola

import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import { Tareas } from  './models/tareas.js';
import { guardarDB, leerDB} from './helpers/guardarArchivo.js'





const main = async() =>{

    let opt = '';
    const tareas =  new Tareas();
    //lee las tareas
    const tareasDB = leerDB();
    if (tareasDB) {
      tareas.cargarTareasFromArray(tareasDB);
    }

    do {
      opt =  await inquirerMenu();

      switch (opt) {
        case '1':
         const descripcion = await leerInput('Descripción: ');
          tareas.crearTarea(descripcion);
        break;
        case '2':
          tareas.listadoCompleto();
          
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
      //Guarda info en el archivo
      guardarDB(tareas.listadoArr);
      await pausa();

    } while (opt !== '0');




}
main();