import { Schema, model } from "mongoose";
import { User } from "./UserModel";

interface Order {

};

const orderSchema = new Schema<Order>({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: User,
    },
    orderTotal: {
        itemsCount: { type: Number, required: true },
        cartSubtotal: { type: Number, required: true }
    },
    cartItems: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            image: { path: { type: String, required: true }, },
            quantity: { type: Number, required: true },
            count: { type: Number, required: true }
        }
    ],
    transactionResult: {
        status: { type: String },
        createTime: { type: String },
        amount: { type: Number }
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }
}, {
    timestamps: true
});

const Order = model<Order>("Order", orderSchema);

export { Order };