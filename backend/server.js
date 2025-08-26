import express from "express";
import { connectDB } from "./config/db.js";

import router from "./routes/product.route.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/products", router)


app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:"+PORT);
})

