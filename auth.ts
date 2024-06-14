import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import type { User } from "@/app/lib/definitions";
import { readJsonFile } from "./app/lib/data";

async function getUser(email: string): Promise<User | undefined> {
  try {
    return {
      email: "TODO", // TODO
      id: "TODO", // TODO
      name: "admin",
      password: "adminadmin"
    };
    const users: User[] = await readJsonFile("./app/lib/users.json");
    return users.filter(u => u.email === email)![0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;

          //   const passwordsMatch = await bcrypt.compare(password, user.password);
          const passwordsMatch = password === user.password;

          if (passwordsMatch) return user;
        }
        return null;
      }
    })
  ]
});
