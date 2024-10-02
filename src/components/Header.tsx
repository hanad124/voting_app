import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { LuLogIn } from "react-icons/lu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/app/public/assets/logo.svg";

import { menuItems } from "@/data/menuItems";

const Header = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    if (window.scrollY > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  const handleSheetClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 left-0  z-20 py-2" w-full  border-b-[1px] border-custom_border  ${
          isVisible ? "bg-background/80" : "bg-background"
        } "
    }`}
        style={{
          backdropFilter: "saturate(180%) blur(20px)",
        }}
      >
        <div className={`max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-7}`}>
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <div className="flex items-center gap-3">
                  <Image
                    className="h-10 w-10"
                    src={logo}
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                  <span className="text-2xl font-bold text-custom_secondary tracking-wide ">
                    JUTSA
                  </span>
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => {
                  return (
                    <React.Fragment key={item.path}>
                      <Link
                        href={item.path}
                        className={` px-3 py-2 text-md font-medium  ${
                          pathname === item.path
                            ? "text-custom_primary"
                            : " text-custom_secondary hover:text-custom_primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <Button
              size={"default"}
              className="hidden md:flex gap-2 text-white bg-green-600 px-6 py-[20px] md:justify-center md:items-center tracking-wider rounded-md hover:bg-green-700"
            >
              <LuLogIn className="font-bold " />
              <Link href="/auth/login" className="">
                Login
              </Link>
            </Button>

            <div className="absolute top- right-8">
              <Sheet>
                <SheetTrigger onClick={handleSheetClose}>
                  {" "}
                  <span className=" -mr-2 md:hidden bg-[#0B63E5] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#0b62e5db] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-4">
                      <Image
                        className="h-10 w-10 flex-shrink-0 text-center "
                        src={logo}
                        alt="logo image"
                        width={30}
                        height={30}
                      />
                      <span className="text-2xl font-bold text-custom_secondary tracking-wide">
                        JUTSA
                      </span>
                    </SheetTitle>
                    <SheetDescription>
                      <span className=" flex flex-col gap-1 justify-start text-left  mt-7">
                        {menuItems.map((item) => {
                          return (
                            <React.Fragment key={item.path}>
                              <Link
                                href={item.path}
                                className={` text-custom_secondary hover:text-custom_primary px-3 py-3 rounded-md text-sm font-medium`}
                              >
                                {item.label}
                              </Link>
                            </React.Fragment>
                          );
                        })}
                        <Button variant={"default"} className="mt-5">
                          Vote Now
                        </Button>
                      </span>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
