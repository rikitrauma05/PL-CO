export default function FilosofiaPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>La nostra filosofia</h1>
          <p>
            Una visione del Dottore Commercialista che unisce competenza
            tecnica, responsabilità e attenzione continua alle esigenze del
            cliente.
          </p>
        </div>
      </section>

      {/* Ruolo e competenze */}
      <section className="section">
        <div className="container two-columns">
          <div className="stack page-text">
            <h2>Un ruolo sempre più centrale</h2>

            <p>
              Il Dottore Commercialista del nuovo millennio svolge funzioni
              molteplici: contabile, revisore, sindaco, consulente fiscale e
              finanziario, referente per l&apos;assistenza al contribuente e
              interlocutore per aziende, istituti di credito e Amministrazione
              finanziaria.
            </p>

            <p>
              Questa complessità richiede una visione ampia dell&apos;impresa e
              la capacità di affiancare il cliente non solo negli adempimenti,
              ma anche nelle scelte strategiche.
            </p>
          </div>

          <div className="page-highlight stack">
            <h2>Competenze e responsabilità</h2>

            <p>
              L&apos;attività del commercialista richiede competenza,
              informazioni aggiornate, esperienza, strumenti adeguati e tempo
              dedicato allo studio dei casi concreti.
            </p>

            <p>
              Si tratta di una professione che comporta responsabilità
              crescenti e che deve essere esercitata con rigore, attenzione e
              senso etico, perché le soluzioni proposte incidono direttamente
              sulla vita delle imprese e delle persone.
            </p>
          </div>
        </div>
      </section>

      {/* Ricerca e innovazione */}
      <section className="section section-alt">
        <div className="container">
          <div className="stack page-text">
            <h2>Ricerca, innovazione e crescita del cliente</h2>

            <p>
              Lo studio si propone di coniugare il servizio tradizionale di
              consulenza con un approccio orientato alla ricerca,
              all&apos;innovazione e all&apos;aggiornamento professionale
              continuo.
            </p>

            <p>
              La crescita del cliente è al centro del percorso di consulenza:
              l&apos;obiettivo è offrire un servizio completo e strutturato,
              creando una vera sinergia con l&apos;impresa e accompagnandola
              nelle decisioni strategiche e nella gestione quotidiana della
              propria attività.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
