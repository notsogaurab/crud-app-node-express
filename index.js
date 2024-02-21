import express from "express";
import cors from "cors"; // Importing the cors middleware
import internRoutes from "./routes/internRoutes.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/intern", internRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
