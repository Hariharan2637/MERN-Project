const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")
const { request, response } = require("express")

const connect = express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(bodyparser.urlencoded({ extended: true }))

let databaseconnection = database.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hari7even",
    database: "project1"
})
databaseconnection.connect(function (error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log("database is connected")
    }
})
connect.post('/Signup', (request, response) => {
    let { fname, lname, email, phone, category, city, state, password } = request.body
    let sql = 'insert into details (fname, lname, email, phone,category, city, state, username, password) values(?,?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql, [fname, lname, email, phone, category, city, state, email, password], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
connect.post('/Login', (request, response) => {
    let { username, password } = request.body
    let sql = 'select * from details where username=?'
    databaseconnection.query(sql, [username], (error, result) => {
        if (error) {
            response.send({ "status": "empty_set" })
        }
        else if (result.length > 0) {
            let dbusername = result[0].username
            let dbpassword = result[0].password
            let dbid = result[0].id

            if (dbusername === username && dbpassword === password) {
                response.send({ "status": "success","dbid":dbid })
            }
            else {
                response.send({ "status": "invalid_user" })
            }
        }
        else {
            response.send({ "status": "error" })
        }
    })
})
connect.get('/Mainpage/:id',(request,response)=>{
    let {id}=request.params
    let sql="select * from details where id=?"
    databaseconnection.query(sql,[id],(error,result)=>{
        if (error){
            response.send(error)
        
        }
        else {
            response.send(result)
            console.log(result)
            
        }

    })
})
connect.post('/Service', (request, response) => {
    let { sname, hour, price} = request.body
    console.log(sname)
    let sql = 'insert into sevice ( sname, hour, price) values(?,?,?)'
    databaseconnection.query(sql, [ sname, hour, price], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
connect.get("/getdata", (request, response) => {
    let sql = 'select * from sevice'
    databaseconnection.query(sql, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }
    })
})
connect.put('/update/:id',(request,response)=>{
    let {id}=request.params
    let{sname,hour,price}=request.body
    let sql='update sevice set sname=?,hour=?,price=? where id=?'
    databaseconnection.query(sql,[sname,hour,price,id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
    
})
connect.get('/getupdate/:id',(request,response)=>{
    let {id}=request.params
    let sql="select * from sevice where id=?"
    databaseconnection.query(sql,[id],(error,result)=>{
        if (error){
            response.send(error)

        }
        else (
            response.send(result)
        )

    })
})
connect.post('/delete/:id', (request, response) => {
    let id = request.body.id
    let sql = 'delete from sevice where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
connect.listen(3003, () => {
    console.log("your server is running in port 3003")
})