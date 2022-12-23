import mongoose from "mongoose";

export const orders = Array.from({ length: 22 }).map((_, idx) => {
    let day = 20
    let hour = 0;
    let subtotal = 100;
    if (idx < 10) {
        hour = 0 + idx
        subtotal = 100
    } else if (idx > 16 && idx < 21) {
        hour = idx
        subtotal = 100 + 12 * idx
    } else {
        hour = idx
        subtotal = 100
    };

    return {
        user: new mongoose.Types.ObjectId(),
        orderTotal: {
            itemsCount: 3,
            cartSubtotal: subtotal
        },
        cartItems: [
            {
                name: "Product name",
                price: 34,
                image: { path: "/images/tablets-category.png" },
                quantity: 532,
                count: 65
            }
        ],
        paymentMethod: "PayPal",
        isPaid: false,
        isDelivered: false,
        createdAt: new Date()
    }
});