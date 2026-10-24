import {cookies} from "next/headers";
import jwt, {JwtPayload} from "jsonwebtoken";
import {connectToDB} from "@/database/db";
import User from "@/schemas/user";

export async function getUser() {
    const cookiesStore = await cookies();

    const token = cookiesStore.get("token")?.value;
    if (!token) return null;

    try {
        const payload: string | JwtPayload = jwt.verify(token, process.env.JWT_SECRET!);
        if (typeof payload === "string" || typeof payload.userID !== "string") return null;

        await connectToDB();

        return await User.findById(payload.userID);
    } catch (error) {
        console.error("Error getting user:", error);
        return null;
    }
}