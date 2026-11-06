import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

export default function Navbar() {

  const navigate = useNavigate();

  const goToSection = (id) => {

    if (window.location.pathname !== "/") {

      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if(section){
          section.scrollIntoView({ behavior: "smooth" });
        }
      },300);

    } else {

      const section = document.getElementById(id);

      if(section){
        section.scrollIntoView({ behavior: "smooth" });
      }

    }

  };

  return (

    <nav className="navbar">

      <div className="logo">
        Auto<span>Diag</span>
      </div>

      <div className="menu">

        <Link to="/">Accueil</Link>

        <button onClick={() => goToSection("services")}>
          Services
        </button>

        <button onClick={() => goToSection("contact")}>
          Contact
        </button>

      </div>

      <div className="right">

        <div className="language">

          <FaGlobe />

          <select>

            <option>FR</option>
            <option>EN</option>
            <option>AR</option>

          </select>

        </div>

        <Link className="reservation-btn" to="/reservation">
          Réserver
        </Link>

      </div>

    </nav>

  );

}