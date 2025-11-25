export default function ChiSiamoPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Chi siamo</h1>
          <p>
            Studio professionale nato a Codogno, specializzato nella consulenza
            al settore agricolo e nella gestione tributaria e societaria.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-columns">
          {/* Colonna sinistra: testo principale, stretto e leggibile */}
          <div className="stack page-text">
            <h2>La storia dello studio</h2>

            <p>
              <strong>2016</strong> – Nasce PL&amp;CO a Codogno come studio di
              dottori commercialisti e centro CAF Do.C, con un focus crescente
              sul mondo agricolo.
            </p>

            <p>
              Nel tempo lo studio sviluppa una specializzazione nella consulenza
              tributaria, societaria, giuslavoristica e di organizzazione
              aziendale, rivolta in particolare alle imprese agricole.
            </p>

            <p>
              L&apos;attività si svolge sia direttamente sia in collaborazione
              con società di servizi collegate, con l&apos;obiettivo di offrire
              un supporto completo nella gestione contabile, fiscale e
              amministrativa.
            </p>

            <p>
              Grazie all&apos;esperienza maturata nelle problematiche del
              settore agricolo, PL&amp;CO ha seguito numerose operazioni
              straordinarie e processi di passaggio generazionale, accompagnando
              le aziende in momenti chiave di riorganizzazione e sviluppo.
            </p>

            <p>
              Lo studio è inoltre <strong>centro CAF Do.C</strong>, punto di
              riferimento per l&apos;assistenza fiscale e gli adempimenti dei
              contribuenti e delle imprese.
            </p>
          </div>

          {/* Colonna destra: riquadro evidenziato */}
          <div className="page-highlight stack">
            <h2>Collaborazioni e ricerca</h2>

            <p>
              Dal <strong>2019</strong> PL&amp;CO collabora con{" "}
              <strong>SISTEMA RATIO – Centro Studi Castelli Srl</strong>, realtà
              di riferimento nell&apos;aggiornamento professionale e
              nell&apos;approfondimento dottrinale.
            </p>

            <p>
              In particolare, lo studio coordina l&apos;attività scientifica
              della rivista <strong>Ratio Agricoltura</strong> e della
              circolare settimanale <strong>Agricoltura News</strong>.
            </p>

            <ul className="list-check">
              <li>Approfondimenti tecnici dedicati alle imprese agricole</li>
              <li>Analisi delle novità normative e fiscali di settore</li>
              <li>Contenuti pensati per professionisti e operatori</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
