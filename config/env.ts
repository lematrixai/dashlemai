import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DOMAIN: z.string().min(1).url(),
    AUTH_SECRET: z.string().min(1),
    AUTH_TRUST_HOST: z.string().url().optional(),
    DATABASE_URL: z.string().min(1),
  },

  runtimeEnv: {
    DOMAIN: process.env.DOMAIN || "http://localhost:3000",
    AUTH_SECRET: process.env.AUTH_SECRET || "secret",
    AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST || "http://localhost:3000",
    DATABASE_URL:
      process.env.DATABASE_URL ||
      "postgres://user:pass@localhost:5432/dbname?sslmode=require",
  },

  emptyStringAsUndefined: true,
});

// Optional: Fail-safe for production
if (process.env.NODE_ENV === "production" && env.AUTH_SECRET === "secret") {
  throw new Error("❌ AUTH_SECRET must be set in production");
}
