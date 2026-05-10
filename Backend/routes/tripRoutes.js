const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createTrip,
  getTrips,
  getUpcomingTrips,
  getPreviousTrips,
  getTripById,
  updateTrip,
  deleteTrip,
  addDay,
  addStop,
  updateStop,
  deleteStop,
  addBudgetItem,
  deleteBudgetItem,
  addPackingItem,
  togglePackingItem,
  deletePackingItem,
  addNote,
  deleteNote,
  generateShareLink,
  getPublicTrip,
  searchTrips
} = require('../controllers/tripController');

// Public route (no auth)
router.get('/public/:shareCode', getPublicTrip);

// Protected routes (all below need JWT)
router.use(protect);

// Trip CRUD
router.post('/', createTrip);
router.get('/', getTrips);
router.get('/upcoming', getUpcomingTrips);
router.get('/previous', getPreviousTrips);
router.get('/search', searchTrips);
router.get('/:id', getTripById);
router.put('/:id', updateTrip);
router.delete('/:id', deleteTrip);

// Itinerary (Days & Stops)
router.post('/:id/days', addDay);
router.post('/:id/days/:dayId/stops', addStop);
router.put('/:id/days/:dayId/stops/:stopId', updateStop);
router.delete('/:id/days/:dayId/stops/:stopId', deleteStop);

// Budget
router.post('/:id/budget', addBudgetItem);
router.delete('/:id/budget/:category/:itemId', deleteBudgetItem);

// Packing Checklist
router.post('/:id/packing', addPackingItem);
router.put('/:id/packing/:itemId', togglePackingItem);
router.delete('/:id/packing/:itemId', deletePackingItem);

// Notes
router.post('/:id/notes', addNote);
router.delete('/:id/notes/:noteId', deleteNote);

// Share
router.post('/:id/share', generateShareLink);

module.exports = router;
const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/generate", async (req, res) => {

    try {

        const { place, startDate, endDate } = req.body;

        const prompt = `
You are an intelligent travel recommendation AI.

User wants travel suggestions related to:
Destination Interest: ${place}
Trip Start Date: ${startDate}
Trip End Date: ${endDate}

Suggest exactly 4 destinations that are highly relevant to the user's selected place or nearby travel experience.

If user enters:
- London → suggest nearby Europe trips
- India → suggest Indian tourist places
- Japan → suggest Japanese destinations
- Beach → suggest beach destinations

Return ONLY valid JSON.

Format:
[
  {
    "name": "Paris",
    "image": "https://source.unsplash.com/600x400/?Paris,travel",
    "tagline": "Romantic city with iconic landmarks"
  }
]

Rules:
- Only JSON
- No markdown
- No explanation
- Always include image URL
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
