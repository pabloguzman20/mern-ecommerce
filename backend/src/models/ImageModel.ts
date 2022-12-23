import { Schema, model } from "mongoose";

interface Image {
    path: string;
};

const imageSchema = new Schema<Image>({
    path: { type: String, required: true }
}, {
    timestamps: true
});

export { imageSchema };