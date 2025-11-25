import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <div className="page page-home">
      {/* HERO */}
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

      {/* SERVIZI PRINCIPALI */}
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
              <h3>Operazioni straordinarie</h3>
              <p>
                Seguiamo operazioni straordinarie e processi di passaggio
                generazionale nelle aziende agricole, con attenzione alla
                continuità e alla tutela del patrimonio.
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
              <h3>Servizi specializzati</h3>
              <p>
                Proponiamo soluzioni professionali basate su ricerca,
                aggiornamento continuo e strumenti dedicati al settore agricolo.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERE PL&CO */}
      <section className="section section-alt">
        <div className="container two-columns">
          <div className="stack page-text">
            <h2>Perché scegliere PL&amp;CO</h2>
            <p>
              Mettiamo al centro le esigenze delle aziende agricole e dei
              contribuenti, con un approccio che unisce competenza tecnica,
              aggiornamento costante e attenzione alle persone.
            </p>
            <p>
              Lavoriamo per costruire relazioni di fiducia stabili, offrendo un
              punto di riferimento affidabile nei rapporti con
              l&apos;Amministrazione finanziaria, gli istituti di credito e gli
              altri interlocutori dell&apos;impresa.
            </p>
          </div>

          <div className="card-grid card-grid-2">
            <article className="card">
              <h3>Specializzazione nel settore agricolo</h3>
              <p>
                Conosciamo in profondità la normativa e le specificità del
                comparto agricolo, dalle agevolazioni fiscali alla gestione
                d&apos;impresa.
              </p>
            </article>

            <article className="card">
              <h3>Aggiornamento continuo</h3>
              <p>
                Collaboriamo con centri studi e riviste specializzate per
                garantire un supporto sempre aggiornato sulle novità normative.
              </p>
            </article>

            <article className="card">
              <h3>Assistenza completa</h3>
              <p>
                Seguiamo il cliente in modo integrato: consulenza fiscale,
                societaria, del lavoro e gestione degli adempimenti.
              </p>
            </article>

            <article className="card">
              <h3>Rapporto diretto con il cliente</h3>
              <p>
                Offriamo una relazione personalizzata, fondata sull&apos;ascolto
                e sulla comprensione delle esigenze specifiche di ogni realtà.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION FINALE */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: "center" }}>
            <h2>Hai bisogno di una consulenza?</h2>
            <p style={{ marginTop: "0.75rem", marginBottom: "1.5rem" }}>
              Contattaci per fissare un appuntamento o per richiedere maggiori
              informazioni sui servizi dedicati al settore agricolo e alla
              consulenza fiscale.
            </p>
            <a href="/contatti" className="btn primary">
              Vai alla pagina Contatti
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
