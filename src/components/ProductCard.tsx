import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import type { ProductCardProps } from "../types/product";
import { fallbackImage } from "../utils/constant";
import { ROUTES } from "../utils/routeConstant";

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`${ROUTES.PRODUCT_DETAIL}/${product.id}`);
  };

  return (
    <button
      data-testid="product-link"
      onClick={handleView}
      className="group overflow-hidden cursor-pointer rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <LazyLoadImage
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
          src={product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {product.category.name}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <p className="text-2xl font-bold text-black">${product.price}</p>

          <button
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 cursor-pointer"
            onClick={handleView}
          >
            View
          </button>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
