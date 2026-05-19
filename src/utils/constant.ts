import type { Filters } from "../types/components";

export const COMPANY_NAME = "Sembark";

export const fallbackImage = "/images/default-fallback-image.png";

export const initialProductData = {
  id: 0,
  title: "",
  slug: "",
  price: 0,
  description: "",
  images: [],
  category: {
    name: "",
  },
};

export const initFilters: Filters = {
  categories: [] as number[],
  price_min: undefined,
  price_max: undefined,
  title: "",
};

export const priceOptions = [
  {
    value: {
      price_min: 0,
      price_max: 50,
    },
    label: "$0 - $50",
  },

  {
    value: {
      price_min: 51,
      price_max: 100,
    },
    label: "$51 - $100",
  },

  {
    value: {
      price_min: 101,
      price_max: 200,
    },
    label: "$101 - $200",
  },

  {
    value: {
      price_min: 201,
      price_max: 500,
    },
    label: "$201 - $500",
  },

  {
    value: {
      price_min: 501,
      price_max: undefined,
    },
    label: "$501+",
  },
];
