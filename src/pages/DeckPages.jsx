import { Link, useParams } from "react-router-dom";
import { deckPages } from "../content";

function DeckSlide({ slide, index }) {
  if (slide.type === "cover") {
    return (
      <section className="deck-slide deck-cover">
        <div className="deck-cover-copy">
          <p className="eyebrow">{slide.kicker}</p>
          <h2>{slide.title}</h2>
          <p>{slide.body}</p>
        </div>
        <div className="deck-cover-visual">
          <img src={slide.asset} alt="" />
        </div>
        <div className="deck-slide-number">{String(index + 1).padStart(2, "0")}</div>
      </section>
    );
  }

  if (slide.type === "bullets") {
    return (
      <section className="deck-slide">
        <div className="deck-slide-header">
          <p className="eyebrow">Slide {String(index + 1).padStart(2, "0")}</p>
          <h2>{slide.title}</h2>
        </div>
        <ul className="deck-bullets">
          {slide.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>
    );
  }

  if (slide.type === "columns") {
    return (
      <section className="deck-slide">
        <div className="deck-slide-header">
          <p className="eyebrow">Slide {String(index + 1).padStart(2, "0")}</p>
          <h2>{slide.title}</h2>
        </div>
        <div className="deck-columns">
          <article className="deck-column-card">
            <p className="panel-label">{slide.leftTitle}</p>
            <ul>
              {slide.left.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="deck-column-card">
            <p className="panel-label">{slide.rightTitle}</p>
            <ul>
              {slide.right.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    );
  }

  if (slide.type === "timeline") {
    return (
      <section className="deck-slide">
        <div className="deck-slide-header">
          <p className="eyebrow">Slide {String(index + 1).padStart(2, "0")}</p>
          <h2>{slide.title}</h2>
        </div>
        <div className="deck-timeline">
          {slide.items.map((item, itemIndex) => (
            <div className="deck-timeline-step" key={item}>
              <span>{String(itemIndex + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (slide.type === "quote") {
    return (
      <section className="deck-slide deck-quote-slide">
        <div className="deck-slide-header">
          <p className="eyebrow">Slide {String(index + 1).padStart(2, "0")}</p>
          <h2>{slide.title}</h2>
        </div>
        <blockquote>{slide.quote}</blockquote>
      </section>
    );
  }

  return null;
}

export default function DeckPage() {
  const { slug } = useParams();
  const deck = deckPages[slug];

  if (!deck) {
    return (
      <section className="section page-hero-compact">
        <div className="section-inner">
          <h2>Deck not found.</h2>
          <Link className="button button-secondary" to="/optic/documents">
            Back to documents
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={`section page-hero-compact deck-page deck-theme-${deck.theme}`}>
      <div className="section-inner">
        <div className="deck-toolbar">
          <div>
            <p className="eyebrow">{deck.eyebrow}</p>
            <h1 className="deck-title">{deck.title}</h1>
            <p className="deck-subtitle">{deck.subtitle}</p>
          </div>
          <div className="deck-toolbar-actions">
            <button className="button button-primary" type="button" onClick={() => window.print()}>
              Print / Save PDF
            </button>
            <Link className="button button-secondary" to="/optic/documents">
              Back to documents
            </Link>
          </div>
        </div>

        <div className="deck-stack">
          {deck.slides.map((slide, index) => (
            <DeckSlide key={`${deck.title}-${index}`} index={index} slide={slide} />
          ))}
        </div>
      </div>
    </section>
  );
}
