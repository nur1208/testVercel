import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    number: String,
  },
  {
    timestamps: true,
  }
);

const NewsModel = mongoose.model("News", newsSchema);

export default NewsModel;
