import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Votre message a été envoyé avec succès.");

    e.target.reset();
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Contact
      </h1>

      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <p>
          <strong>Téléphone :</strong> 06 00 00 00 00
        </p>

        <p>
          <strong>Email :</strong> contact@autodiag.ma
        </p>

        <p>
          <strong>Adresse :</strong> Rabat - Maroc
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          required
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          required
          style={inputStyle}
        />

        <textarea
          placeholder="Votre message"
          rows="5"
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            background: "#ff9800",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Envoyer
        </button>
      </form>

      {message && (
        <p
          style={{
            color: "green",
            marginTop: "20px",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};