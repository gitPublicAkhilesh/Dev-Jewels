export const CATEGORIES = [
"All Jewellery",
"Gold Jewellery",
"Silver Jewellery",
"Diamond Jewellery",
"Traditional Indian Jewellery",
"Necklaces",
"Earrings",
"Rings",
"Bangles",
"Bridal Jewellery", ];
export const MATERIALS = ["Gold", "Silver", "Diamond"];
export const PRICE_MIN = 5000; export const PRICE_MAX = 750000;
export const matchesCategory = (product, category) => {
if (category === "All Jewellery") return true;
if (["Gold Jewellery", "Silver Jewellery", "Diamond Jewellery"].includes(category)) {
return product.material === category.replace(" Jewellery", "");
}
if (category === "Traditional Indian Jewellery") return product.traditional === true;
return product.category === category; };
export const products = [
{
id: "heritage-gold-necklace",
name: "Heritage Gold Necklace",
category: "Necklaces",
material: "Gold",
metalDetail: "22K Gold",
price: 186500,
tag: "Bestseller",
featured: true,
image:
"https://images.unsplash.com/photo-1601121141461-920cb1993441?auto=format&fit=crop&w=900&q=80",
alt: "Model wearing the Heritage Gold Necklace, a 22K gold rani haar with a centred pendant",
description:
"A classic 22-karat rani haar with hand-finished gold beads and a centred pendant, made to sit gracefully along the collarbone. A quiet heirloom for weddings and festive evenings alike.",
},
{
id: "meenakari-temple-necklace",
name: "Meenakari Temple Necklace",
category: "Necklaces",
traditional: true,
material: "Gold",
metalDetail: "22K Gold · Enamel",
price: 242000,
tag: "New",
featured: true,
image:
"https://images.unsplash.com/photo-1722410180644-5955f83ec8b1?auto=format&fit=crop&w=900&q=80",
alt: "Meenakari Temple Necklace displayed on a dark table",
description:
"South-Indian temple craftsmanship with hand-painted meenakari accents along the pendant. Statement jewellery with an old-world soul, finished by hand over several weeks.",
},
{
id: "regal-diamond-riviere",
name: "Regal Diamond Rivière",
category: "Necklaces",
material: "Diamond",
metalDetail: "18K White Gold · Diamonds",
price: 542000,
tag: "Bestseller",
featured: true,
image:
"https://images.unsplash.com/photo-1705326454924-f6777522b030?auto=format&fit=crop&w=900&q=80",
alt: "Regal Diamond Rivière necklace presented in a boutique showcase",
description:
"A graduated line of brilliant-cut diamonds set in 18-karat white gold, designed to catch light with every turn of the head. The definitive evening necklace.",
},
{
id: "lotus-silver-pendant",
name: "Lotus Silver Pendant",
category: "Necklaces",
material: "Silver",
metalDetail: "925 Sterling Silver",
price: 18400,
tag: "New",
featured: false,
image:
"https://images.pexels.com/photos/9645737/pexels-photo-9645737.jpeg?auto=compress&cs=tinysrgb&w=900",
alt: "Delicate silver pendant chain worn along the collarbone in soft light",
description:
"A weightless sterling silver chain carrying a hand-carved lotus pendant. Everyday elegance that layers beautifully with longer necklaces.",
},
{
id: "ratnavali-jhumkas",
name: "Ratnavali Jhumkas",
category: "Earrings",
traditional: true,
material: "Gold",
metalDetail: "22K Gold",
price: 64200,
tag: "Bestseller",
featured: true,
image:
"https://images.pexels.com/photos/37601639/pexels-photo-37601639.jpeg?auto=compress&cs=tinysrgb&w=900",
alt: "Close-up of a gold jhumka earring worn with traditional attire",
description:
"Hand-turned jhumkas with a tapered dome, beaded fringe and a secure back clasp. Our most-loved earring for sangeet nights and family weddings.",
},
{
id: "chandbali-moon-earrings",
name: "Chandbali Moon Earrings",
category: "Earrings",
traditional: true,
material: "Gold",
metalDetail: "22K Gold",
price: 52800,
tag: null,
featured: false,
image:
"https://images.unsplash.com/photo-1762686130435-897de4b26aac?auto=format&fit=crop&w=900&q=80",
alt: "Rows of ornate gold chandbali earrings on display",
description:
"The crescent chandbali silhouette, detailed with fine granulation and a delicate drop. Light enough to wear from morning rituals to midnight celebrations.",
},
{
id: "celeste-diamond-studs",
name: "Celeste Diamond Studs",
category: "Earrings",
material: "Diamond",
metalDetail: "18K White Gold · Diamonds",
price: 128000,
tag: "New",
featured: false,
image:
"https://images.pexels.com/photos/37601638/pexels-photo-37601638.jpeg?auto=compress&cs=tinysrgb&w=900",
alt: "Traditional stud earrings worn with a beaming smile",
description:
"A pair of round brilliant diamonds in four-prong settings that sit close to the ear. The first diamonds most of our clients own — and never take off.",
},
{
id: "aurora-solitaire-ring",
name: "Aurora Solitaire Ring",
category: "Rings",
material: "Diamond",
metalDetail: "18K White Gold · Diamonds",
price: 315000,
tag: "New",
featured: true,
image:
"https://images.unsplash.com/photo-1607703829739-c05b7beddf60?auto=format&fit=crop&w=900&q=80",
alt: "Aurora Solitaire diamond ring photographed on dark fabric",
description:
"A single brilliant solitaire lifted on a slender knife-edge band. Designed in-house for proposals that deserve a moment of their own.",
},
{
id: "eclat-halo-ring",
name: "Éclat Halo Ring",
category: "Rings",
material: "Diamond",
metalDetail: "18K Gold · Diamonds",
price: 198000,
tag: null,
featured: false,
image:
"https://images.unsplash.com/photo-1613945407943-59cd755fd69e?auto=format&fit=crop&w=900&q=80",
alt: "Éclat Halo diamond ring resting on deep red silk",
description:
"A radiant centre stone ringed by a micro-pavé halo that doubles its presence. A favourite for anniversaries and milestone celebrations.",
},
{
id: "noor-silver-promise-ring",
name: "Noor Silver Promise Ring",
category: "Rings",
material: "Silver",
metalDetail: "925 Sterling Silver",
price: 14600,
tag: null,
featured: false,
image:
"https://images.pexels.com/photos/9430461/pexels-photo-9430461.jpeg?auto=compress&cs=tinysrgb&w=900",
alt: "Noor silver promise ring being tried on",
description:
"A slim sterling band with a hand-set stone that catches the light quietly. Made for first rings, friendship pledges and small promises.",
},
{
id: "rajwada-kada-bangles",
name: "Rajwada Kada Bangles",
category: "Bangles",
traditional: true,
material: "Gold",
metalDetail: "22K Gold",
price: 456000,
tag: "Bridal Edit",
featured: true,
image:
"https://images.unsplash.com/photo-1758995116383-f51775896add?auto=format&fit=crop&w=900&q=80",
alt: "A stack of ornate Rajwada kada gold bangles on a dark surface",
description:
"A pair of broad 22-karat kadas with hand-carved jaali work along the edges. Worn by brides in our family for three generations of weddings.",
},
{
id: "meenakari-enamel-bangles",
name: "Meenakari Enamel Bangles",
category: "Bangles",
traditional: true,
material: "Gold",
metalDetail: "22K Gold · Enamel",
price: 174000,
tag: null,
featured: false,
image:
"https://images.unsplash.com/photo-1774978239401-7bfaff4207ee?auto=format&fit=crop&w=900&q=80",
alt: "Rows of jewelled meenakari enamel bangles in a display case",
description:
"A set of two enamel-lined bangles in festive hues, edged with fine gold work. Stack them high or let a single pair speak for itself.",
},
{
id: "shubh-silver-bangles",
name: "Shubh Silver Bangles",
category: "Bangles",
traditional: true,
material: "Silver",
metalDetail: "925 Sterling Silver",
price: 9850,
tag: null,
featured: false,
image:
"https://images.unsplash.com/photo-1721103428250-896d83207659?auto=format&fit=crop&w=900&q=80",
alt: "Shubh sterling silver bangles worn on the wrist",
description:
"Feather-light sterling bangles with a soft polished finish, made for daily wear and gifting. Traditional in spirit, minimal in form.",
},
{
id: "vivah-polki-bridal-set",
name: "Vivah Polki Bridal Set",
category: "Bridal Jewellery",
traditional: true,
material: "Gold",
metalDetail: "22K Gold · Polki",
price: 685000,
tag: "Bridal Edit",
featured: true,
image:
"https://images.unsplash.com/photo-1721807644561-9efcabee5c42?auto=format&fit=crop&w=900&q=80",
alt: "Vivah Polki bridal jewellery set arranged on a table",
description:
"A complete bridal composition — choker, long haar, jhumkas and maangtikka — set with uncut polki stones in 22-karat gold. Reserved pieces, styled together or apart.",
},
{
id: "saanjh-bridal-choker",
name: "Saanjh Bridal Choker",
category: "Bridal Jewellery",
traditional: true,
material: "Gold",
metalDetail: "22K Gold · Beads",
price: 720000,
tag: "Bridal Edit",
featured: false,
image:
"https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=80",
alt: "Saanjh bridal choker necklace with gold and coloured beads",
description:
"A close-fitting choker woven with gold beads and hand-knotted silk thread in deep jewel tones. The piece that anchors our bridal photography.",
},
{
id: "sangeet-bridal-choora",
name: "Sangeet Bridal Choora",
category: "Bridal Jewellery",
traditional: true,
material: "Gold",
metalDetail: "22K Gold",
price: 388000,
tag: "Bridal Edit",
featured: false,
image:
"https://images.unsplash.com/photo-1760786933951-ce3791011d1e?auto=format&fit=crop&w=900&q=80",
alt: "Sangeet bridal choora bangles displayed in the showroom",
description:
"A ceremonial set of wedding bangles presented in the traditional red-and-gold. Curated with the bride's family across fitting sittings before the big day.",
}, ];
