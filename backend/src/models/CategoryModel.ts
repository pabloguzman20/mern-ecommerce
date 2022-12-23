import { Schema, model } from "mongoose";

export interface ICategory {
    name: string;
    description: string;
    image: string;
    attrs: Object
}

const categorySchema = new Schema<ICategory>({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, default: "/images/tablets-category.png" },
    attrs: [{
        key: { type: String },
        value: [{ type: String }]
    }]
});

categorySchema.index({ description: 1 });

const Category = model<ICategory>("Category", categorySchema);

export { Category };