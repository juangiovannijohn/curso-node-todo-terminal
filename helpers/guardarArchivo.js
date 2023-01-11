import fs from 'fs'

const guardarDB = (data) => {
    const path = './db/data.txt'
    fs.writeFileSync(path, data)
}


export {
    guardarDB
}