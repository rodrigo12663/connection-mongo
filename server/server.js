const app = require(".")
// chamar database
const db = require('./database/connection')


const connection = db.getDB()

if(connection){
    app.listen(8001,() => {
        console.log("Projeto rodando nesta porta")
    })
}