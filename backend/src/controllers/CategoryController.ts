import { Request, RequestHandler, Response } from "express";
import { getCategories, createCategory, deleteCategory } from "../services/CategoryService";

interface ErrorResponse {
    code: number;
    message: string;
};

export const GetCategories: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await getCategories();
        res.status(200).json({ response });
    } catch (error) {
        const typedError = error as ErrorResponse;
        typedError.code == 404
            ? res.status(404).json({ message: typedError.message })
            : res.status(500).json({ message: '[ERROR]: Server error' });
    }
};

export const CreateCategory: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await createCategory(req.body);
        res.status(200).json({ response });
    } catch (error) {
        const typedError = error as ErrorResponse;
        typedError.code == 400
            ? res.status(400).json({ message: typedError.message })
            : res.status(500).json({ message: '[ERROR]: Server error' });
    }
};

export const DeleteCategory: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await deleteCategory(req.params.name);
        res.status(200).json({ response });
    } catch (error) {
        const typedError = error as ErrorResponse;
        typedError.code == 400
            ? res.status(400).json({ message: typedError.message })
            : res.status(500).json({ message: '[ERROR]: Server error' });
    }
};