import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/auth.config"

const prisma = new PrismaClient()

export const { 
  handlers: { GET, POST }, 
  auth,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
