const mongoose = require('mongoose')
const connectionUrl = "mongodb+srv://sparsharora:sparsharora15@cluster0.znskbqc.mongodb.net/Url?retryWrites=true&w=majori"

exports.connect = async()=>{
    try{
    await mongoose.connect(connectionUrl)
    console.log("connnected to db");
}
catch(e){
    console.log(e);
}
}
