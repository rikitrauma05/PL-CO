"use client";

import { FormEvent, useState } from "react";

export default function ContattiPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    // volendo qui in futuro potrai aggiungere una chiamata a una vera API
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Contatti</h1>
          <p>
            Contatta il nostro studio per maggiori informazioni, appuntamenti e
            consulenze personalizzate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div>
            <h2>Informazioni di contatto</h2>
            <p>
              <strong>Indirizzo:</strong> Via Giuseppe Garibaldi 11, 26845
              Codogno (LO)
            </p>
            <p>
              <strong>Email:</strong> info@plco.it
            </p>
            <p>
              <strong>P.IVA:</strong> 08526650968
            </p>

            <p style={{ marginTop: "0.75rem" }}>
              Puoi scriverci per richieste di consulenza, informazioni sui
              servizi o per fissare un appuntamento presso il nostro studio.
            </p>

            <p style={{ marginTop: "0.75rem" }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Giuseppe+Garibaldi+11+26845+Codogno"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Apri la sede su Google Maps
              </a>
            </p>
          </div>

          <div>
            <h2>Scrivici un messaggio</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Nome
                <input type="text" name="nome" required />
              </label>

              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                Oggetto
                <input type="text" name="oggetto" />
              </label>

              <label>
                Messaggio
                <textarea name="messaggio" rows={5} required />
              </label>

              <label style={{ fontSize: "0.85rem" }}>
                <input
                  type="checkbox"
                  style={{ marginRight: "0.4rem" }}
                  required
                />
                Dichiaro di aver letto l&apos;informativa sulla privacy e
                acconsento al trattamento dei dati personali per le finalità
                indicate.
              </label>

              <button className="btn primary" type="submit">
                Invia
              </button>

              {sent && (
                <p
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.9rem",
                    color: "#15803d",
                  }}
                >
                  Messaggio inviato correttamente. Questo è un invio di prova:
                  verremo contattati tramite i recapiti indicati.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
