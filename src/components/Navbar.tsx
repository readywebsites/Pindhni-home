import { useState } from "react";
import logo from "/images/logo.webp";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Women",
    "Men",
    "Accessories",
    "Our Story",
    "Journal",
    "Contact",
  ];

  return (
    <>
      <header className="sticky top-[34px] md:top-[36px] z-40 bg-white border-b border-[#ececec]">
        <div className="max-w-[1360px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_auto_1fr] items-center py-4 lg:py-5 gap-6">

            {/* Mobile Menu */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 6H21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M3 18H21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex lg:justify-start justify-center">
              <img
                src={logo}
                alt="Pindhni"
                className="w-[100px] lg:w-[115px] object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center justify-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.12em]
                    font-medium
                    text-[#202020]
                    hover:opacity-70
                    transition
                  "
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-5 justify-end">

              {/* Search */}
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20 20L17 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>

              {/* Account */}
              <button className="hidden sm:block">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 21C4 17.686 7.582 15 12 15C16.418 15 20 17.686 20 21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>

              {/* Cart */}
              <button className="relative">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 7H20L18 17H9L7 7Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7 7L6 4H3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>

                <span
                  className="
                    absolute
                    -top-2
                    -right-2
                    text-[10px]
                    bg-black
                    text-white
                    rounded-full
                    w-4
                    h-4
                    flex
                    items-center
                    justify-center
                  "
                >
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`
          fixed inset-0 z-[999]
          transition-all duration-300
          ${
            mobileMenuOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`
            absolute left-0 top-0 h-full w-full
            bg-white
            transition-transform duration-300
            ${
              mobileMenuOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >
          <div className="p-6 border-b flex justify-between items-center">
            <span className="font-medium">
              Menu
            </span>

            <button
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  uppercase
                  tracking-[0.1em]
                  text-[8px]
                "
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;