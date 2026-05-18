import ErrorPage from "../components/ErrorPage";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProductQuery";

const HomePage = () => {
  const { data: products = [], isLoading, isError } = useProducts();

  if (isLoading) return <Loader />;

  return isError || !products?.length ? (
    <ErrorPage message="No products found." />
  ) : (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
