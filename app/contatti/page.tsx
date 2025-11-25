export default function ContattiPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Contatti</h1>
          <p>
            {/* Sottotitolo contatti dello screenshot */}
            Siamo sempre disponibili ad ascoltarti. Contattaci per informazioni.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div>
            <h2>I nostri recapiti</h2>

            <p>
              <strong>Telefono:</strong> {/* numero dagli screen */}
              000 0000000
            </p>

            <p>
              <strong>Email:</strong> {/* email */}
              info@plco.it
            </p>

            <p>
              <strong>Indirizzo:</strong> {/* indirizzo */}
              Via Esempio 123, Città
            </p>

            <p>
              <strong>Orari:</strong> {/* orari reali */}
              Lun–Ven 9:00–18:00
            </p>
          </div>

          <div>
            <h2>Scrivici un messaggio</h2>

            <form className="contact-form">
              <label>
                Nome e cognome
                <input type="text" required />
              </label>

              <label>
                Email
                <input type="email" required />
              </label>

              <label>
                Oggetto
                <input type="text" />
              </label>

              <label>
                Messaggio
                <textarea rows={5} required />
              </label>

              <button className="btn primary" type="submit">
                Invia
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
