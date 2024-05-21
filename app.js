const express = require("express")
//const bodyparser = require ("body")
const bodyParser = require("body-parser")

const app = express()

const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get ('/books/:id', (req, res) =>{
    const id = req.params.id

    res.json({"message": 'this is Paulina Chizian author book id'+id})
    
})

app.put ('/books/:id', (req, res) =>{
    const id = req.params.id
    res. json({"message": 'Paulina Chiziane book ${id} has been updated' })
})
app.delete ('/books/:id', (req, res) =>{
    const id = req.params.id
    res. json({"message": 'Paulina Chiziane book ${id} has been deleted' })
})



app.listen(PORT, () =>{
    console.log ("My App is working fine")
})