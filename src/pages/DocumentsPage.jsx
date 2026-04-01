import { Link, useLocation } from "react-router-dom";
import { Card, SectionHeading } from "../components/Layout";
import { documentCards } from "../content";

export default function DocumentsPage() {
  const location = useLocation();
  const embodied = location.pathname.startsWith("/embodied-labs");

  return (
    <>
      <section className="section page-hero-compact">
        <div className="section-inner split-copy">
          <div>
            <SectionHeading
              eyebrow={embodied ? "Embodied Labs / Briefing Room" : "Optic / Briefing Room"}
              title="Decks, capability statements, and briefing materials."
            >
              <p>
                This hub now supports both source documents and slide-ready
                deck pages. The markdown files remain editable in
                <code> public/docs</code>, while the in-app deck routes are
                designed for presentation and browser PDF export.
              </p>
            </SectionHeading>
          </div>
          <Card className="callout-card">
            <p className="panel-label">How to use</p>
            <h3>Open the deck page, then print to PDF.</h3>
            <p>
              Each deck route is styled as a presentation with full-slide
              sections and print-friendly page breaks, so you can export clean
              PDFs directly from the browser.
            </p>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="card-grid three-up">
            {documentCards.map((doc) => (
              <Card key={doc.title}>
                <p className="panel-label">{doc.type}</p>
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>
                <div className="document-card-actions">
                  {doc.deckPath ? (
                    <Link className="button button-primary" to={doc.deckPath}>
                      Open Deck
                    </Link>
                  ) : null}
                  <a
                    className="button button-secondary"
                    href={doc.path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Source
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
