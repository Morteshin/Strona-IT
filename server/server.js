const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://127.0.0.1:8000",
  })
);

const connectDB = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/Events");
  const eventSchema = new mongoose.Schema(
    {
      name: String,
      price: Number,
    },
    { collection: "eventlist" }
  );
  const Eventlist = mongoose.model("eventlist", eventSchema);
  const result = await Eventlist.find();
  console.warn(result);
};

connectDB();

app.get("/data", (req, res) => {
  res.json({ name: "XXX", favfood: "hehe" });
});
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
