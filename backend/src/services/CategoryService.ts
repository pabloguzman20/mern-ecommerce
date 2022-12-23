import { Category, ICategory } from "../models/CategoryModel";

export const getCategories = async () => {
    const allCategories = await Category.find({}).sort({ name: "asc" }).orFail();
    if (allCategories.length === 0) throw ({ code: 404, message: "No matches found" });
    return allCategories;
};

export const createCategory = async (categoryBody: ICategory) => {
    if (!categoryBody) throw ({ code: 400, message: "Category input is required" }); //verify body content 
    const categoryExist = await Category.findOne({ name: categoryBody.name });
    if (categoryExist) throw ({ code: 400, message: "Category already exists" }); //verify body content 
    const categoryCreated = await Category.create({
        name: categoryBody.name,
        description: categoryBody.description,
        image: categoryBody.image,
        attrs: categoryBody.attrs
    });
    return categoryCreated;
};

export const deleteCategory = async (name: string) => {
    const categoryExist = await Category.findOne({ name: name });
    if (!categoryExist) throw ({ code: 400, message: "Category don't exists" }); //verify body content 
    const categoryDeleted = await Category.deleteOne({ name: name }).orFail();
    return categoryDeleted;
};
