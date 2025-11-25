export default function ServiziPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>I nostri servizi</h1>
          <p>
            {/* Intro servizi del vecchio sito verrà incollata qui */}
            Una gamma di soluzioni pensate per supportarti nel tuo percorso
            professionale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid-2">
            <article className="card">
              <h2>Servizio 1</h2>
              <p>
                Placeholder del servizio 1: sostituiremo questo testo con ciò
                che appare nel vecchio sito.
              </p>
            </article>

            <article className="card">
              <h2>Servizio 2</h2>
              <p>
                Placeholder del servizio 2: testo preso dagli screen nella
                prossima fase.
              </p>
            </article>

            <article className="card">
              <h2>Servizio 3</h2>
              <p>
                Terzo servizio offerto da PL&CO, in attesa del testo originale.
              </p>
            </article>

            <article className="card">
              <h2>Altri servizi</h2>
              <p>
                Spazio per ulteriori servizi o funzionalità presenti nel sito
                originale.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
