import fs from 'fs'

const path = './db/data.json'
const guardarDB = (data) => {
    fs.writeFileSync(path, JSON.stringify(data))
}

const leerDB = () => {
    if ( !fs.existsSync(path)) {
        return null;
    }else{
    const info = fs.readFileSync(path, {encoding: 'utf-8'});
    const data = JSON.parse(info)
    return data;
    }
}


export {
    guardarDB,
    leerDB
}