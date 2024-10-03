import mongoose from "mongoose";

const USerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
    },
    email: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timeseries: true }
);

const User = mongoose.model("User", USerSchema);
export default User;
