import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer(props) {
  var PhoneNo = "+2348033163492"; //Phone Number

  return (
    <footer className="w-full bg-[var(--Default)] text-[var(--Primary)] py-8 px-6" ref={props.footerRef}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div>
          <p className="text-[var(--Primary)] mt-2">
            24 Randle Road Apapa Lagos, Nigeria
          </p>
          <p className="text-[var(--Primary)]">Phone: {PhoneNo}</p>
          <p>
            Email:{" "}
            <Link
              to="https://mail.google.com/mail/?view=cm&fs=1&to=naconinvestmentltd@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              naconinvestmentltd@gmail.com
            </Link>
          </p>
        </div>

        <div>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                to="/services"
                className="text-[var(--Primary)] hover:underline underline-offset-4 text-md lg:text-xl"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[var(--Primary)] hover:underline underline-offset-4 text-md lg:text-xl"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-start space-x-4 mt-3">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[var(--Primary)] hover:text-blue-500 text-2xl" />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[var(--Primary)] hover:text-pink-500 text-2xl" />
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[var(--Primary)] hover:text-blue-600 text-2xl" />
            </Link>
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
