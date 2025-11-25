export default function ServiziPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Consulenza e servizi</h1>
          <p>
            Offriamo un insieme strutturato di servizi dedicati al mondo
            agricolo, alla fiscalità, al lavoro e alla gestione dei rapporti con
            l&apos;Amministrazione finanziaria.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>I nostri servizi</h2>

          <div className="card-grid card-grid-2" style={{ marginTop: "1.5rem" }}>
            <article className="card">
              <h2>Consulenza agricola</h2>
              <p>
                Lo studio è specializzato nell&apos;analisi e nell&apos;assistenza
                delle problematiche amministrative, fiscali e del lavoro legate
                al mondo agricolo. L&apos;attività si basa su un costante
                approfondimento della normativa di settore, spesso complessa e
                non sempre perfettamente allineata alle esigenze del mercato e
                all&apos;evoluzione delle tecniche produttive.
              </p>
            </article>

            <article className="card">
              <h2>Consulenza fiscale</h2>
              <p>
                Prestiamo assistenza nella predisposizione e nell&apos;invio
                delle dichiarazioni fiscali per persone fisiche, contribuenti
                minimi e forfettari, società ed enti anche non commerciali.
                Particolare attenzione è riservata alle agevolazioni tributarie,
                ai crediti d&apos;imposta, alle detrazioni e agli incentivi per
                ristrutturazioni, ricerca e sviluppo e nuove iniziative.
              </p>
            </article>

            <article className="card">
              <h2>Contenzioso tributario</h2>
              <p>
                Forniamo assistenza al contribuente durante le verifiche
                fiscali, nelle fasi di pre–contenzioso (contraddittorio,
                accertamento con adesione, reclamo e mediazione) e nei vari
                gradi di giudizio del contenzioso tributario. Seguiamo inoltre
                gli aspetti connessi alla riscossione, anche provvisoria, dei
                tributi contestati.
              </p>
            </article>

            <article className="card">
              <h2>Fatturazione elettronica</h2>
              <p>
                Supportiamo tutte le tipologie di impresa, dalla micro alla
                grande azienda, nella gestione della fatturazione elettronica
                verso la Pubblica Amministrazione, i soggetti IVA (B2B) e i
                consumatori finali (B2C). Lo studio opera anche in modalità
                digitale, accompagnando il cliente lungo l&apos;intero processo
                di emissione e gestione delle fatture.
              </p>
            </article>

            <article className="card">
              <h2>Successioni</h2>
              <p>
                Offriamo un servizio dedicato a chi necessita di assistenza dopo
                il decesso di un familiare. Gestiamo gli adempimenti connessi
                alla dichiarazione di successione per coloro che, per legge o
                per testamento, subentrano nei rapporti giuridici della persona
                deceduta.
              </p>
            </article>

            <article className="card">
              <h2>Consulenza del lavoro</h2>
              <p>
                In collaborazione con professionisti qualificati, forniamo
                consulenza in materia di diritto del lavoro, coprendo sia
                l&apos;ordinaria amministrazione del personale sia le
                problematiche relative alla gestione dei dipendenti e alle
                eventuali vertenze tra datore di lavoro e lavoratore.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                Tra i servizi rientrano: inquadramento azienda e dipendenti,
                elaborazione paghe e contributi, gestione degli adempimenti
                previdenziali e assicurativi, predisposizione dei relativi
                dichiarativi fiscali.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
