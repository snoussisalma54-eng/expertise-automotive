import "./Home.css";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaTools,
  FaTachometerAlt,
  FaPaintRoller,
  FaCarSide,
  FaCogs
} from "react-icons/fa";
import { FaClipboardList, FaCalendarCheck } from "react-icons/fa";
export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      
      <section className="hero">

        <img
          src="/taha1.jpeg"
          alt="Diagnostic Automobile"
          className="hero-image"
        />

        <div className="hero-content">

          <h1>Diagnostic Automobile Professionnel</h1>

          <p>
            Réservez votre diagnostic rapidement et facilement en ligne.
          </p>

          <Link to="/reservation" className="btn-reservation">
            Réserver maintenant
          </Link>

        </div>

      </section>

   <section id="services" className="expertise">

  <div className="expertise-left">

    <h2>Un service d'expertise Premium</h2>

    <p className="subtitle">
      Nous intervenons directement chez vous pour diagnostiquer et expertiser
      votre véhicule avec du matériel professionnel de pointe.
    </p>

    <div className="expertise-grid">

  <div className="expertise-card">
    <FaLaptopCode className="service-icon" />
    <h3>Diagnostic électronique</h3>
    <p>Analyse complète des systèmes électroniques du véhicule.</p>
  </div>

  <div className="expertise-card">
    <FaTools className="service-icon" />
    <h3>Lecture des codes défaut</h3>
    <p>Détection et lecture des codes d'erreur avec un outil professionnel.</p>
  </div>

  <div className="expertise-card">
    <FaTachometerAlt className="service-icon" />
    <h3>Vérification du kilométrage</h3>
    <p>Contrôle de la cohérence du kilométrage du véhicule.</p>
  </div>

  <div className="expertise-card">
    <FaPaintRoller className="service-icon" />
    <h3>Vérification de la peinture</h3>
    <p>Détection des retouches et des réparations de carrosserie.</p>
  </div>

  <div className="expertise-card">
    <FaCarSide className="service-icon" />
    <h3>Vérification du châssis</h3>
    <p>Inspection de la structure pour détecter les chocs ou déformations.</p>
  </div>

  <div className="expertise-card">
    <FaCogs className="service-icon" />
    <h3>Vérification du moteur</h3>
    <p>Contrôle du fonctionnement et de l'état général du moteur.</p>
  </div>
</div>
  </div>

{/* COMMENT ÇA MARCHE */}

<section className="how-it-works">

    <h2>Comment ça marche ?</h2>

    <p className="how-subtitle">
        Réservez votre diagnostic en seulement 3 étapes simples.
    </p>

    <div className="steps">

        <div className="step-card">
            <div className="step-icon">
                <FaClipboardList />
            </div>

            <h3>Choisissez votre service</h3>

            <p>
                Sélectionnez le diagnostic adapté à vos besoins parmi nos 6 services professionnels.
            </p>
        </div>

        <div className="step-card">
            <div className="step-icon">
                <FaCalendarCheck />
            </div>

            <h3>Réservez en ligne</h3>

            <p>
                Remplissez le formulaire en moins de 2 minutes. Choisissez la date et l'heure qui vous conviennent.
            </p>
        </div>

        <div className="step-card">
            <div className="step-icon">
                <FaCarSide />
            </div>

            <h3>Notre expert vient chez vous</h3>

            <p>
                Un technicien certifié se déplace avec tout l'équipement nécessaire directement à votre domicile.
            </p>
        </div>

    </div>

</section>
  <div className="stats-box">

    <div className="stats">

      <div className="stat">
        <h3>1250+</h3>
        <p>Réservations</p>
      </div>

      <div className="stat">
        <h3>15+</h3>
        <p>Villes couvertes</p>
      </div>

      <div className="stat">
        <h3>98%</h3>
        <p>Satisfaction</p>
      </div>

      <div className="stat">
        <h3>10+</h3>
        <p>Années d'expérience</p>
      </div>

    </div>

  </div>

</section>



      {/* MAP */}
      <section className="map-section">

        <h2>Nos Centres au Maroc</h2>

        <p className="subtitle">
          Trouvez facilement le centre de diagnostic le plus proche.
        </p>

        <iframe
          title="map"
          src="https://www.google.com/maps?q=Morocco&output=embed"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </section>

     {/* =================== TÉMOIGNAGES =================== */}

<section className="testimonials">

  <h2>Ce que disent nos clients</h2>

  <p className="testimonial-subtitle">
    Découvrez les avis de nos clients satisfaits partout au Maroc.
  </p>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p className="testimonial-text">
        "Service impeccable ! L'expert est venu chez moi en 24h et a tout
        vérifié. Rapport très détaillé, je recommande vivement."
      </p>

      <h3>Ahmed B.</h3>
      <span>Casablanca</span>
    </div>

    <div className="testimonial-card">
      <p className="testimonial-text">
        "J'ai fait vérifier une voiture avant achat. L'expert a trouvé des
        problèmes cachés. Merci de m'avoir évité une mauvaise affaire !"
      </p>

      <h3>Sara M.</h3>
      <span>Rabat</span>
    </div>

    <div className="testimonial-card">
      <p className="testimonial-text">
        "Professionnalisme et ponctualité au rendez-vous. Le diagnostic
        électronique est très complet. Excellente prestation."
      </p>

      <h3>Karim T.</h3>
      <span>Marrakech</span>
    </div>

    <div className="testimonial-card">
      <p className="testimonial-text">
        "Très satisfaite du service. L'expert était très compétent et a pris
        le temps de tout m'expliquer. Rapport clair et précis."
      </p>

      <h3>Fatima Z.</h3>
      <span>Tanger</span>
    </div>

  </div>

</section>
{/* ================= CTA ================= */}

<section className="cta">

  <h2>Prêt à expertiser votre véhicule ?</h2>

  <p>
    Réservez dès maintenant et obtenez un diagnostic professionnel à domicile.
  </p>

  <Link to="/reservation" className="cta-btn">
    Réserver maintenant
  </Link>

</section>

    </div>
  );
}