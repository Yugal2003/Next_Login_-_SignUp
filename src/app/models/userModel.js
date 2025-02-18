import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true,
        },
    password : {
        type : String,
        required : false,
        },
    },
    { timestamps:true}
  );
  
  const userModel = mongoose.model("User", userSchema);

  export default userModel;