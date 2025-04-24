import { env } from "@/config/env";

export const appConfig = {
  domain: env.DOMAIN,
  name: "Auth.js",
  description:
    "Auth.js V5",
} as const;