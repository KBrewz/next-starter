// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    products: [
      {
        id: 1,
        name: "Fuji Apples",
        price: 80,
        image: "/images/apple.png",
      },
      {
        id: 2,
        name: "Bananas, each",
        price: 25,
        image: "/images/banana.jpg",
      },
      {
        id: 3,
        name: "Chobani Mixed Berry Yogurt",
        price: 125,
        image: "/images/yogurt.jpg",
      },
      {
        id: 4,
        name: "Snack Factory Deli Style Pretzel Crisps",
        price: 350,
        image: "/images/pretzels.jpg",
      },
      {
        id: 5,
        name: "Wonder Classic White Bread",
        price: 100,
        image: "/images/bread.jpg",
      },
    ],
  });
}
