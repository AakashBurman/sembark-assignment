import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="p-20 w-full">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
