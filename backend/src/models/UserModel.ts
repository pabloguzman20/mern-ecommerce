import { Schema, model } from "mongoose";

interface User {
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    country: string;
    zipCode: string;
    state: string;
    password: string;
    isAdmin: Boolean;
};

const userSchema = new Schema<User>({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    address: { type: String },
    country: { type: String },
    zipCode: { type: String },
    state: { type: String },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
}, {
    timestamps: true
});

const User = model<User>("User", userSchema);

export { User };