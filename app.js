// Task1: initiate app and run server at 3000
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");




app.get('/',(req,res) => {
    res.send("welcome")
});


mongoose.connect(process.env.DB_connection, () => {
    console.log("connected");
});

app.listen(3000);

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 




//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'

app.get('/api/employeelist', (req,res) => {
    try {
        const post = await post.find();
        res.json(post);
        
    } catch (err) {
        res.json({message: err});
    }
});


//TODO: get single data from db  using api '/api/employeelist/:id'

app.get("/api/employeelist/:postId", async (req, res) => {
        try {
            const post = await Post.findById(req.params.postId);
            res.json(post);
            
        } catch (err) {
            res.json({message: err});
        }
    });
    




//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.post('/api/employeelist', async (req,res) => {
    const post = new post({
        name : req.body.name,
        location : req.body.location,
        position : req.body.position,
        salary : req.body.position
        
    });
  try {
    await savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({message: err});
  }
});




//TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete("/api/employeelist/:postId", async (req, res) => {
    console.log("inside delete");
    try {
        const removePost = await Post.remove({_id : req.params.postId});
        res.json(removePost);
    } catch (error) {
        console.log(err);
    }
});



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.patch("/api/employeelist/:postId", async (req,res) => {
    try {
        const updatedPost = await Post.updatedOne(
            {_id : req.params.postId},
            {$set :{
                name : req.body.name,
                location : req.body.location,
                position : req.body.position,
                salary : req.body.position
            },}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    }
});

//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



