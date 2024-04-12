import Mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
      index: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: string,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()
} )

userSchema.methods.isPasswordCorrect = async function
(password){
 return await bcrypt.compare(password, this.password)   
}


userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
       {
         _id: this._id,
         email: this.email,
         userName: this.userName,
         fullName: this.fullName,
       },
       process.env.REFRESH_TOKEEN_SECRET,
       {
           expiresIn : process.env.REFRESH_TOKEN_EXPIRY
       }
     );
   };
   
   userSchema.methods.generateRefreshToken = function () {};

export const User = mongoose.model("user", userSchema);
