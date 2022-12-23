import { Product } from "../models/ProductModel";

export const getProducts = async (pageNum: number, sortOption: string) => {
    let sort = {}, query = {};
    if (sortOption) {
        let sortOpt = sortOption.split("_");
        sort = { [sortOpt[0]]: Number(sortOpt[1]) };
    };
    const totalProducts = await Product.countDocuments({});
    const products = await Product.find({})
        .skip(3 * (pageNum - 1))
        .sort(sort)
        .limit(3);
    if (products.length === 0) throw ({ code: 404, message: "No matches found" });
    return products;
};