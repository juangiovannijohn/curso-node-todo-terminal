import { Tarea } from  '../models/tarea.js';

class Tareas {
    _listado = {}

    //retorna un arreglo tomado por un objeto 
    get listadoArr(){
        let listado = []
        Object.keys(this._listado).forEach( key => {
            listado.push(this._listado[key])
        })
        return listado;
    }

    constructor(){
        this._listado = {}
    }

    cargarTareasFromArray( tareas = []){
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }

    listadoCompleto(tareas = []){
        const arr = this.listadoArr;
        //console.log(this.listadoArr);
        arr.forEach( (tarea, index) => {
console.log({index})
console.log({tarea})

        })


    }



}

export {
    Tareas
}