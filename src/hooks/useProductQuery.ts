import { useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "../api/product.actions";
import type { ProductFilters } from "../types/components";
import type { Product } from "../types/product";

export const useProducts = (filters?: ProductFilters) => {
  return useQuery<Product[]>({
    queryKey: ["products", filters],
    queryFn: () => getProducts(filters),
  });
};

export const useProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};
