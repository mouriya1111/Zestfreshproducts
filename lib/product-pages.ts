import type { MirchiPriceData, MirchiProduct } from "@/lib/price-types";

export type SeoProductPage = {
  slug: string;
  title: string;
  shortTitle: string;
  productNames: string[];
  searchTitle: string;
  description: string;
  keywords: string[];
  buyerLine: string;
};

export const seoProductPages: SeoProductPage[] = [
  {
    slug: "mirchi-powder",
    title: "Mirchi Powder",
    shortTitle: "Mirchi",
    productNames: ["Guntur Sannam", "Byadgi", "Kashmiri", "Teja Chilli", "341 Mirchi", "Reshampatti"],
    searchTitle: "Mirchi powder supplier for hotels, hostels, restaurants, and bulk buyers",
    description:
      "Premium red chilli powder options with rich colour, reliable heat, and food-service friendly quality for kitchens, hotels, hostels, restaurants, retailers, and spice buyers.",
    keywords: ["mirchi powder supplier", "bulk chilli powder", "red chilli powder", "spice powder for hotels hostels restaurants"],
    buyerLine: "Best for commercial kitchens, hostels, hotels, restaurants, pickles, masala blends, and retail spice packing."
  },
  {
    slug: "haldi-powder",
    title: "Haldi Powder",
    shortTitle: "Haldi",
    productNames: ["Haldi Powder"],
    searchTitle: "Haldi powder supplier for hotels, hostels, restaurants, and bulk buyers",
    description:
      "Bright golden turmeric powder with earthy aroma and smooth fine grind for daily Indian cooking, bulk kitchens, food service, and masala blends.",
    keywords: ["haldi powder supplier", "bulk turmeric powder", "turmeric powder for restaurants", "spice powder for hotels"],
    buyerLine: "Best for curries, marinades, restaurant cooking, hostel kitchens, and spice blend preparation."
  },
  {
    slug: "coriander-powder",
    title: "Coriander Powder",
    shortTitle: "Coriander",
    productNames: ["Coriander Powder"],
    searchTitle: "Coriander powder supplier for hotels, hostels, restaurants, and bulk buyers",
    description:
      "Fresh aromatic coriander powder with balanced flavour and warm citrus notes for gravies, curries, spice blends, and food-service kitchens.",
    keywords: ["coriander powder supplier", "bulk coriander powder", "dhaniya powder supplier", "spice powder for restaurants"],
    buyerLine: "Best for curries, gravies, masala blends, hotels, hostels, restaurants, and catering kitchens."
  },
  {
    slug: "garam-masala",
    title: "Garam Masala",
    shortTitle: "Garam Masala",
    productNames: ["Garam Masala"],
    searchTitle: "Garam masala supplier for hotels, hostels, restaurants, and bulk buyers",
    description:
      "Warm aromatic garam masala blend made for rich finishing flavour, balanced aroma, and consistent kitchen use in curries, snacks, and gravies.",
    keywords: ["garam masala supplier", "bulk garam masala", "garam masala for restaurants", "spice blend supplier"],
    buyerLine: "Best for restaurant gravies, snacks, curries, catering menus, and everyday commercial kitchen use."
  },
  {
    slug: "chicken-masala",
    title: "Chicken Masala",
    shortTitle: "Chicken Masala",
    productNames: ["Chicken Masala"],
    searchTitle: "Chicken masala supplier for hotels, hostels, restaurants, and bulk buyers",
    description:
      "Bold chicken masala blend with rich curry aroma, reddish-brown colour, and consistent flavour for restaurants, hotels, hostels, and caterers.",
    keywords: ["chicken masala supplier", "bulk chicken masala", "chicken masala for restaurants", "masala powder for hotels"],
    buyerLine: "Best for chicken curry, marinades, gravies, restaurants, hotels, hostels, and catering kitchens."
  }
];

export function getSeoProductPage(slug: string) {
  return seoProductPages.find((page) => page.slug === slug);
}

export function getProductsForPage(data: MirchiPriceData, page: SeoProductPage): MirchiProduct[] {
  return data.products.filter((product) => page.productNames.includes(product.variety));
}
