const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: { type: String, default: '' },
  type: { type: String, default: 'activity' }, // flight, accommodation, activity, food, transport
  notes: { type: String, default: '' }
});

const daySchema = new mongoose.Schema({
  dayNumber: { type: Number, required: true },
  date: { type: String, default: '' },
  stops: [stopSchema]
});

const budgetItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, default: 0 }
});

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now }
});

const packingItemSchema = new mongoose.Schema({
  item: { type: String, required: true },
  checked: { type: Boolean, default: false }
});

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: { type: String, required: true },
    destination: { type: String, default: '' },
    startDate: { type: String, default: '' },
    endDate: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
    status: { type: String, enum: ['upcoming', 'previous'], default: 'upcoming' },

    // Itinerary
    days: [daySchema],

    // Budget
    budget: {
      transport: [budgetItemSchema],
      accommodation: [budgetItemSchema],
      activities: [budgetItemSchema]
    },

    // Packing Checklist
    packingList: [packingItemSchema],

    // Notes / Journal
    notes: [noteSchema],

    // Share
    shareCode: { type: String, default: '' },
    isPublic: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Trip', tripSchema);
