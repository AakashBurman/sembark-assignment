import type { ProductFilters } from "../types/components";
import axiosInstance from "./axios";

export const getProducts = async (filters?: ProductFilters) => {
  try {
    const params = new URLSearchParams();

    // TITLE
    if (filters?.title?.trim()) {
      params.append("title", filters.title.trim());
    }

    // PRICE
    if (filters?.price_min !== undefined) {
      params.append("price_min", String(filters.price_min));
    }

    if (filters?.price_max !== undefined) {
      params.append("price_max", String(filters.price_max));
    }

    // CATEGORY
    if (filters?.categories?.length) {
      params.append("categoryId", filters.categories.join(","));
    }

    const res = await axiosInstance.get(`/products?${params.toString()}`);

    return res.data;
  } catch (error) {
    console.error("error from getProducts:", error);

    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.error("error from getProductById:", error);
    return error;
  }
};
