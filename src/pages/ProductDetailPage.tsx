import { ChevronLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import ErrorPage from "../components/ErrorPage";
import Loader from "../components/Loader";
import { useCart } from "../context/cart";
import { useProduct } from "../hooks/useProductQuery";
import { fallbackImage, initialProductData } from "../utils/constant";
import { ROUTES } from "../utils/routeConstant";

const ProductDetails = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const {
    data: productData = initialProductData,
    isError,
    isLoading,
  } = useProduct(id);

  const [selectedImage, setSelectedImage] = useState(productData?.images?.[0]);

  const activeImage = useMemo(
    () => selectedImage || productData?.images?.[0],
    [selectedImage, productData?.images],
  );

  const handleAddToCart = () => {
    try {
      addToCart({
        ...productData,
        quantity: 1,
        image: productData?.images?.[0] || fallbackImage,
      });
    } catch (error) {
      console.error("error from handleAddToCart fn:", error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return isError ? (
    <ErrorPage message="No products found." />
  ) : (
    <div className="w-full flex flex-col">
      <div className="mb-4">
        <button
          onClick={() => navigate(ROUTES.HOME)}
          className="flex items-center gap-2 text-sm text-white transition hover:text-gray-400 cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <LazyLoadImage
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
                src={activeImage}
                alt={productData?.title || "Product Image"}
                className="h-125 w-full object-cover"
              />
            </div>

            <div className="mt-5 flex gap-4 overflow-x-auto">
              {productData?.images?.map((image, index) => {
                return (
                  <button
                    key={image}
                    onClick={() => setSelectedImage(image)}
                    className="overflow-hidden rounded-2xl border-2 transition"
                    style={{
                      borderColor:
                        activeImage === image ? "black" : "transparent",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="h-24 w-24 object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-3 w-fit rounded-full bg-black px-4 py-1 text-sm font-medium text-white">
              {productData?.category?.name || "Category"}
            </span>

            <h1 className="text-4xl font-bold leading-tight text-black">
              {productData?.title || "Product Title"}
            </h1>

            <p className="mt-5 text-4xl font-bold text-gray-900">
              ${productData?.price || 0}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              {productData?.description || "No description available."}
            </p>

            <div className="mt-8 space-y-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Product ID</span>

                <span className="font-medium text-black">
                  #{productData?.id || "N/A"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Slug</span>

                <span className="font-medium text-black">
                  {productData?.slug || "N/A"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Category</span>

                <span className="font-medium text-black">
                  {productData?.category?.name || "N/A"}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={handleAddToCart}
                className="rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white transition hover:bg-gray-800 cursor-pointer"
              >
                Add to Cart
              </button>

              <button
                onClick={() => toast.info("Coming Soon...!")}
                className="rounded-2xl border border-gray-300 bg-white px-8 py-4 text-sm font-medium text-gray-700 transition hover:bg-gray-100 cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
