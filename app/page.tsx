import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <div className="page page-home">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>PL&amp;CO</h1>
            <p>
              Studio di dottori commercialisti e revisori legali dei conti
              specializzato nel settore agricolo, nella consulenza tributaria
              e nella gestione dei dati contabili per imprese e contribuenti.
            </p>
            <div className="hero-buttons">
              <a href="/servizi" className="btn primary">
                Consulenza e servizi
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
          <h2>Consulenza e supporto al settore agricolo</h2>
          <p className="section-intro">
            Affianchiamo aziende e professionisti con servizi mirati al mondo
            agricolo: assistenza fiscale, gestione d’impresa, analisi economica
            e finanziaria, operazioni straordinarie ed elaborazione dati
            contabili.
          </p>

          <div className="card-grid">
            <article className="card">
              <h3>Assistenza fiscale agricola</h3>
              <p>
                Supportiamo le imprese agricole nella gestione degli adempimenti
                fiscali, nell&apos;utilizzo delle agevolazioni e nella corretta
                applicazione della normativa di settore.
              </p>
            </article>

            <article className="card">
              <h3>Gestione delle aziende agricole</h3>
              <p>
                Offriamo consulenza continuativa sulla struttura aziendale,
                sull&apos;organizzazione dell&apos;attività e sulla pianificazione
                economico–finanziaria delle realtà agricole.
              </p>
            </article>

            <article className="card">
              <h3>Analisi finanziaria ed economica</h3>
              <p>
                Analizziamo dati, bilanci e indicatori per valutare la
                sostenibilità dell&apos;impresa, programmare investimenti e
                individuare margini di miglioramento.
              </p>
            </article>
          </div>

          <div className="card-grid" style={{ marginTop: "2rem" }}>
            <article className="card">
              <h3>Operazioni straordinarie e passaggio generazionale</h3>
              <p>
                Seguiamo operazioni straordinarie e processi di passaggio
                generazionale nelle aziende agricole, con particolare attenzione
                alla continuità e alla tutela del patrimonio.
              </p>
            </article>

            <article className="card">
              <h3>Elaborazione dati contabili</h3>
              <p>
                Gestiamo l&apos;elaborazione dei dati contabili e l&apos;invio
                delle dichiarazioni, offrendo un servizio strutturato e
                aggiornato alle esigenze normative.
              </p>
            </article>

            <article className="card">
              <h3>Consulenze specializzate e servizi innovativi</h3>
              <p>
                Proponiamo soluzioni professionali in costante evoluzione,
                basate su ricerca, aggiornamento continuo e strumenti dedicati
                al settore agricolo.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
