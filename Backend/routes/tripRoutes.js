const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/generate", async (req, res) => {

    try {

        const { place, startDate, endDate } = req.body;

        const prompt = `
You are an intelligent travel AI.

User Details:
Current Place: ${place}
Start Date: ${startDate}
End Date: ${endDate}

Suggest exactly 4 BEST travel destinations based on the user's input.

For each destination return:
- destination name
- beautiful travel image URL from Unsplash
- short tagline

Return ONLY valid JSON.

Format:
[
  {
    "name": "Bali",
    "image": "https://source.unsplash.com/600x400/?bali,travel",
    "tagline": "Tropical paradise with beaches"
  }
]

DO NOT write explanation.
DO NOT use markdown.
ONLY return JSON array.
`;

        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                temperature: 0.8,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const text =
            response.data.choices[0].message.content;

        console.log(text);

        let suggestions = [];

        try {

            const cleanText = text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

            suggestions = JSON.parse(cleanText);

        } catch {

            suggestions = [
                {
                    name: "Maldives",
                    image:
                        "https://source.unsplash.com/600x400/?maldives,travel",
                    tagline: "Luxury island escape",
                },
                {
                    name: "Tokyo",
                    image:
                        "https://source.unsplash.com/600x400/?tokyo,travel",
                    tagline: "Futuristic city adventure",
                },
                {
                    name: "Swiss Alps",
                    image:
                        "https://source.unsplash.com/600x400/?switzerland,mountains",
                    tagline: "Snowy mountain paradise",
                },
                {
                    name: "Dubai",
                    image:
                        "https://source.unsplash.com/600x400/?dubai,travel",
                    tagline: "Luxury desert experience",
                },
            ];
        }

        res.json({
            success: true,
            suggestions,
        });

    } catch (error) {

        console.log(error.response?.data || error.message);

        res.status(500).json({
            success: false,
            message: "AI generation failed",
        });
    }
});

module.exports = router;