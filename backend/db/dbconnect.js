const  mongoose = require('mongoose');

const connectDB = async () =>{
    try{
 await   mongoose.connect('mongodb://127.0.0.1:27017/myusers');

  console.log('connected to mongoDB')
    }
    catch(error){
 console.log("mongoDB connection error ")
    }


}

module.exports = connectDB






