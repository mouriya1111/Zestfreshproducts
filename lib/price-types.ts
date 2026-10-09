export type Availability = "Available" | "Limited" | "Out Of Stock";

export type MirchiProduct = {
  id: number;
  image: string;
  variety: string;
  grade: string;
  origin: string;
  unit: string;
  availability: Availability;
  updatedTime: string;
  description: string;
  forms: string[];
  highlights: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  uses: string[];
};

export type ProductDetails = {
  productName: string;
  scientificName: string;
  origin: string;
  quality: string;
  grade: string;
  packaging: string;
  shelfLife: string;
  storage: string;
  availableStock: string;
  dispatchTime: string;
  minimumOrder: string;
};

export type MirchiPriceData = {
  lastUpdated: string;
  market: string;
  company: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  productDetails: ProductDetails;
  products: MirchiProduct[];
};
