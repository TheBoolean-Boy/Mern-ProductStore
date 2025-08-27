import express from "express";
import { connectDB } from "./config/db.js";
import path, { dirname } from 'path'
import router from "./routes/product.route.js";
import dotenv from 'dotenv'

dotenv.config();
const app = express();
app.use(express.json());

const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use("/api/products", router)

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
}


app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:"+PORT);
})

