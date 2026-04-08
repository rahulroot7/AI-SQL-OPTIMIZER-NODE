import "dotenv/config";

import Fastify from "fastify";
import cors from "@fastify/cors";
import sqlRoutes from "./routes/sql.route.js";

const app = Fastify();

console.log("API KEY:", process.env.GROQ_API_KEY);

await app.register(cors, { origin: "*" });

app.register(sqlRoutes, { prefix: "/api/sql" });

app.get("/", async () => {
  return { message: "AI SQL Optimizer Running" };
});

app.listen({ port: 5000 }, () => {
  console.log("Server running on port 5000");
});