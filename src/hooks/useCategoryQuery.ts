import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/categories.actions";

export const useCategories = () => {
  return useQuery<
    {
      id: number;
      image: string;
      name: string;
      slug: string;
    }[]
  >({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
