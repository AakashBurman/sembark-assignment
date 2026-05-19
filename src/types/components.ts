export type ErrorPageProps = {
  message?: string;
  onRetry?: () => void;
};

export type Filters = {
  categories: number[];
  price_min?: number;
  price_max?: number;
  title: string;
};

export type ProductFiltersType = {
  setFilters: React.Dispatch<
    React.SetStateAction<{
      categories: number[];
      price_min?: number;
      price_max?: number;
      title: string;
    }>
  >;
  filters: {
    categories: number[];
    price_min?: number;
    price_max?: number;
    title: string;
  };
  categories: {
    id: number;
    name: string;
  }[];
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  resetFilters: () => void;
};

export type CategoryOption =
  | readonly {
      value: number;
      label: string;
    }[]
  | null;

export type PriceOption = {
  value: {
    price_min?: number;
    price_max?: number;
  };
  label: string;
} | null;

export type ProductFilters = {
  categories?: number[];
  price_min?: number;
  price_max?: number;
  title?: string;
};
