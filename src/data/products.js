export const products = [
  {
    id: 1,
    name: "Nimbus Pro Headphones",
    slug: "nimbus-pro-headphones",
    category: "Audio",
    price: 199,
    oldPrice: 249,
    rating: 4.8,
    reviewCount: 412,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Best Seller", "Wireless"],
    inStock: true,
    description: "Experience unparalleled sound quality with the Nimbus Pro Headphones. Featuring active noise cancellation, 40-hour battery life, and ultra-comfortable memory foam ear cushions. Whether you're commuting, working, or relaxing, these headphones deliver crisp highs and deep bass.",
    specifications: [
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Battery Life", value: "Up to 40 hours" },
      { label: "Noise Cancellation", value: "Active (ANC)" },
      { label: "Weight", value: "250g" },
      { label: "Driver Size", value: "40mm" }
    ],
    reviews: [
      { id: 1, user: "Alex M.", rating: 5, date: "October 12, 2025", comment: "Absolutely incredible sound. The ANC blocks out everything in my noisy office." },
      { id: 2, user: "Sarah K.", rating: 4, date: "September 28, 2025", comment: "Great battery life, but they get a little warm after 4 hours of use." }
    ]
  },
  {
    id: 2,
    name: "Luma Smart Lamp",
    slug: "luma-smart-lamp",
    category: "Home",
    price: 89,
    rating: 4.6,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Smart Home"],
    inStock: true,
    description: "The Luma Smart Lamp brings intelligent lighting to your space. Control brightness, color temperature, and set schedules right from your smartphone. Compatible with Alexa and Google Assistant.",
    specifications: [
      { label: "Color Temperature", value: "2700K - 6500K" },
      { label: "Brightness", value: "800 Lumens" },
      { label: "Smart Home", value: "Alexa, Google Assistant, Apple HomeKit" },
      { label: "Lifespan", value: "25,000 hours" }
    ],
    reviews: [
      { id: 1, user: "Jamie T.", rating: 5, date: "November 2, 2025", comment: "Perfect for my bedside table. The app is super easy to use." },
      { id: 2, user: "David R.", rating: 4, date: "August 15, 2025", comment: "Love the colors, but sometimes it loses Wi-Fi connection." }
    ]
  },
  {
    id: 3,
    name: "Aero Ergonomic Chair",
    slug: "aero-ergonomic-chair",
    category: "Furniture",
    price: 329,
    oldPrice: 399,
    rating: 4.7,
    reviewCount: 96,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
    tags: ["Office"],
    inStock: true,
    description: "Say goodbye to back pain. The Aero Ergonomic Chair features a breathable mesh back, adjustable lumbar support, and 4D armrests to keep you comfortable during long work sessions.",
    specifications: [
      { label: "Material", value: "Breathable Mesh, Aluminum Frame" },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Adjustability", value: "Seat height, tilt tension, 4D armrests" },
      { label: "Warranty", value: "5 Years" }
    ],
    reviews: [
      { id: 1, user: "Michael B.", rating: 5, date: "December 5, 2025", comment: "Changed my WFH life. My posture is so much better now." }
    ]
  },
  {
    id: 4,
    name: "Orbit USB-C Hub",
    slug: "orbit-usb-c-hub",
    category: "Electronics",
    price: 59,
    rating: 4.5,
    reviewCount: 240,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80",
    tags: ["Portable"],
    inStock: true,
    description: "Expand your connectivity with the Orbit USB-C Hub. Features 4K HDMI, 100W Power Delivery, SD/MicroSD card readers, and 3 USB 3.0 ports in a sleek aluminum casing.",
    specifications: [
      { label: "Ports", value: "HDMI, SD, MicroSD, 3x USB-A, USB-C PD" },
      { label: "HDMI Resolution", value: "4K @ 60Hz" },
      { label: "Power Delivery", value: "Up to 100W" },
      { label: "Material", value: "Aluminum Alloy" }
    ],
    reviews: [
      { id: 1, user: "Chris L.", rating: 4, date: "January 10, 2026", comment: "Works great with my MacBook Air. Gets slightly warm under heavy load." }
    ]
  },
  {
    id: 5,
    name: "Solace Leather Backpack",
    slug: "solace-leather-backpack",
    category: "Fashion",
    price: 149,
    rating: 4.9,
    reviewCount: 121,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=1200&q=80",
    tags: ["Premium"],
    inStock: false,
    description: "Crafted from full-grain leather, the Solace Backpack combines vintage aesthetics with modern utility. Features a padded 15-inch laptop sleeve and water-resistant lining.",
    specifications: [
      { label: "Material", value: "Full-Grain Leather" },
      { label: "Laptop Sleeve", value: "Fits up to 15 inches" },
      { label: "Capacity", value: "18 Liters" },
      { label: "Dimensions", value: "16 x 11 x 5 inches" }
    ],
    reviews: [
      { id: 1, user: "Emma W.", rating: 5, date: "February 22, 2026", comment: "Absolutely gorgeous bag. The leather quality is outstanding." }
    ]
  },
  {
    id: 6,
    name: "Wave Mechanical Keyboard",
    slug: "wave-mechanical-keyboard",
    category: "Electronics",
    price: 129,
    rating: 4.7,
    reviewCount: 306,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80",
    tags: ["Gaming"],
    inStock: true,
    description: "Elevate your typing experience. The Wave Mechanical Keyboard offers hot-swappable tactile switches, per-key RGB backlighting, and a heavy CNC aluminum case.",
    specifications: [
      { label: "Switches", value: "Tactile Brown (Hot-swappable)" },
      { label: "Backlighting", value: "Per-key RGB" },
      { label: "Connection", value: "Wired USB-C" },
      { label: "Keycaps", value: "PBT Double-shot" }
    ],
    reviews: [
      { id: 1, user: "Ryan P.", rating: 5, date: "March 14, 2026", comment: "The thock sound on this is incredible out of the box." }
    ]
  },
  {
    id: 7,
    name: "Velocity Smartwatch",
    slug: "velocity-smartwatch",
    category: "Wearables",
    price: 219,
    oldPrice: 269,
    rating: 4.6,
    reviewCount: 278,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    tags: ["Fitness"],
    inStock: true,
    description: "Track your fitness journey with precision. Features GPS, heart rate monitoring, sleep tracking, and up to 7 days of battery life on a single charge.",
    specifications: [
      { label: "Display", value: "1.4-inch AMOLED" },
      { label: "Water Resistance", value: "5 ATM (50 meters)" },
      { label: "Battery Life", value: "Up to 7 days" },
      { label: "Sensors", value: "Heart rate, SpO2, GPS" }
    ],
    reviews: [
      { id: 1, user: "Lisa M.", rating: 4, date: "April 1, 2026", comment: "Great fitness tracker, but the proprietary charger is annoying." }
    ]
  },
  {
    id: 8,
    name: "Prism 4K Monitor",
    slug: "prism-4k-monitor",
    category: "Electronics",
    price: 449,
    rating: 4.8,
    reviewCount: 167,
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=1200&q=80",
    tags: ["Creator"],
    inStock: true,
    description: "Stunning 27-inch 4K IPS display engineered for creators. Offers 99% sRGB color accuracy, ultra-thin bezels, and a fully adjustable ergonomic stand.",
    specifications: [
      { label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { label: "Panel Type", value: "IPS" },
      { label: "Refresh Rate", value: "60Hz" },
      { label: "Color Gamut", value: "99% sRGB, 95% DCI-P3" }
    ],
    reviews: [
      { id: 1, user: "Kevin H.", rating: 5, date: "May 10, 2026", comment: "Perfect for photo editing. Colors are spot on right out of the box." }
    ]
  },
  {
    id: 9,
    name: "Breeze Air Purifier",
    slug: "breeze-air-purifier",
    category: "Home",
    price: 179,
    rating: 4.5,
    reviewCount: 133,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80",
    tags: ["Health"],
    inStock: true,
    description: "Breathe cleaner air. The Breeze Air Purifier uses a True HEPA filter to capture 99.97% of airborne particles, including dust, pollen, and pet dander.",
    specifications: [
      { label: "Filter Type", value: "True HEPA (H13) + Carbon" },
      { label: "Coverage Area", value: "Up to 400 sq. ft." },
      { label: "Noise Level", value: "24dB (Sleep Mode)" },
      { label: "Smart Features", value: "Air quality sensor, Auto mode" }
    ],
    reviews: [
      { id: 1, user: "Amanda C.", rating: 5, date: "May 20, 2026", comment: "Has completely solved my morning allergies. Super quiet on sleep mode." }
    ]
  },
  {
    id: 10,
    name: "Nova Travel Mug",
    slug: "nova-travel-mug",
    category: "Lifestyle",
    price: 39,
    rating: 4.4,
    reviewCount: 211,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Daily Use"],
    inStock: true,
    description: "Keep your coffee hot for 12 hours or water cold for 24 hours. The Nova Travel Mug features double-wall vacuum insulation and a leak-proof locking lid.",
    specifications: [
      { label: "Capacity", value: "16 oz (473 ml)" },
      { label: "Material", value: "18/8 Stainless Steel" },
      { label: "Insulation", value: "12h Hot / 24h Cold" },
      { label: "Care", value: "Hand wash recommended" }
    ],
    reviews: [
      { id: 1, user: "Tom S.", rating: 4, date: "June 2, 2026", comment: "Does exactly what it says. Just wish it was dishwasher safe." }
    ]
  },
  {
    id: 11,
    name: "Echo Portable Speaker",
    slug: "echo-portable-speaker",
    category: "Audio",
    price: 99,
    rating: 4.6,
    reviewCount: 355,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Outdoor"],
    inStock: true,
    description: "Take the party anywhere. The Echo Portable Speaker delivers 360-degree sound, is fully waterproof (IPX7), and provides up to 15 hours of playtime.",
    specifications: [
      { label: "Waterproof Rating", value: "IPX7" },
      { label: "Battery Life", value: "15 hours" },
      { label: "Connectivity", value: "Bluetooth 5.1" },
      { label: "Power Output", value: "20W" }
    ],
    reviews: [
      { id: 1, user: "Jake D.", rating: 5, date: "July 11, 2026", comment: "Incredible bass for its size. Survived a drop in the pool without issues." }
    ]
  },
  {
    id: 12,
    name: "Summit Running Shoes",
    slug: "summit-running-shoes",
    category: "Fashion",
    price: 119,
    rating: 4.7,
    reviewCount: 286,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    tags: ["Sports"],
    inStock: true,
    description: "Engineered for speed and comfort. Features a responsive foam midsole, breathable engineered mesh upper, and a durable rubber outsole for maximum traction.",
    specifications: [
      { label: "Upper Material", value: "Engineered Mesh" },
      { label: "Midsole", value: "Responsive EVA Foam" },
      { label: "Drop", value: "8mm" },
      { label: "Weight", value: "9.5 oz (Men's Size 9)" }
    ],
    reviews: [
      { id: 1, user: "Mark V.", rating: 5, date: "August 3, 2026", comment: "Felt great on my first 10k run. Very lightweight and bouncy." },
      { id: 2, user: "Elena P.", rating: 4, date: "August 20, 2026", comment: "Good shoes, but they run a bit small. Order half a size up." }
    ]
  }
];

export const featuredProducts = products.slice(0, 8);
export const dealsOfTheDay = products.filter((item) => item.oldPrice).slice(0, 4);
export const categories = [...new Set(products.map((product) => product.category))];
