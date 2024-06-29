import express from "express";
import { createAd, getAllAds, getAdById } from "../models/Ad";

const router = express.Router();

router.post("/", createAd);
router.get("/", getAllAds);
router.get("/:id", getAdById);

export default router;
