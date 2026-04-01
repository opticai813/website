import { Link } from "react-router-dom";
import { Card, PageHero, SectionHeading } from "../components/Layout";
import {
  embodiedFunctions,
  embodiedPillars,
  embodiedPipeline,
  embodiedResearchThemes,
} from "../content";

function EmbodiedResearchStage() {
  return (
    <div className="research-stage research-stage-advanced">
      <img className="research-stage-image" src="/assets/embodied-research.svg" alt="" />
      <div className="research-stage-grid" aria-hidden="true"></div>
      <div className="research-stage-beam" aria-hidden="true"></div>

      <div className="research-stage-header">
        <span>Embodied Labs</span>
        <strong>Simulation - Training - Validation</strong>
      </div>

      <div className="research-sim-panel">
        <div className="research-sim-panel-head">
          <span>Training Arena</span>
          <strong>Embodied Perception Loop</strong>
        </div>
        <div className="research-sim-field">
          <video
            className="research-sim-video"
            src="/media/embodied-humanoid-balance.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="research-sim-overlay" aria-hidden="true"></div>
          <div className="research-sim-axis research-sim-axis-x"></div>
          <div className="research-sim-axis research-sim-axis-y"></div>
          <div className="research-trace research-trace-primary"></div>
          <div className="research-trace research-trace-secondary"></div>

          <div className="research-target research-target-alpha">
            <span>Whole-body control</span>
          </div>
          <div className="research-target research-target-beta">
            <span>Transfer evaluation</span>
          </div>
          <div className="research-target research-target-gamma">
            <span>Contact policy</span>
          </div>
        </div>
      </div>

      <div className="research-side-stack">
        <div className="research-mini-card">
          <p>Simulation Environments</p>
          <strong>Scenario generation</strong>
          <span>Dynamic tasks, synthetic worlds, multi-agent loops</span>
        </div>
        <div className="research-mini-card">
          <p>Robot Training</p>
          <strong>Embodied evaluation</strong>
          <span>Behavior signals, active sensing, intervention logging</span>
        </div>
        <div className="research-mini-card">
          <p>Transfer Readiness</p>
          <strong>Sim-to-real validation</strong>
          <span>Benchmarks, harnesses, and deployable technical assets</span>
        </div>
      </div>

      <div className="research-transfer-rail">
        <span>Research Question</span>
        <span>Experimental System</span>
        <span>Validation</span>
        <span>Platform Transfer</span>
      </div>
    </div>
  );
}

export function EmbodiedHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Embodied Labs / Home"
        title="Frontier R&D for Embodied Perception and Machine Intelligence"
        body="Embodied Labs builds the experimental systems, evaluation frameworks, and advanced prototypes that shape the future of perception infrastructure."
        actions={
          <>
            <Link className="button button-primary" to="/embodied-labs/programs">
              Explore Research
            </Link>
            <Link className="button button-secondary" to="/embodied-labs/partner">
              Partner With the Lab
            </Link>
          </>
        }
        side={<EmbodiedResearchStage />}
      />

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Mission"
            title="Invent what production systems will need next."
          >
            <p>
              Embodied Labs exists to discover, prototype, and validate
              breakthrough approaches to sensing, fusion, runtime intelligence,
              and embodied machine perception.
            </p>
          </SectionHeading>

          <div className="card-grid four-up">
            {embodiedFunctions.map((item) => (
              <Card key={item.title}>
                <p className="panel-label">{item.title}</p>
                <p>{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner card-grid two-up">
          <Card>
            <p className="panel-label">Role Relative to Optic</p>
            <h3>Embodied Labs invents. Optic operationalizes.</h3>
            <p>
              If Optic is the production infrastructure layer, Embodied Labs is
              the frontier lab that pushes the edge of what perception systems
              can become.
            </p>
          </Card>
          <Card>
            <p className="panel-label">Why Embodied Labs Matters</p>
            <p>
              Advanced autonomy will not be built by deployment alone. It also
              requires a frontier environment where new sensing models, fusion
              methods, and evaluation systems can be invented before they are
              commercialized.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}

export function EmbodiedProgramsPage() {
  return (
    <>
      <section className="section page-hero-compact">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Embodied Labs / Research Themes"
            title="Research themes and advanced experimentation for the next generation of machine perception."
          >
            <p>
              Embodied Labs is the advanced R&D and experimentation arm aligned
              to the future of machine perception. It develops novel sensing
              concepts, fusion methods, simulation environments, evaluation
              frameworks, embodied intelligence experiments, and high-risk
              technical breakthroughs that can later transfer into production
              systems such as Optic.
            </p>
          </SectionHeading>

          <div className="card-grid four-up">
            {embodiedResearchThemes.map((theme) => (
              <Card key={theme}>
                <p>{theme}</p>
              </Card>
            ))}
          </div>

          <div className="card-grid two-up section-spacer-top">
            <Card>
              <p className="panel-label">Partner Section</p>
              <h3>A research partner for the next generation of machine perception.</h3>
              <p>
                Embodied Labs collaborates with government, defense, robotics,
                industrial, and research partners who need advanced
                experimentation, early prototypes, and technical exploration
                beyond conventional product development cycles.
              </p>
            </Card>
            <Card>
              <p className="panel-label">Manifesto</p>
              <p>
                Machines will not become truly autonomous by adding more sensors
                alone. They need new forms of embodied perception, new ways to
                interpret uncertainty, and new infrastructure for sensing,
                adaptation, and machine-world interaction.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export function EmbodiedCharterPage() {
  return (
    <>
      <section className="section page-hero-compact">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Embodied Labs / Transfer Model"
            title="Embodied Labs exists to build the future before it is obvious."
          >
            <p>
              Embodied Labs exists to explore the harder questions: how
              machines should perceive uncertain environments, how sensing
              becomes adaptive rather than static, and how scene relations,
              behavior, and anomaly signatures evolve in real time.
            </p>
          </SectionHeading>

          <div className="card-grid two-up">
            {embodiedPillars.map((item) => (
              <Card key={item}>
                <p>{item}</p>
              </Card>
            ))}
          </div>

          <div className="section-spacer-top">
            <SectionHeading
              eyebrow="How Work Moves"
              title="Lab-to-platform pipeline"
            >
              <p>
                Embodied Labs is not the product company. It is the research,
                prototyping, invention, and validation layer that turns frontier
                questions into deployable technical assets.
              </p>
            </SectionHeading>

            <div className="card-grid pipeline-grid">
              {embodiedPipeline.map((step) => (
                <Card key={step}>
                  <p>{step}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function EmbodiedPartnerPage() {
  return (
    <>
      <section className="section page-hero-compact">
        <div className="section-inner split-copy">
          <div>
            <SectionHeading
              eyebrow="Embodied Labs / Company"
              title="Partner with the lab on frontier perception research."
            >
              <p>
                Embodied Labs works with government, defense, robotics,
                industrial, and research partners who need early prototypes,
                evaluation systems, synthetic scenario design, and advanced
                technical validation beyond conventional product cycles.
              </p>
            </SectionHeading>
          </div>
          <Card className="callout-card">
            <p className="panel-label">Partner Path</p>
            <h3>Research, validate, transfer.</h3>
            <p>
              The lab is designed for bounded frontier collaborations that can
              produce transferable technical assets for partner programs or for
              future platformization inside Optic.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
