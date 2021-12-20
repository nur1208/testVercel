import express from "express";
// import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";
import NewsModel from "./model.js";
dotenv.config();

const main = async () => {
  // MongoDB
  try {
    await mongoose
      // eslint-disable-next-line no-undef
      .connect(process.env.MONGODB_URL);

    console.log("Connected to DB");

    const app = express();
    const port = 3350;

    // TODO connect to that database then start the server.
    // app.use(morgan("dev"));
    app.use(express.json()); // support json encoded bodies
    // app.use(express.urlencoded({ extended: true })); // support encoded bodies

    // Setting up middleware
    app.use(cors("http://localhost:3000"));
    // app.use(express.static("public"));
    // app.use(initialize());

    const call = async (num) => {
      const data = { number: num };
      //   await axios.post(`http://localhost:3350/`, data);
      await axios.post(
        `https://test-vercel-nsl3olo0y-nur1208.vercel.app/`,
        data
      );
    };

    app.get("/", (req, res) => {
      //   console.log(req.query.number);
      res.send(`Hello World! ${req.query.number}`);
    });

    app.post("/", async (req, res) => {
      console.log(req.body);
      //   await NewsModel.deleteMany();
      const news = new NewsModel(req.body);
      const newNews = await news.save();
      //   console.log(req.query.number);
      res.json({ newNews });
    });
    // app.get("/api/v1/news", (req, res) => {
    //   res.send("working");
    // });

    // Routing
    // app.use("/api/v1/news", newsRouter);

    app.listen(port, () => {
      console.log(
        `express app listening at http://localhost:${port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

main();
