"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import Dropdown from "../Ui/LanguageDropdown";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/types/language";

interface LanguageOption {
  id: string;
  icon: React.ReactNode;
}

const languageOptions = [
  {
    icon: (
      <Image
        src="/images/flags/english-flag.svg"
        alt="English"
        width={24}
        height={20}
        className="h-5 w-6"
      />
    ),
    id: "en",
  },
  {
    icon: (
      <Image
        src="/images/flags/vn-flag.png"
        alt="Vietnam"
        width={24}
        height={20}
        className="h-5 w-6"
      />
    ),
    id: "vn",
  },
] as LanguageOption[];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { t, currentLanguage, changeLanguage } = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [localLanguage, setLocalLanguage] = useState<
    LanguageOption | undefined
  >(languageOptions.find((l) => l.id === currentLanguage));
  const [openIndex, setOpenIndex] = useState(-1);
  const usePathName = usePathname();

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleChangeLanguage = (v: LanguageOption) => {
    changeLanguage(v.id as Language);
    setLocalLanguage(v);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  useEffect(() => {
    if (currentLanguage) {
      setLocalLanguage(languageOptions.find((l) => l.id === currentLanguage));
    }
  }, [currentLanguage]);

  const isPathInMenu = menuData.some(
    (menuItem) => menuItem.path === usePathName,
  );

  const isActiveRoute = (menuPath) => {
    if (!menuPath) return false;

    // Exact match
    if (usePathName === menuPath) return true;

    // Check if current path starts with menu path (for child routes)
    // e.g., /products/3 should match /products
    return usePathName.startsWith(menuPath + "/");
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex h-[80px] w-full items-center ${
          sticky
            ? "!bg-opacity-80 shadow-sticky dark:bg-gray-dark dark:shadow-sticky-dark fixed z-9999 bg-white backdrop-blur-xs transition"
            : "absolute bg-transparent"
        } ${!sticky && isPathInMenu ? "" : "border-b"}`}
        onMouseEnter={() => setSticky(true)}
        onMouseLeave={() => setSticky(false)}
      >
        <div className="h-full w-full">
          <div className="relative flex h-full items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link href="/" className={`header-logo block w-full`}>
                {/* logo_farm_white_text.png */}
                {!sticky ? (
                  !sticky && !isPathInMenu ? (
                    <div className="h-[50px] w-[100px]">
                      <Image
                        src="/images/logo/logo-xanh.png"
                        alt="logo"
                        width={140}
                        height={20}
                        className="w-full"
                      />
                    </div>
                  ) : (
                    <div className="h-[50px] w-[100px]">
                      <Image
                        src="/images/logo/logo.png"
                        alt="logo"
                        width={140}
                        height={20}
                        className="w-full"
                      />
                    </div>
                  )
                ) : (
                  <Image
                    src="/images/logo/logo_with_name.png"
                    alt="logo"
                    width={140}
                    height={20}
                    className="w-full"
                  />
                )}
              </Link>
            </div>
            <div className="flex h-full w-full items-center justify-center space-x-8">
              <div className="h-full">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    } ${sticky ? "bg-black" : "bg-white"}`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? "opacity-0" : " "
                    } ${sticky ? "bg-black" : "bg-white"}`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    } ${sticky ? "bg-black" : "bg-white"}`}
                  />
                </button>
                <div className="absolute top-6 right-20 sm:block lg:hidden">
                  <Dropdown
                    items={languageOptions}
                    value={localLanguage}
                    onSelectValue={handleChangeLanguage}
                  />
                </div>

                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent! lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] h-full opacity-0"
                  }`}
                >
                  <ul className={`block h-full lg:flex`}>
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`hover:text-primary hover:border-b-primary flex h-full w-[150px] items-center justify-center text-base text-[18px] hover:border-b hover:border-b-2 lg:mr-0 lg:inline-flex lg:px-0 ${
                              usePathName === menuItem.path &&
                              "text-primary border-b-2"
                            } ${!sticky && isPathInMenu ? "border-b-white text-white" : ""} ${navbarOpen ? "py-5" : ""}`}
                          >
                            {t(`navigation.${menuItem.title}`)}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-dark relative top-full left-0 rounded-xs bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex hidden items-center justify-end pr-5 lg:block lg:pr-0">
                <div>
                  <Dropdown
                    items={languageOptions}
                    value={localLanguage}
                    onSelectValue={handleChangeLanguage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
