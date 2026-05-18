import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "sonner";
import { useCart } from "../context/cart";
import { fallbackImage } from "../utils/constant";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routeConstant";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item?.price || 0) * (item?.quantity || 0);
  }, 0);

  if (!cartItems?.length) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-black">Your cart is empty</h1>

        <p className="mt-3 text-gray-500">
          Looks like you haven’t added anything yet.
        </p>

        <Link
          to={ROUTES.HOME}
          className="mt-6 rounded-2xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="mb-8 mt-0! text-4xl font-bold text-black">
        Shopping Cart
      </h1>

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_400px]">
        <div>
          <div className="space-y-5">
            {cartItems?.map((item) => (
              <div
                key={item?.id}
                className="group relative flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row"
              >
                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart?.(item?.id)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-red-200 bg-white text-lg text-red-500 opacity-0 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-red-50 group-hover:opacity-100"
                >
                  ✕
                </button>
                <div className="h-40 w-full overflow-hidden rounded-2xl bg-gray-100 sm:w-40">
                  <LazyLoadImage
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                    src={item?.image || fallbackImage}
                    alt={item?.title || "Product"}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                      {item?.category?.name || "Category"}
                    </span>

                    <h2 className="mt-3 text-2xl font-semibold text-black">
                      {item?.title || "Untitled Product"}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                      {item?.description || "No description available."}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2">
                      <span className="text-sm font-medium text-gray-500">
                        Quantity
                      </span>

                      <span className="rounded-lg bg-black px-3 py-1 text-sm font-semibold text-white">
                        {item?.quantity || 0}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Price */}
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Price</p>

                        <p className="text-2xl font-bold text-black">
                          ${(item?.price || 0) * (item?.quantity || 0)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="h-fit rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-black">Order Summary</h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Items</span>

              <span className="font-medium text-black">
                {cartItems?.length || 0}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">Subtotal</span>

              <span className="font-medium text-black">${totalPrice}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">Shipping</span>

              <span className="font-medium text-black">Free</span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-black">Total</span>

                <span className="text-3xl font-bold text-black">
                  ${totalPrice}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => toast.info("Coming Soon...!")}
            className="mt-8 w-full rounded-2xl bg-black py-4 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
