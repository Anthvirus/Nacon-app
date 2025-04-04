import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--Accent)] text-[var(--Primary)] py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div>
          <p className="text-[var(--Primary)] mt-2">
            123 Maritime Road, Lagos, Nigeria
          </p>
          <p className="text-[var(--Primary)]">Phone: +234 800 123 4567</p>
          <p>
            Email:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nacon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              info@nacon.com
            </a>
          </p>
        </div>

        <div>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="/services"
                className="text-[var(--Primary)] hover:underline underline-offset-4 text-md lg:text-xl"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-[var(--Primary)] hover:underline underline-offset-4 text-md lg:text-xl"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-[var(--Primary)] hover:underline underline-offset-4 text-md lg:text-xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-start space-x-4 mt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[var(--Primary)] hover:text-blue-500 text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[var(--Primary)] hover:text-pink-500 text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[var(--Primary)] hover:text-blue-600 text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-[var(--Primary)] text-sm mt-8 border-t border-[var(--Primary)] pt-4">
        &copy; {new Date().getFullYear()} Nacon Investment Limited. All Rights
        Reserved.
      </div>
    </footer>
  );
}
