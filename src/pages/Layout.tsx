import { Outlet, Link } from "react-router-dom";
import NavbarProject from "../components/NavbarProject";

const Layout = () => {

  const navigation = {
    brand: { name: "BusinessModelling", to: "/" },
    links: [
      { name: "Customers", to: "/customers" },
      { name: "Suppliers", to: "/suppliers" },
      { name: "Stock", to: "/stock" },
      { name: "Orders", to: "/orders" },
    ]
  }

  return (
    <>
      <NavbarProject brand={navigation.brand} links={navigation.links} />

      <Outlet />
    </>
  )
};

export default Layout;