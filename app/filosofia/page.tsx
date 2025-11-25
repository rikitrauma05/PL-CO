export default function FilosofiaPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>La nostra filosofia</h1>
          <p>
            {/* Qui incolleremo il sottotitolo esatto degli screen */}
            La visione e la missione che guidano PL&CO ogni giorno.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-columns">
          <div>
            <h2>Visione</h2>
            <p>
              Placeholder in attesa del testo reale: costruire un ambiente che
              valorizzi ogni persona e promuova la crescita continua.
            </p>
          </div>

          <div>
            <h2>Missione</h2>
            <p>
              Placeholder del testo missione, verrà sostituito con quello
              presente negli screenshot.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>I pilastri di PL&amp;CO</h2>

          <div className="card-grid">
            <article className="card">
              <h3>Pilastro 1</h3>
              <p>
                Testo placeholder che rappresenta uno dei valori fondamentali
                dell’azienda.
              </p>
            </article>

            <article className="card">
              <h3>Pilastro 2</h3>
              <p>
                Secondo pilastro: questo testo sarà sostituito con quello degli
                screenshot.
              </p>
            </article>

            <article className="card">
              <h3>Pilastro 3</h3>
              <p>
                Terzo pilastro presente nel vecchio sito, da incollare nella
                versione finale.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
