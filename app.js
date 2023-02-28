import colors from 'colors';// para colorear los string en consola

import { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } from './helpers/inquirer.js';
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
          tareas.listarPendientesCompletadas(true);
          
        break;
        case '4':
          tareas.listarPendientesCompletadas(false);
          
        break;
        case '5':
         const ids = await mostrarListadoCheckList(tareas.listadoArr);
         //console.log({ids})
         tareas.asignarCompletadas(ids);
        break;
        case '6':
          const id = await listadoTareasBorrar( tareas.listadoArr);
          if (id !== '0') {
            const confirm = await confirmar('¿Seguro que desea eliminar?')           
            if (confirm) {
              tareas.borrarTarea(id);
              console.log('Tarea borrada correctamente')
            }       
          }
        break;
      }
      //Guarda info en el archivo
      guardarDB(tareas.listadoArr);
      await pausa();

    } while (opt !== '0');




}
main();