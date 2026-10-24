import {z} from "zod";

export const registerSchema = z.object({
    name: z.string().trim().min(3, "نام باید حداقل 3 کاراکتر داشته باشد"),
    email: z.email().trim().toLowerCase(),
    password: z.string().min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد"),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    error: "رمزعبور با تکرار رمزعبور یکسان نیست",
    path: ["confirmPassword"]
});