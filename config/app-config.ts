import { env } from "@/config/env";

export const appConfig = {
  domain: env.DOMAIN,
  name: "NextAuth.js Starter",
  description:
    "Helping you get started with Next.js and NextAuth.js",
} as const;