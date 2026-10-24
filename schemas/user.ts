import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "نام الزامی است"],
            trim: true,
            minLength: [3, "نام حداقل باید 3 کاراکتر داشته باشد"],
        },
        email: {
            type: String,
            required: [true, "ایمیل الزامی است"],
            trim: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "رمزعبور الزامی است"],
            minlength: 8,
            select: false,
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;