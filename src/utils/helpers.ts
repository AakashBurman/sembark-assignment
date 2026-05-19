import type { Filters } from "../types/components";

export const getFiltersFromURL = (searchParams: URLSearchParams): Filters => {
  return {
    categories: searchParams.get("categories")?.split(",").map(Number) || [],

    price_min: searchParams.get("price_min")
      ? Number(searchParams.get("price_min"))
      : undefined,

    price_max: searchParams.get("price_max")
      ? Number(searchParams.get("price_max"))
      : undefined,

    title: searchParams.get("title") || "",
  };
};
