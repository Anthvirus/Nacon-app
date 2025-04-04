import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NaconLogo from "../assets/Nacon.jpg";
import Services from "../components/Services"

const Links = [
  { name: "About Us", url: "#" },
  { name: "Services", url: "#" },
  { name: "Tracking", url: "#" },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="min-w-full h-24 flex items-center  text-[var(--Primary)] px-4 lg:px-20 fixed top-0 z-50 justify-between lg:justify-around">
      
      <div className="lg:text-2xl tracking-wider font-extrabold cursor-pointer flex items-center gap-4">
        <img src={NaconLogo} className="size-20 lg:size-24" />
        <h1 className="hidden lg:flex">Nacon Investment Limited</h1>
      </div>

      <div className="xl:flex gap-24 hidden">
        {Links.map((Link) => (
          <ul key={Link.name} className="relative">
            <dl
              className="text-lg cursor-pointer hover:scale-110 duration-300 delay-[.5ms] hover:font-semibold"
              onMouseEnter={() => Link.name === "Services" && setShowDropdown(true)}
              onMouseLeave={() => Link.name === "Services" && setShowDropdown(false)}
            >
              <a>{Link.name}</a>

              {Link.name === "Services" && showDropdown && (
                <div className="absolute top-8 left-0 bg-[var(--Secondary)] text-black shadow-lg p-4 w-52 z-50">
                  <ul className="space-y-4 text-sm">
                    {Services.map((item) => (
                      <li key={item.name} className=" hover:scale-105">
                        <a
                          href={item.url}
                          className="hover:text-[var(--Accent)] transition-colors"
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

      <div className="xl:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? (
          <FaTimes className="text-3xl cursor-pointer text-[var(--Primary)]" />
        ) : (
          <FaBars className="text-3xl cursor-pointer text-[var(--Primary)]" />
        )}
      </div>

      <div
        className={`xl:hidden absolute top-24 left-0 w-full bg-[var(--Primary)] text-[var(--Accent)] font-semibold hover:font-bold px-6 py-4 transition-all duration-500 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-6 text-lg">
          {Links.map((Link) => (
            <li key={Link.name}>
              {Link.name === "Services" ? (
                <div>
                  <div
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <span>Services</span>
                    <span>{mobileDropdownOpen ? "−" : "+"}</span>
                  </div>

                  {mobileDropdownOpen && (
                    <ul className="pl-4 mt-2 space-y-2 text-sm text-[var(--Accent)]">
                      {Services.map((item) => (
                        <li key={item.name}>
                          <a href={item.url} className="hover:text-[var-(--Accent)]">
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
