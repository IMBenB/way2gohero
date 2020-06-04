const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require('mysql');

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'beer1ben',
//     database: 'way2go',
//     port: 3306
// });

// connection
client.connect(function (error) {
    if (!!error) {
        console.log('error in mysql connection');
    } else {
        console.log('connected to mysql')
    }
})


app.post('/', (req, res) => {

    let body = req.body;

    console.dir('--------')
    console.log(body.data)
    console.log(body.data.name)
    console.log(body.data.password)
    console.log(body.data.title)
    console.dir('--------')

    // connection
    client.query(`SELECT * 
                        FROM ${body.data.title}
                        WHERE name= '${body.data.name}'`, (err, results) => {

        try {

            if (body.data.password == results[0].password) {

                console.log('success query')
                let check = { results, isOK: true }
                res.json(check)

                console.log(results)
            } else {
                let check = { results, isOK: false }
                res.json(check)
                console.log('password incorrect]');
            }
        }


        catch (err) {
            console.log('err')
            let check = { results, isOK: false }
            res.json(check)
        }
        // }
    })



});

let port = process.env.PORT || 5050;

app.listen(port, function () {
    console.log('we on', port)


})
