const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

app.use(notFound); // Not Found Handler

app.use(errorHandler); // Global Error Handler

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
