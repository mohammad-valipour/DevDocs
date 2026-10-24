import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {connectToDB} from "@/database/db";
import User from "@/schemas/user";
import bcrypt from "bcryptjs";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            name: "Next.js Auth",

            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                }
            },

            async authorize(credentials) {
                const email = credentials?.email;
                const password = credentials?.password;
                if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password) return null;

                await connectToDB();

                const user = await User.findOne({email}).select("+password");
                if (!user) return null;

                const isPasswordCorrect = await bcrypt.compare(password, user.password);
                if (!isPasswordCorrect) return null;

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                };
            },

        }),
    ],
})