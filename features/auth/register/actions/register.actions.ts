"use server";

import {registerSchema} from "@/validators/auth";
import {connectToDB} from "@/database/db";
import User from "@/schemas/user";
import bcrypt from "bcryptjs";
import {createToken} from "@/utility/createToken";
import {cookies} from "next/headers";
import {z} from "zod";

export async function register(state, formData: FormData) {
    console.log([...formData.entries()]);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string" || typeof confirmPassword !== "string") {
        console.error("اطلاعات فرم نامعتبر است.");
        return;
    }

    const result = registerSchema.safeParse({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    });

    if (!result.success) {
        return {
            message: "",
            error: z.flattenError(result.error),
            success: false,
            values: {
                name: formData.get("name"),
                email: formData.get("email"),
            }
        }
    }

    const {
        name: validName,
        email: validEmail,
        password: validPassword
    } = result.data;

    await connectToDB();

    const existingUser = await User.findOne({email: validEmail});
    if (existingUser) {
        return {
            message: "",
            error: {
                email: ["این ایمیل از قبل ثبت نام شده است"]
            },
            success: false,
            values: {
                name: formData.get("name"),
                email: formData.get("email"),
            }
        }
    }

    try {
        const hashedPassword = await bcrypt.hash(validPassword, 12);

        const user = await User.create({
            name: validName,
            email: validEmail,
            password: hashedPassword
        });

        const token = createToken(user._id);
        const cookiesStore = await cookies();
        cookiesStore.set("token", token, {
            path: "/",
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
        });

    } catch (error) {
        console.error(error);
    }
}