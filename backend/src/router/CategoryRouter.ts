import express, { Router } from "express";
import { CreateCategory, DeleteCategory, GetCategories } from "../controllers/CategoryController";

const router: Router = express.Router();

router.get("/", GetCategories);
router.post("/", CreateCategory);
router.delete("/:name", DeleteCategory);

export { router };