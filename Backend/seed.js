require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const User = require('./models/User');
const Trip = require('./models/Trip');

const seedData = async () => {
  await connectDB();

  // Find first user
  const user = await User.findOne();
  if (!user) {
    console.log('❌ No user found! Please register first.');
    process.exit(1);
  }

  console.log(`✅ Seeding trips for user: ${user.name} (${user.email})`);

  // Clear existing trips for this user
  await Trip.deleteMany({ user: user._id });
  console.log('🗑️  Cleared old trips');

  const upcomingTrips = [
    {
      user: user._id,
      name: 'Swiss Alps Retreat',
      destination: 'Switzerland',
      startDate: '2024-01-05',
      endDate: '2024-01-12',
      description: 'A week-long mountain retreat in the Swiss Alps with skiing and scenic train rides.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200',
      isActive: true,
      status: 'upcoming',
      days: [
        {
          dayNumber: 1, date: 'Jan 05',
          stops: [
            { title: 'Arrive at Zurich Airport', time: '10:00 AM', type: 'flight', notes: 'Flight LX 38' },
            { title: 'Check-in at Hotel Alpine', time: '1:00 PM', type: 'accommodation', notes: '5-star mountain hotel' },
            { title: 'Welcome Dinner at Chalet', time: '7:00 PM', type: 'food', notes: 'Traditional Swiss fondue' }
          ]
        },
        {
          dayNumber: 2, date: 'Jan 06',
          stops: [
            { title: 'Jungfraujoch Day Trip', time: '8:00 AM', type: 'activity', notes: 'Top of Europe excursion' },
            { title: 'Lunch at Kleine Scheidegg', time: '12:30 PM', type: 'food', notes: 'Mountain restaurant' },
            { title: 'Paragliding over Interlaken', time: '3:00 PM', type: 'activity', notes: 'Tandem paragliding' }
          ]
        },
        {
          dayNumber: 3, date: 'Jan 07',
          stops: [
            { title: 'Skiing at Grindelwald', time: '9:00 AM', type: 'activity', notes: 'Full day ski pass included' },
            { title: 'Hot Chocolate at Alpine Lodge', time: '4:00 PM', type: 'food', notes: '' }
          ]
        }
      ],
      budget: {
        transport: [
          { name: 'Flight LX38 (Round Trip)', amount: 850 },
          { name: 'Swiss Rail Pass (7 days)', amount: 350 },
          { name: 'Airport Transfer', amount: 60 }
        ],
        accommodation: [
          { name: 'Hotel Alpine (5 nights)', amount: 1500 },
          { name: 'Mountain Cabin (2 nights)', amount: 400 }
        ],
        activities: [
          { name: 'Jungfraujoch Ticket', amount: 200 },
          { name: 'Ski Pass (3 days)', amount: 300 },
          { name: 'Paragliding', amount: 180 },
          { name: 'Fine Dining & Meals', amount: 450 }
        ]
      },
      packingList: [
        { item: 'Passport & Travel Docs', checked: true },
        { item: 'Ski Jacket & Thermals', checked: true },
        { item: 'Warm Gloves & Beanie', checked: true },
        { item: 'Hiking Boots', checked: false },
        { item: 'Sunglasses (Snow Glare)', checked: false },
        { item: 'Camera + Extra Batteries', checked: false },
        { item: 'Travel Insurance Docs', checked: true },
        { item: 'Power Adapter (Swiss)', checked: false }
      ],
      notes: [
        { content: 'Hotel check-in after 2 PM. Early arrival possible with extra charge.', updatedAt: new Date() },
        { content: 'Book Jungfraujoch tickets online in advance — saves 20% off!', updatedAt: new Date() },
        { content: 'Carry cash (CHF) for small mountain cafes — many don\'t accept cards.', updatedAt: new Date() }
      ]
    },
    {
      user: user._id,
      name: 'Kyoto Spring',
      destination: 'Japan',
      startDate: '2024-04-02',
      endDate: '2024-04-14',
      description: 'Cherry blossom season in Kyoto. Temples, tea ceremonies, and traditional culture.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200',
      isActive: false,
      status: 'upcoming',
      days: [
        {
          dayNumber: 1, date: 'Apr 02',
          stops: [
            { title: 'Land at Kansai Airport', time: '9:00 AM', type: 'flight', notes: 'JAL Flight' },
            { title: 'Haruka Express to Kyoto', time: '10:30 AM', type: 'transport', notes: '75 min ride' },
            { title: 'Check-in Ryokan', time: '2:00 PM', type: 'accommodation', notes: 'Traditional Japanese inn' }
          ]
        },
        {
          dayNumber: 2, date: 'Apr 03',
          stops: [
            { title: 'Fushimi Inari Shrine', time: '7:00 AM', type: 'activity', notes: 'Go early to avoid crowds' },
            { title: 'Nishiki Market Walk', time: '11:00 AM', type: 'activity', notes: 'Street food heaven' },
            { title: 'Tea Ceremony in Gion', time: '3:00 PM', type: 'activity', notes: 'Traditional matcha experience' }
          ]
        }
      ],
      budget: {
        transport: [
          { name: 'JAL Flight (Round Trip)', amount: 980 },
          { name: 'JR Rail Pass (14 days)', amount: 420 }
        ],
        accommodation: [
          { name: 'Ryokan Kyoto (7 nights)', amount: 1400 },
          { name: 'Capsule Hotel Tokyo (3 nights)', amount: 180 }
        ],
        activities: [
          { name: 'Tea Ceremony', amount: 50 },
          { name: 'Kimono Rental', amount: 40 },
          { name: 'Food & Street Snacks', amount: 350 }
        ]
      },
      packingList: [
        { item: 'Passport', checked: true },
        { item: 'JR Pass Voucher', checked: false },
        { item: 'Comfortable Walking Shoes', checked: false },
        { item: 'Pocket WiFi', checked: false },
        { item: 'Rain Jacket', checked: false }
      ],
      notes: [
        { content: 'Cherry blossom peak usually around April 5-10 in Kyoto.', updatedAt: new Date() },
        { content: 'Get IC Card (Suica/ICOCA) at airport for easy transit payments.', updatedAt: new Date() }
      ]
    },
    {
      user: user._id,
      name: 'Santorini Escape',
      destination: 'Greece',
      startDate: '2024-06-08',
      endDate: '2024-06-15',
      description: 'Romantic island getaway with stunning sunsets and Aegean Sea views.',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200',
      isActive: false,
      status: 'upcoming',
      days: [
        {
          dayNumber: 1, date: 'Jun 08',
          stops: [
            { title: 'Fly to Santorini (JTR)', time: '11:00 AM', type: 'flight', notes: 'Aegean Airlines' },
            { title: 'Check-in at Caldera Villa', time: '3:00 PM', type: 'accommodation', notes: 'Infinity pool view' },
            { title: 'Sunset at Oia', time: '7:30 PM', type: 'activity', notes: 'World-famous sunset spot' }
          ]
        }
      ],
      budget: {
        transport: [{ name: 'Aegean Airlines Flight', amount: 380 }, { name: 'ATV Rental (4 days)', amount: 120 }],
        accommodation: [{ name: 'Caldera Villa (7 nights)', amount: 2100 }],
        activities: [{ name: 'Catamaran Cruise', amount: 150 }, { name: 'Wine Tasting Tour', amount: 80 }, { name: 'Meals & Dining', amount: 500 }]
      },
      packingList: [
        { item: 'Swimwear', checked: false },
        { item: 'Sunscreen SPF 50', checked: false },
        { item: 'White Linen Clothes', checked: false },
        { item: 'Sandals', checked: false }
      ],
      notes: [{ content: 'Book Oia sunset restaurant at least 2 weeks in advance!', updatedAt: new Date() }]
    },
    {
      user: user._id,
      name: 'Bali Wellness',
      destination: 'Indonesia',
      startDate: '2024-08-21',
      endDate: '2024-08-29',
      description: 'Wellness and adventure retreat in Bali — yoga, surfing, and rice terraces.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200',
      isActive: false,
      status: 'upcoming',
      days: [],
      budget: {
        transport: [{ name: 'Flight (Round Trip)', amount: 650 }],
        accommodation: [{ name: 'Ubud Eco Resort (8 nights)', amount: 560 }],
        activities: [{ name: 'Surf Lessons', amount: 80 }, { name: 'Yoga Retreat Package', amount: 200 }]
      },
      packingList: [{ item: 'Yoga Mat', checked: false }, { item: 'Reef-safe Sunscreen', checked: false }],
      notes: []
    }
  ];

  const previousTripsData = [
    {
      user: user._id,
      name: 'Paris Getaway',
      destination: 'France',
      startDate: '2023-09-12',
      endDate: '2023-09-18',
      description: 'A magical week in the City of Lights. Eiffel Tower, Louvre, and Montmartre.',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200',
      isActive: false,
      status: 'previous',
      days: [
        {
          dayNumber: 1, date: 'Sep 12',
          stops: [
            { title: 'Arrive at CDG Airport', time: '8:00 AM', type: 'flight', notes: 'Air France' },
            { title: 'Hotel Le Marais Check-in', time: '12:00 PM', type: 'accommodation', notes: 'Boutique hotel' },
            { title: 'Seine River Cruise', time: '6:00 PM', type: 'activity', notes: 'Sunset cruise' }
          ]
        },
        {
          dayNumber: 2, date: 'Sep 13',
          stops: [
            { title: 'Louvre Museum', time: '9:00 AM', type: 'activity', notes: 'Book skip-the-line tickets' },
            { title: 'Lunch at Café de Flore', time: '1:00 PM', type: 'food', notes: 'Classic Parisian café' },
            { title: 'Eiffel Tower Visit', time: '5:00 PM', type: 'activity', notes: 'Summit tickets booked' }
          ]
        }
      ],
      budget: {
        transport: [{ name: 'Air France Flight', amount: 720 }, { name: 'Metro Pass (7 days)', amount: 30 }],
        accommodation: [{ name: 'Hotel Le Marais (6 nights)', amount: 1080 }],
        activities: [{ name: 'Louvre Tickets', amount: 22 }, { name: 'Eiffel Tower Summit', amount: 26 }, { name: 'Seine Cruise', amount: 15 }, { name: 'Meals & Cafes', amount: 420 }]
      },
      packingList: [
        { item: 'Passport', checked: true },
        { item: 'Walking Shoes', checked: true },
        { item: 'Camera', checked: true },
        { item: 'Light Jacket', checked: true },
        { item: 'French Phrasebook', checked: true }
      ],
      notes: [
        { content: 'The croissants at the bakery near hotel were INCREDIBLE.', updatedAt: new Date('2023-09-13') },
        { content: 'Montmartre at sunset is magical. Go to Sacré-Cœur steps.', updatedAt: new Date('2023-09-15') },
        { content: 'Skip restaurant tourist traps near Eiffel Tower — walk 2 blocks for real food.', updatedAt: new Date('2023-09-14') }
      ]
    },
    {
      user: user._id,
      name: 'Kerala Backwaters',
      destination: 'India',
      startDate: '2023-12-05',
      endDate: '2023-12-10',
      description: 'Houseboat cruise through Kerala backwaters, Ayurvedic spa, and spice plantations.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200',
      isActive: false,
      status: 'previous',
      days: [
        {
          dayNumber: 1, date: 'Dec 05',
          stops: [
            { title: 'Fly to Cochin', time: '7:00 AM', type: 'flight', notes: 'IndiGo' },
            { title: 'Drive to Alleppey', time: '11:00 AM', type: 'transport', notes: '2-hour drive' },
            { title: 'Board Houseboat', time: '2:00 PM', type: 'accommodation', notes: 'Premium houseboat with AC' }
          ]
        }
      ],
      budget: {
        transport: [{ name: 'IndiGo Flight', amount: 150 }, { name: 'Car Rental (5 days)', amount: 80 }],
        accommodation: [{ name: 'Houseboat (2 nights)', amount: 200 }, { name: 'Ayurvedic Resort (3 nights)', amount: 350 }],
        activities: [{ name: 'Ayurvedic Spa Package', amount: 120 }, { name: 'Spice Plantation Tour', amount: 25 }, { name: 'Kathakali Show', amount: 15 }]
      },
      packingList: [
        { item: 'Light Cotton Clothes', checked: true },
        { item: 'Mosquito Repellent', checked: true },
        { item: 'Sunscreen', checked: true }
      ],
      notes: [
        { content: 'The houseboat food was home-cooked Kerala meals — best fish curry ever!', updatedAt: new Date('2023-12-06') },
        { content: 'Alleppey sunsets from the houseboat deck are breathtaking.', updatedAt: new Date('2023-12-07') }
      ]
    },
    {
      user: user._id,
      name: 'New York Winter',
      destination: 'USA',
      startDate: '2022-12-20',
      endDate: '2022-12-28',
      description: 'Christmas in NYC — Times Square, Central Park snow, Broadway shows.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200',
      isActive: false,
      status: 'previous',
      days: [
        {
          dayNumber: 1, date: 'Dec 20',
          stops: [
            { title: 'Land at JFK Airport', time: '6:00 PM', type: 'flight', notes: 'Delta Airlines' },
            { title: 'Check-in Manhattan Hotel', time: '9:00 PM', type: 'accommodation', notes: 'Near Times Square' }
          ]
        },
        {
          dayNumber: 2, date: 'Dec 21',
          stops: [
            { title: 'Central Park Walk', time: '9:00 AM', type: 'activity', notes: 'Snow expected!' },
            { title: 'MoMA Visit', time: '1:00 PM', type: 'activity', notes: 'Modern Art Museum' },
            { title: 'Broadway Show - Hamilton', time: '7:00 PM', type: 'activity', notes: 'Orchestra seats!' }
          ]
        }
      ],
      budget: {
        transport: [{ name: 'Delta Flight (Round Trip)', amount: 1100 }, { name: 'MetroCard', amount: 35 }],
        accommodation: [{ name: 'Times Square Hotel (8 nights)', amount: 2400 }],
        activities: [{ name: 'Broadway Tickets', amount: 350 }, { name: 'MoMA Entry', amount: 25 }, { name: 'Top of the Rock', amount: 40 }, { name: 'Meals & NYC Pizza', amount: 600 }]
      },
      packingList: [
        { item: 'Heavy Winter Coat', checked: true },
        { item: 'Thermal Layers', checked: true },
        { item: 'Snow Boots', checked: true },
        { item: 'Gloves & Scarf', checked: true }
      ],
      notes: [
        { content: 'Rockefeller Center ice skating was magical at night!', updatedAt: new Date('2022-12-22') },
        { content: 'Joe\'s Pizza in Greenwich Village — best $3 slice in NYC.', updatedAt: new Date('2022-12-23') },
        { content: 'Times Square on NYE is overrated. Watch from a rooftop bar instead.', updatedAt: new Date('2022-12-28') }
      ]
    }
  ];

  // Insert all trips
  const inserted = await Trip.insertMany([...upcomingTrips, ...previousTripsData]);
  console.log(`\n🎉 Successfully seeded ${inserted.length} trips!`);
  console.log(`   📌 ${upcomingTrips.length} Upcoming trips`);
  console.log(`   📜 ${previousTripsData.length} Previous trips (History)`);
  console.log('\nTrips created:');
  inserted.forEach(t => console.log(`   • ${t.name} (${t.status}) — ${t.destination}`));

  process.exit(0);
};

seedData().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
