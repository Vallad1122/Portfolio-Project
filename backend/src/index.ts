import cors = require("cors");
import dotenv = require("dotenv");
import express = require("express");

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "portfolio-backend" });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
