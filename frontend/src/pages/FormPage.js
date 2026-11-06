
import { useState, useEffect } from "react";
import api from "../services/api";
import "./FormPage.css";

export default function FormPage() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    marque: "",
    modele: "",
    type: "",
    service: "Normal",
    date: "",
    heure: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Cacher le message après 4 secondes
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [message]);

  // Modifier les valeurs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Envoyer la réservation
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");

    try {
      await api.post("/reservations", formData);

      setMessage("✅ Réservation envoyée avec succès");

      setFormData({
        nom: "",
        telephone: "",
        marque: "",
        modele: "",
        type: "",
        service: "Normal",
        date: "",
        heure: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setMessage("❌ Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="reservation-page">
      <div className="reservation-card">

        <div className="reservation-header">
          <span className="reservation-badge">AUTODIAG</span>

          <h1>Réservation Diagnostic</h1>

          <p>
            Remplissez le formulaire pour réserver votre diagnostic automobile.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-grid">

            <input
              type="text"
              name="nom"
              placeholder="Nom complet"
              value={formData.nom}
              onChange={handleChange}
              required
              className="form-control"
            />

            <input
              type="tel"
              name="telephone"
              placeholder="Téléphone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="form-control"
            />

            <input
              type="text"
              name="marque"
              placeholder="Marque automobile"
              value={formData.marque}
              onChange={handleChange}
              required
              className="form-control"
            />

            <input
              type="text"
              name="modele"
              placeholder="Modèle automobile"
              value={formData.modele}
              onChange={handleChange}
              required
              className="form-control"
            />

            <input
              type="text"
              name="type"
              placeholder="Type automobile"
              value={formData.type}
              onChange={handleChange}
              required
              className="form-control"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="form-control"
            >
              <option value="Normal">Service Normal</option>
              <option value="Global">Service Global</option>
            </select>

            <div className="form-field">
              <label htmlFor="date">Date de réservation</label>
              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-field">
              <label htmlFor="heure">Heure de réservation</label>
              <input
                id="heure"
                type="time"
                name="heure"
                value={formData.heure}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

          </div>

          <button
            type="submit"
            className="reservation-submit"
            disabled={loading}
          >
            {loading ? "Envoi en cours..." : "Confirmer la réservation"}
          </button>

          {message && (
            <p
              role="status"
              className={`form-message ${
                message.startsWith("✅") ? "success" : "error"
              }`}
            >
              {message}
            </p>
          )}
        </form>

      </div>
    </main>
  );
}
