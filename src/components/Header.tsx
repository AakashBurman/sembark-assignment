import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart";
import { COMPANY_NAME } from "../utils/constant";
import { ROUTES } from "../utils/routeConstant";

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold! tracking-tight text-black">
              {COMPANY_NAME}
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={ROUTES.CART}
            className="relative rounded-xl border border-gray-200 p-2 transition hover:bg-gray-100"
          >
            <ShoppingCart />
            {!!totalItems && (
              <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                {totalItems}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
