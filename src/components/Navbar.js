import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState("Home");
  const navBarLinks = [
    { title: "Home", link: "#" },
    { title: "How it Works", link: "#" },
    { title: "Solutions", link: "#" },
    { title: "Why Us?", link: "#" },
    { title: "Pricing", link: "#" },
    { title: "Blog", link: "#" },
    { title: `Help & Advice`, link: "#" },
  ];
  return (
    <>
      <header className="header-main container-header" id="top">
        <nav className="header-absolute navbar navbar-default navbar-expand-lg container-header">
          <Link className="navbar-brand" to="/">
            <img alt="" src={Logo} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <i class="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto nav-mine">
              {navBarLinks.map((item, i) => {
                return (
                  <li
                    onClick={() => setSelectedLink(item.title)}
                    key={i}
                    className="nav-item"
                  >
                    <Link
                      className={`nav-link ${
                        selectedLink === item.title && "active"
                      }`}
                      to={item.link}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              className="btn-head btn-no-bg btn-norm"
              onClick={() => console.log("Sign In")}
            >
              Sign In
            </button>
            <button
              className="btn-head btn-norm"
              onClick={() => console.log("Free Trial")}
            >
              Start Free Trial
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
