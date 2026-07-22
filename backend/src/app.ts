import express from "express";
import cors from "cors";
import contentRoutes from "./routes/content.routes"
import genreRoutes from "./routes/genre.routes"

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/content", contentRoutes);
app.use("/genres", genreRoutes);

export default app;
