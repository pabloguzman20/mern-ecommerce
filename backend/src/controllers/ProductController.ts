import { Request, RequestHandler, Response } from "express";
import { getProducts } from "../services/ProductService";

interface ErrorResponse {
    code: number;
    message: string;
};

export const GetProducts: RequestHandler = async (req: Request, res: Response) => {
    try {
        const pageNum = Number(req.query.pageNum) || 1;
        const sortOption = String(req.query.sort || "");
        const response = await getProducts(pageNum, sortOption);
        res.status(200).json({ response });
    } catch (error) {
        const typedError = error as ErrorResponse;
        typedError.code == 404
            ? res.status(404).json({ message: '[ERROR]: No matches found' })
            : res.status(500).json({ message: '[ERROR]: Server' });
    }
};