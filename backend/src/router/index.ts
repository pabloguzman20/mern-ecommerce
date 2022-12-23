import express, { Router } from "express";
import { router as productRouter } from "./ProductRouter";
import { router as categoriesRouter } from "./CategoryRouter";

const router: Router = express.Router();

router.use(express.json());

router.use("/categories", categoriesRouter);
router.use("/products", productRouter);

export { router };