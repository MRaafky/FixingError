const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
mongoose
  .connect(process.env.mongo_koneksi, {})
  .then(() => {
    console.log("Koneksi ke MongoDB berhasil");
  })
  .catch((err) => {
    console.log("Koneksi ke MongoDB gagal");
  });

const corsOptions = {
  origin: "http://localhost:5173", // Izinkan hanya origin frontend Anda
  optionsSuccessStatus: 200, // beberapa browser lama (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/", require("./router/studentnews.route"));

const seedsNews = require("./seeds/studentsnews.seed");
app.use("/StudentNews", seedsNews);

app.listen(8000, () => {
  console.log("Server berjalan di port 8000");
});
