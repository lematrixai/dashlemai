import { env } from "@/config/env";
import { defineConfig } from "drizzle-kit";

if (!env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  schema: ["./database/schemas/account.ts"],
  out: "./database/migrations",
  verbose: true,
  strict: true,
});