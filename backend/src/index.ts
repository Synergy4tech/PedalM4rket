import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth";
import adRoutes from "./routes/ads";

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/ads", adRoutes);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
