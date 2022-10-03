const express = require("express") ;
const mongoose= require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const itemRoutes = require("./routes/routes");
app.use("/items", itemRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});
const mongodb = "mongodb://localhost:27017";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, console.log(`Server running on ${PORT}`)))
  .catch((err) => console.log(err));
