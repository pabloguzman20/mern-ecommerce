import { ObjectId } from "mongoose";
import { Category } from "../models/CategoryModel";
import { Order } from "../models/OrderModel";
import { Product } from "../models/ProductModel";
import { Review } from "../models/ReviewModel";
import { User } from "../models/UserModel";

import { categories } from "./Categories";
import { orders } from "./Orders";
import { products } from "./Products";
import { reviews } from "./Reviews";
import { users } from "./Users";

export const importData = async (): Promise<boolean> => {
    try {
        await Category.collection.dropIndexes();
        await Product.collection.dropIndexes();


        await Category.collection.deleteMany({});
        await Product.collection.deleteMany({});
        await Review.collection.deleteMany({});
        await User.collection.deleteMany({})
        await Order.collection.deleteMany({});

        await Category.insertMany(categories)
        const review = await Review.insertMany(reviews);
        const sampleProducts = products.map((product) => {
            review.map((item) => {
                product.reviews.push(item._id as never);
            });
            return { ...product };
        })
        await Product.insertMany(sampleProducts);
        await User.insertMany(users);
        await Order.insertMany(orders);

        return true;

    } catch (error) {
        console.error("Error while proccessing seeder data", error)
        return false;
    };
};