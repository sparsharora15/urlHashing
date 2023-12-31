const mongoose = require('mongoose')
const connectionUrl = "mongodb://127.0.0.1:27017/url"

exports.connect = async()=>{
    try{
    await mongoose.connect(connectionUrl)
    console.log("connnected to db");
}
catch(e){
    console.log(e);
}
}