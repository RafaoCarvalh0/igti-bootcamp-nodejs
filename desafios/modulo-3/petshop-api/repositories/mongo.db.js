import mongoose from "mongoose";

async function connect() {
    const uri = "mongodb+srv://root:014702580369rafa@cluster0.7egat.mongodb.net/pet_base?retryWrites=true&w=majority"
    return await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export  { connect };