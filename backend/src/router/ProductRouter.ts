import express, { Router } from "express";
import { GetProducts } from "../controllers/ProductController";

const router: Router = express.Router();

router.get("/", GetProducts);

export { router };