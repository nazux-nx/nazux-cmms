import NextAuth from "next-auth";
// import { PrismaClient } from "@prisma/client";
import authOptions from "../authOptions";

// const prisma = new PrismaClient();

// For more information on each option, go to https://next-auth.js.org/configuration/options

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
