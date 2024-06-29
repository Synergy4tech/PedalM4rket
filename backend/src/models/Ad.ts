import { Request, Response } from "express";

// Mock database
const ads: any[] = [];

export const createAd = (req: Request, res: Response) => {
  const { title, description, price, location, userId } = req.body;

  if (!title || !description || !price || !location || !userId) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const newAd = {
    id: ads.length + 1,
    title,
    description,
    price,
    location,
    userId,
  };
  ads.push(newAd);
  res.status(201).json(newAd);
};

export const getAllAds = (req: Request, res: Response) => {
  const { price, location } = req.query;
  let filteredAds = ads;

  if (price) {
    filteredAds = filteredAds.filter((ad) => ad.price == price);
  }

  if (location) {
    filteredAds = filteredAds.filter(
      (ad) => ad.location.toLowerCase() === (location as string).toLowerCase()
    );
  }

  res.status(200).json(filteredAds);
};

export const getAdById = (req: Request, res: Response) => {
  const { id } = req.params;
  const ad = ads.find((ad) => ad.id == id);

  if (!ad) {
    return res.status(404).json({ error: "Anúncio não encontrado." });
  }

  res.status(200).json(ad);
};
