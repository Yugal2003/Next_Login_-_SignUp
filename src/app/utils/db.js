import mongoose from "mongoose";

const connect = async() =>{
    if(mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGODB_KEY, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log("MongoDB Connect Success !!!");
        
    } 
    catch {
        throw new Error("Error While Connect To MongoDB !!!");
    }
}


export default connect;