import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: { type: String, required: true },
  images: [String],
  content: String,
  address: String,
  pricePerDay: Number,
  isAvailable: Boolean,
  fromDate: Date,
  endDate: Date,
  createAt: { type: Date, default: Date.now },
  senId: { type: Schema.Types.ObjectId, ref: "User" },
  coordinate: [Number],
  slug: String
});

let Post = mongoose.model("Post", postSchema);

export default Post;
