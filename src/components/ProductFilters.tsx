import { useMemo, useState } from "react";
import Select from "react-select";
import type {
  CategoryOption,
  PriceOption,
  ProductFiltersType,
} from "../types/components";
import { priceOptions } from "../utils/constant";

const ProductFilters = ({
  setFilters,
  filters,
  categories = [],
  setSearchValue,
  searchValue,
  resetFilters,
}: ProductFiltersType) => {
  const [showFilters, setShowFilters] = useState(false);

  const activeFiltersCount = useMemo(() => {
    return [filters.categories.length, filters.price_min, filters.title].filter(
      Boolean,
    ).length;
  }, [filters]);

  const categoryOptions = useMemo(() => {
    return categories?.map((category) => ({
      value: category.id,
      label: category.name,
    }));
  }, [categories]);

  const selectedCategoryOptions = useMemo(
    () =>
      categoryOptions.filter((option) =>
        filters.categories.includes(option.value),
      ),
    [categoryOptions, filters.categories],
  );

  const selectedPriceOption = useMemo(
    () =>
      priceOptions.find(
        (option) =>
          option.value.price_min === filters.price_min &&
          option.value.price_max === filters.price_max,
      ) || null,
    [filters.price_min, filters.price_max],
  );

  const handleCategoryChange = (selectedOptions: CategoryOption) => {
    const selectedCategories =
      selectedOptions?.map((option) => option.value) || [];

    setFilters((prev) => ({
      ...prev,
      categories: selectedCategories,
    }));
  };

  const handlePriceChange = (selectedOption: PriceOption) => {
    setFilters((prev) => ({
      ...prev,
      price_min: selectedOption?.value.price_min,
      price_max: selectedOption?.value.price_max,
    }));
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-end">
        <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm max-w-137.5 w-full">
          <div className="w-full flex flex-col items-center gap-x-10">
            <h2 className="text-lg font-semibold text-gray-900">
              Product Filters
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Filter by category, price, and product title
            </p>
          </div>

          <button
            data-testid="toggle-filters"
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            <span>{showFilters ? "Hide" : "Show"}</span>

            {activeFiltersCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-xs text-white">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          showFilters ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_220px_1fr_auto]">
            <div data-testid="category-filter">
              <label
                htmlFor="categories"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Categories
              </label>

              <Select
                id="categories"
                isMulti
                value={selectedCategoryOptions}
                onChange={handleCategoryChange}
                options={categoryOptions}
                placeholder="Select categories"
              />
            </div>

            <div data-testid="price-filter">
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Price
              </label>

              <Select
                id="price"
                value={selectedPriceOption}
                onChange={handlePriceChange}
                options={priceOptions}
                placeholder="Select price"
                isClearable
              />
            </div>

            <div>
              <label
                htmlFor="search"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Search
              </label>

              <input
                id="search"
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="h-9.5 w-full rounded-md border border-gray-300 px-3 text-sm outline-none transition focus:border-black"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="h-9.5 w-full rounded-md bg-black px-4 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
