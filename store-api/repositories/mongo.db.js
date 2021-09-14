
import mongoose from "mongoose";

function connect() {
    const uri = "mongodb+srv://root:014702580369rafa@cluster0.7egat.mongodb.net/test"
    return await mongoose.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
}

export { connect }