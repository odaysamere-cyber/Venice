import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRatingSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // POST /api/ratings - Submit a new rating
  app.post("/api/ratings", async (req, res) => {
    const validatedData = insertRatingSchema.parse(req.body);
    const rating = await storage.createRating(validatedData);
    
    // Send to Discord webhook
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      const webhookData = {
        embeds: [{
          title: "تقييم جديد - Venice Community",
          color: 4886754, // Blue color
          fields: [
            {
              name: "الاسم",
              value: validatedData.name,
              inline: true
            },
            {
              name: "التقييم",
              value: "★".repeat(validatedData.rating) + "☆".repeat(5 - validatedData.rating),
              inline: true
            },
            {
              name: "اسم المستخدم في ديسكورد",
              value: validatedData.discord_username || "لم يتم تحديده",
              inline: true
            },
            {
              name: "التعليق",
              value: validatedData.message
            }
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Venice Community Rating System"
          }
        }]
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
    }
    
    res.json(rating);
  });

  // GET /api/ratings - Get all ratings
  app.get("/api/ratings", async (req, res) => {
    const ratings = await storage.getRatings();
    res.json(ratings);
  });

  const httpServer = createServer(app);
  return httpServer;
}
