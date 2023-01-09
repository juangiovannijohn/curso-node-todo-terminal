import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: ['opt1', 'opt2', 'opt3','opt4', 'opt5', 'opt6', ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('==================='.green);
    console.log('SELECCIONE UNA OPCIÓN'.green);
    console.log('==================='.green);
    console.log(` `);
    const opt =  await inquirer.prompt(preguntas);
    return opt;
}


export {
    inquirerMenu
};