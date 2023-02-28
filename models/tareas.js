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

    listadoCompleto(){
        const arr = this.listadoArr;
        const tarea = arr.map((item , index) => {
            const i = index + 1
            const ind = (i.toString()+'.').green;
            let estado ;
            if (item.completadoEn == null) {
                estado = ('Pendiente').red   
            }else{
                estado = ('Completada').green   
            }
            const retur =  `${ind} ${item.descripcion} :: ${estado}`;
            console.log(retur)
        })
    }
    listarPendientesCompletadas( completadas = false){
        const arr = this.listadoArr;
        const tarea = arr.map(item  => {
            let estado ;
            if (item.completadoEn == null) {
                estado = ('Pendiente').red   
            }else{
                estado = ('Completada').green   
            }
            let contador = 0
            if (completadas) {
                if (item.completadoEn) {
                    contador +=1;
                    console.log(`${(contador.toString()+'.').green} ${item.descripcion} :: ${item.completadoEn.green}`)
                }
            } else {
                if (!completadas) {
                    if (!item.completadoEn) {
                        contador +=1;
                        console.log(`${(contador.toString()+'.').green} ${item.descripcion} :: ${estado}`)
                    }
                
                }
            }
        });
    }
    borrarTarea (id =''){
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }
    asignarCompletadas( ids = []){
        ids.map(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        })
        this.listadoArr.map(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null
            } //para poner como pendientes las tareas que no vienen marcadas
        })
    }


}

export {
    Tareas
}