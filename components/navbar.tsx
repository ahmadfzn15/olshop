"use client";

import {
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { propTypesMenuProps } from "@material-tailwind/react/types/components/select";
import { propTypesInputRef } from "@material-tailwind/react/types/components/slider";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);
  const [navs, setNavs] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  const nav = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/products",
      label: "Shop",
    },
    {
      link: "/about",
      label: "About Us",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY == innerHeight) {
        setNavs(false);
      } else {
        setNavs(true);
      }
    };

    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full flex flex-col h-28">
      <nav className="h-16 px-5 flex justify-between items-center w-full bg-white">
        <h1 className="text-xl">Olshop</h1>
        <div className="flex items-center justify-end gap-1 w-full">
          <div className={`w-2/5 ${search ? "visible" : "invisible"}`}>
            <Input
              {...propTypesInputRef}
              inputRef={searchInput}
              type="search"
              label="Search"
              onBlur={() => setSearch(false)}
            />
          </div>
          <div
            className="p-2 hover:bg-black/10 rounded-xl"
            onClick={() => {
              setSearch(!search);
              searchInput.current?.focus();
            }}
          >
            <HiOutlineMagnifyingGlass className="w-6 h-6" />
          </div>
          <Link href="/cart" className="p-2 hover:bg-black/10 rounded-xl">
            <HiOutlineShoppingCart className="w-6 h-6" />
          </Link>
          <Menu>
            <MenuHandler>
              <div className="p-2 hover:bg-black/10 rounded-xl">
                <HiOutlineUser className="w-6 h-6" />
              </div>
            </MenuHandler>
            <MenuList {...propTypesMenuProps}>
              <Link href="/profile" className="hover:outline-none">
                <MenuItem {...propTypesMenuProps}>Profile</MenuItem>
              </Link>
              <Link href="/login" className="hover:outline-none">
                <MenuItem {...propTypesMenuProps}>Login</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
      </nav>
      <nav
        className={`h-12 px-5 flex justify-center items-center w-full ${
          navs ? "bg-white" : ""
        }`}
      >
        <div className="flex">
          {nav.map((d, i) => (
            <Link
              key={i}
              href={d.link}
              className={`text-black py-2 px-4 hover:bg-black/10 rounded-xl text-sm`}
            >
              {d.label}
            </Link>
          ))}
        </div>
        <HiMenu
          className={`w-10 h-10 lg:hidden transition-all ${
            drawer ? "opacity-0" : ""
          } text-white cursor-pointer`}
          onClick={() => setDrawer(!drawer)}
        />
      </nav>
      {/* <div
        className={`fixed h-screen bg-black/70 backdrop-blur-md z-50 top-0 p-5 transition-all ${
          drawer ? "right-0" : "-right-full"
        } flex flex-col items-center text-xl`}
      >
        <HiXMark
          className="w-10 h-10 text-white cursor-pointer self-end"
          onClick={() => setDrawer(!drawer)}
        />
        {nav.map((d) => (
          <Link
            href={d.link}
            className={`px-24 py-10 ${
              route == d.link ? "text-white" : "text-slate-400"
            } hover:text-white`}
            onClick={() => setDrawer(false)}
          >
            {d.label}
          </Link>
        ))}
      </div> */}
    </div>
  );
}
