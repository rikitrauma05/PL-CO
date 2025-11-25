import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <div className="page page-home">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>PL&amp;CO</h1>
            <p>
              {/* INCOLLEREMO QUI IL TESTO PRINCIPALE PRESO DAGLI SCREEN */}
              Benvenuto su PL&CO – Il tuo spazio dedicato alla crescita, al lavoro
              e alle connessioni professionali.
            </p>
            <div className="hero-buttons">
              <a href="/servizi" className="btn primary">
                I nostri servizi
              </a>
              <a href="/chisiamo" className="btn secondary">
                Scopri chi siamo
              </a>
            </div>
          </div>

          <HeroSlider />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Cosa offriamo</h2>
          <p className="section-intro">
            {/* Qui ci andrà l’introduzione servizi del vecchio sito */}
            Scopri le opportunità e gli strumenti che PL&CO mette a tua
            disposizione.
          </p>

          <div className="card-grid">
            <article className="card">
              <h3>Servizio 1</h3>
              <p>
                Descrizione del primo servizio. Questo testo verrà sostituito con
                quello degli screenshot.
              </p>
            </article>

            <article className="card">
              <h3>Servizio 2</h3>
              <p>
                Descrizione del secondo servizio. Anche questo testo verrà
                sostituito.
              </p>
            </article>

            <article className="card">
              <h3>Servizio 3</h3>
              <p>
                Terzo servizio offerto da PL&CO, placeholder in attesa dei testi
                reali.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
