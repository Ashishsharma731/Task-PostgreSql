require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
app.use(cors());

app.use((req, res, next) => {
  if (req.method !== "DELETE") {
    return express.json()(req, res, next);
  }
  next();
});

app.use("/users", userRoutes);
app.use("/items", itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
