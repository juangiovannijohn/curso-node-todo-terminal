import inquirer from 'inquirer';
import colors from 'colors';
 
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value : '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value : '2',
                name: `${'2.'.green} Mostrar todas las tareas`
            },
            {
                value : '3',
                name: `${'3.'.green} Mostrar todas las tareas completadas`
            },
            {
                value : '4',
                name: `${'4.'.green} Mostrar tareas pendientes`
            },
            {
                value : '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value : '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value : '0',
                name: `${'0.'.green} Salir`
            },
         ]
    }
]

const inquirerMenu = async() => {
   // console.clear();
    console.log('==========================='.green);
    console.log('   SELECCIONE UNA OPCIÓN'.white);
    console.log('==========================='.green);
    console.log(` `);
    const {opcion} =  await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async() => {
    const {enter} = await inquirer.prompt({
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para salir.`
    })

    return enter;
}
const leerInput = async( message )=>{
    const question = [
        {
            type : 'input',
            name: 'desc',
            message,
            validate( value){
                if (value.length === 0) {
                    return 'Por favor ingrese un valor.'
                }
                return true
            }
        }
    ]
    const {desc} = await inquirer.prompt(question);
    return desc;
}
const listadoTareasBorrar = async(tareas = [])=>{
    const choices = tareas.map( (tarea, i ) => {
    const index = `${(i +1)+'.'}`.green;
        return {
            value : tarea.id,
            name : `${index} ${tarea.descripcion}`
        };
    })
    choices.unshift(
        {
            value : '0',
            name : `${('0.').green} Cancelar`
        }
    )//se agrega el Cancelar para volver atras
    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices: choices
    }]
    const {id} =  await inquirer.prompt(preguntas);
    return id;
}
const confirmar= async (message) =>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const {ok} =  await inquirer.prompt(question);
    return ok
}
const mostrarListadoCheckList = async(tareas = [])=>{
    const choices = tareas.map( (tarea, i ) => {
    const index = `${(i +1)+'.'}`.green;
        return {
            value : tarea.id,
            name : `${index} ${tarea.descripcion}`,
            checked: (tarea.completadoEn) ? true : false
        };
    })

    const pregunta = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices: choices
    }]
    const {ids} =  await inquirer.prompt(pregunta);
    return ids;
}


export {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
}