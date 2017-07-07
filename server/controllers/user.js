const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var model = {};

model.signup = function(req, res){
    let body = req.body;
    User.findOne({
        name: body.name
    }, (err, data)=>{
        if(err){
            res.status(400).send({
                message: 'something error on database',
                error: err
            })
        }else{
            if(!data){
                User.create({
                    name : body.name,
                    email : body.email,
                    password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
                }, (err, result)=>{
                    if(err){
                        res.status(400).send({
                            message: 'something error on database',
                            error: err
                        })
                    } else {
                        res.send(result)
                    }
                });
            } else {
                res.send('data user has been used');
            }
        }
    })
}

model.signin = function(req, res){
    let body = req.body;

    User.findOne({
        name: body.name
    }, (err, data)=>{
        if(err){
            res.status(400).send({
                message: 'something wrong on your database',
                error: err
            })
        } else {
            let pwd = body.password
            if(!data){
                res.send({
                    message: 'You are not registered'
                })
            } else if(bcrypt.compareSync(pwd, data.password)){
                let token = jwt.sign({
                        id : data._id,
                        name : data.name,
                        email : data.email
                    }, 'paswrahasia' ,{
                        expiresIn : '1d'
                    })
                        res.send({token: token})
            } else {
                res.send({
                    message: 'password your input is wrong!'
                })
            }
        }
    })
}

model.checkUser = function(req, res){
    User.find({}, (err, result)=>{
        if(err){
            res.status(400).send({
                message: 'error on database',
                error: err
            })
        } else {
            res.send(result);
        }
    })
}

module.exports = model;