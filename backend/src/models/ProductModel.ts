import { Schema, model } from "mongoose";
import { Review } from "./ReviewModel";
import { imageSchema } from "./ImageModel";

export interface IProduct {
    name: string;
    description: string;
    category: string;
    count: number;
    price: number;
    rating: number;
    reviewsNumber: number;
    sales: number;
    attributes: Object;
    images: string;
    reviews: string[];

};

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    count: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviewsNumber: { type: Number, required: true },
    sales: { type: Number },
    attributes: { key: { type: String }, value: { type: String } },
    images: [imageSchema],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: Review
    }]
}, {
    timestamps: true
});

const Product = model<IProduct>("Product", productSchema);

productSchema.index({ name: "text", description: "text" }, { name: "TextIndex" });
productSchema.index({ "attrs.key": 1, "attrs.value": 1 });

export { Product };