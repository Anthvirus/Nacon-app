import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NaconLogo from "../assets/Nacon.png";
import Services from "../components/Services";
import { FaChevronDown } from "react-icons/fa";

const Links = [
  { name: "Home", url: "#" },
  { name: "About Us", url: "#" },
  { name: "Services", url: "#" },
  { name: "Cargo Status", url: "#" },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="min-w-full h-24 flex items-center px-4 lg:px-20 fixed top-0 z-50 justify-between xl:justify-around">
      <div className="lg:text-2xl tracking-wider font-extrabold cursor-pointer flex items-center gap-4">
        <img src={NaconLogo} className="size-32" />
        <h1 className="hidden lg:flex uppercase text-[var(--Accent)] font-extrabold">Nacon Investment</h1>
      </div>

      <div className="xl:flex gap-24 hidden">
        {Links.map((Link) => (
          <ul key={Link.name} className="relative">
            <dl
              className="text-lg cursor-pointer items-center flex gap-4 font-semibold text-[var(--Accent)] duration-500 delay-[2.5ms]"
              onMouseEnter={() =>
                Link.name === "Services" && setShowDropdown(true)
              }
              onMouseLeave={() =>
                Link.name === "Services" && setShowDropdown(false)
              }
            >
              <a className="hover:opacity-60">{Link.name}</a>
              {Link.name === "Services" && (
                <FaChevronDown className="ml-1 inline-block" />
              )}
              {Link.name === "Services" && showDropdown && (
                <div className="absolute top-8 left-0 bg-[var(--Secondary)] text-[var(--Accent)] w-72 z-50">
                  <ul className="text-sm flex flex-col">
                    {Services.map((item) => (
                      <li key={item.name} className=" hover:bg-[var(--Accent)] hover:text-[var(--Secondary)] p-4">
                        <a
                          href={item.url}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </dl>
          </ul>
        ))}
      </div>

      <div
        className="xl:hidden z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <FaTimes className="text-3xl cursor-pointer text-[var(--Default)] invert-25" />
        ) : (
          <FaBars className="text-3xl cursor-pointer text-[var(--Default)] invert-25" />
        )}
      </div>

      <div
        className={`xl:hidden absolute top-24 left-0 w-full bg-[var(--NavSecondary)] text-[var(--Accent)] font-semibold hover:font-bold px-6 py-4 transition-all duration-500 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col text-lg">
          {Links.map((Link) => (
            <li key={Link.name} className="p-3 hover:opacity-80 cursor-pointer">
              {Link.name === "Services" ? (
                <div>
                  <div
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <span>Services</span>
                    <span>
                      <FaChevronDown className={mobileDropdownOpen ? "rotate-180" : "rotate-0"} />
                    </span>
                  </div>

                  {mobileDropdownOpen && (
                    <ul className="mt-2 text-sm text-[var(--Accent)] flex flex-col">
                      {Services.map((item) => (
                        <li key={item.name} className="p-3 hover:text-[var(--Secondary)] hover:bg-[var(--Accent)] cursor-pointer">
                          <a
                            href={item.url}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a href={Link.url} className="hover:text-[var(--Accent)] block">
                  {Link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
