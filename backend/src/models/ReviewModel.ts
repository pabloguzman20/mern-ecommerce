import { Schema, model, SchemaDefinitionProperty } from "mongoose";

interface Review {
    user: SchemaDefinitionProperty;
    comment: string;
    rating: number;

};

const reviewSchema = new Schema<Review>({
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    user: {
        _id: { type: Schema.Types.ObjectId, required: true },
        name: { type: String, reu: true }

    }
}, {
    timestamps: true
});

const Review = model<Review>("Review", reviewSchema);

export { Review };