// ─────────────────────────────────────────────────────────────
// SHREE MALTI JEWELLERS · SITE CONFIGURATION
// Every business detail below is an editable placeholder.
// Replace the values here and they update across the site.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Shree Malti Jewellers",
  hindiName: "श्री मालती ज्वेलर्स",
  tagline: "Tradition in Every Design. Elegance in Every Moment.",
  eyebrow: "Jewellery for every occasion",
  intro:
    "Discover beautiful gold, silver, diamond, and bridal jewellery for weddings, celebrations, and life's special moments.",

  // WhatsApp number in international format, digits only (country code + number).
  whatsappNumber: "919621111136",
  phoneDisplay: "+91 9621111136",

  address: "Shop 12, Malhanpar, Bansgao Road, Gorakhpur 273403",
  hours: "Mon – Fri · 10:30 AM – 8:30 PM | Sat · 11:00 AM – 6:00 PM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shop+12%2C+Malhanpar%2C+Bansgao+Road%2C+Gorakhpur+273403",
  instagramUrl: "https://www.instagram.com/",

  nav: [
    { label: "Home", href: "#home" },
    { label: "Collections", href: "#collection" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  heroImage: "/images/malti-jewellers-store.png",
  heroImageAlt:
    "Gold-themed Shree Malti Jewellers storefront with its signboard and entrance",

  aboutImageMain:
    "https://images.pexels.com/photos/6262846/pexels-photo-6262846.jpeg?auto=compress&cs=tinysrgb&w=1000",
  aboutImageMainAlt: "Jeweller's hands crafting a piece of jewellery at the workbench",
  aboutImageSecondary:
    "https://images.pexels.com/photos/4889719/pexels-photo-4889719.jpeg?auto=compress&cs=tinysrgb&w=640",
  aboutImageSecondaryAlt: "Handcrafted gold chain resting on the open pages of a design book",
};

// Builds a WhatsApp deep link. The message is URL-encoded automatically.
export const waLink = (message) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const generalEnquiryLink = () =>
  waLink(`Namaste, I would like to know more about ${SITE.name} collections.`);

export const productEnquiryLink = (product) =>
  waLink(
    `Namaste, I am interested in the ${product.name} at ${SITE.name}. Please share more details and availability.`
  );

export const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
