
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaClock
} from "react-icons/fa";

// بدلي هاد المعلومات بمعلومات AutoDiag الحقيقية
const phoneDisplay = "0704814328";
const phoneInternational = "0704814328";
const whatsappNumber = "0783287571";
const instagramUrl = "https://www.instagram.com/salma.sn.s/";
const instagramUsername = "salma.sn.s";
const emailAddress = "snoussisalma54à;gmail.com";

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-container">

        {/* Présentation */}
        <div className="footer-about">
          <Link to="/" className="footer-logo">
            Auto<span>Diag</span>
          </Link>

          <p>
            Votre partenaire de confiance pour le diagnostic
            et l'expertise automobile au Maroc.
          </p>

          <p>
            Un service professionnel pour vous aider à acheter
            votre véhicule en toute confiance.
          </p>
        </div>

        {/* Contact professionnel */}
        <div className="footer-contact">
          <h3>Contact professionnel</h3>

          <p>
            <FaPhoneAlt className="footer-icon" />
            <a href={`tel:${phoneInternational}`}>
              {phoneDisplay}
            </a>
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            <a href={`mailto:${emailAddress}`}>
              {emailAddress}
            </a>
          </p>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            <span>Rabat, Maroc</span>
          </p>

          <p>
            <FaClock className="footer-icon" />
            <span>Sur rendez-vous</span>
          </p>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-links">
          <h3>Suivez-nous</h3>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon instagram-icon" />
            Instagram
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="social-icon whatsapp-icon" />
            WhatsApp
          </a>

          <a href={`tel:${phoneInternational}`}>
            <FaPhoneAlt className="social-icon phone-icon" />
            Appeler AutoDiag
          </a>

          <Link to="/">Accueil</Link>

          <Link to="/reservation">Réserver un diagnostic</Link>

          <Link to="/services">Nos services</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AutoDiag.
          Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
