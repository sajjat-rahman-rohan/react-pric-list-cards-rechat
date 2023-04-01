import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Products",
      path: "/products",
    },
    {
      id: 5,
      name: "Services",
      path: "/services",
    },
  ];

  return (
    <nav className="bg-purple-500 mx-12">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-10 w-6  ml-4 text-gray-500" />
          ) : (
            <Bars3Icon className="h-10 w-6 ml-4 text-gray-500" />
          )}
        </span>
      </div>

      <ul
        className={`md:flex absolute md:static duration-500 pl-4  py-4 bg-purple-400 ${
          open ? "top-10" : "-top-48"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
