import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 8,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            enum: ["draft", "published"],
        },
        publishedAt: {
            type: Date,
            default: null,
        }
    },
    {
        timestamps: true
    }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;