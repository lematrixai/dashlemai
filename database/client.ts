import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { env } from "@/config/env";

const DATABASE_URL = process.env.DATABASE_URL || "postgres://neondb_owner:npg_V9op0DzxRBGb@ep-soft-snowflake-a4k2ihv8-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
;

const queryClient = neon(DATABASE_URL);
export const db = drizzle(queryClient);