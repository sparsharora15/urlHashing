const mongoose = require('mongoose');

const connectionUrl = "mongodb+srv://sparsharora:sparsharora15@cluster0.znskbqc.mongodb.net/Url?retryWrites=true&w=majority";

exports.connect = async () => {
    try {
        await mongoose.connect(connectionUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000
        });

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
