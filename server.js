const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { populate } = require('./models/User');
const app = express();
const PORT = 5000;
const cors = require('cors');
const User  = require('./models/User');
let db;

app.use(cors());
app.use(express.json({extended: true}));
app.use('/api/addler', require('./routes/user.route'));

// async function start(){
//     try{
//         await mongoose.connect('mongodb+srv://Colin:Colin@cluster0.1djuv.mongodb.net/Test?retryWrites=true&w=majority',{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useFindAndModify: true
//         });
//         app.listen(PORT,() =>{
//             console.log(`Server started on port ${PORT}`);
//         }); 
//     }catch (err) {console.log(err)}
// }
// start();

mongoose.connect('mongodb+srv://Colin:Colin@cluster0.1djuv.mongodb.net/Test?retryWrites=true&w=majority', function(err, database){
    if(err){
        return console.log(err);
    }
    db = database;
    app.listen(PORT,() =>{
        console.log(`Server started on port ${PORT}`);
    });
});

app.get('/users', function(req,res){
    db.collection('users').find().toArray(function(err, docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});
app.get('/', function(req, res){
    res.send('Privet Vasya');
});
app.get('/use', function(req,res){
    const collection = db.collection('users');
    collection.findOne({name: "Lisa"}, function(err, doc){ 
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
        console.log(doc);
    });
});

app.get("/:id", (req, res) => {
    const id = req.params.id
    User.findById(id, (err, todo) => {
        res.json(todo);
    });
});
app.post("/:id", (req, res) => {
    const id = req.params.id
    User.findById(id, (err,todo) => {
        if(!todo){
            res.status(404).send("User not found")
        }else{
            todo.name = req.body.name
            todo.age = req.body.age
            todo.city = req.body.city
            todo.phone = req.body.phone

            todo.save().then(todo => {
                res.json(todo);
            }).catch(err => res.status(500).send(err.message));
        }
    })
}); 