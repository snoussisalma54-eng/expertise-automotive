import "./Service.css";

export default function Services() {
  const services = [
    {
      title: "Diagnostic Normal",
      description: "Contrôle rapide des principaux systèmes du véhicule.",
      icon: "🚗",
    },
    {
      title: "Diagnostic Global",
      description: "Analyse complète du véhicule avec rapport détaillé.",
      icon: "🔍",
    },
    {
      title: "Analyse Moteur",
      description: "Détection des anomalies et erreurs moteur.",
      icon: "⚙️",
    },
    {
      title: "Contrôle Électronique",
      description:
        "Vérification des calculateurs et systèmes électroniques.",
      icon: "💻",
    },
    {
      title: "Localisation au Maroc",
      description:
        "Recherche des centres de diagnostic automobile dans toutes les villes du Maroc.",
      icon: "📍",
    },
  ];

  return (
    <div className="services-page">
      <h1 className="services-title">Nos Services</h1>

      <p className="services-subtitle">
        Diagnostic automobile professionnel rapide et fiable
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button className="service-btn">
              Réserver
            </button>
          </div>
        ))}
      </div>

      {/* Section Localisation */}
      <div className="map-section">
        <h2>Centres de Diagnostic au Maroc</h2>

        <p className="map-description">
          Consultez la carte pour localiser les centres de diagnostic
          automobile dans les différentes villes du Maroc.
        </p>

        <iframe
          title="Carte du Maroc"
          src="https://maps.google.com/maps?q=Morocco&t=&z=6&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="500"
          style={{
            border: "0",
            borderRadius: "15px",
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}