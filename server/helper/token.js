const jwt = require('jsonwebtoken');
var token = {};

token.verifyUser = function(req, res, next){
    let token = req.headers.token
    if(token){
        jwt.verify(token, 'rahasia', (err, decoded)=>{
            if(decoded){
                req.decoded = decoded
                next()
            } else {
                res.send(`You have to login first`)
            }
        });
    }
}
