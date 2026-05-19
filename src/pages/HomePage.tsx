import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import { useCategories } from "../hooks/useCategoryQuery";
import { useProducts } from "../hooks/useProductQuery";
import type { Filters } from "../types/components";
import { initFilters } from "../utils/constant";
import { getFiltersFromURL } from "../utils/helpers";

const HomePage = () => {
  const { data: categories = [] } = useCategories();

  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState<Filters>(() =>
    getFiltersFromURL(searchParams),
  );

  const [searchValue, setSearchValue] = useState(
    () => getFiltersFromURL(searchParams).title,
  );

  const { data: products = [], isLoading, isError } = useProducts(filters);

  const resetFilters = () => {
    setFilters(initFilters);
    setSearchValue("");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        title: searchValue,
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        return;
      }

      if (Array.isArray(value)) {
        if (value.length) {
          params.set(key, value.join(","));
        }
        return;
      }

      params.set(key, String(value));
    });

    setSearchParams(params, {
      replace: true,
    });
  }, [filters, setSearchParams]);

  if (isLoading) return <Loader />;

  const getContent = () => {
    if (isError) {
      return <ErrorPage message="No products found." />;
    } else {
      return (
        <div className="flex w-full flex-col gap-y-8">
          <ProductFilters
            categories={categories}
            filters={filters}
            setFilters={setFilters}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            resetFilters={resetFilters}
          />

          {products?.length ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-100 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 text-center">
              <ShoppingBag size={100} className="mb-4" />

              <h2 className="text-2xl font-semibold text-gray-900">
                No Products Found
              </h2>

              <p className="mt-2 max-w-md text-sm text-gray-500">
                We couldn`t find any products matching your current filters. Try
                adjusting the search or clearing filters.
              </p>

              <button
                onClick={resetFilters}
                className="mt-6 rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      );
    }
  };

  return getContent();
};

export default HomePage;
