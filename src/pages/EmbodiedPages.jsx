import { Link } from "react-router-dom";
import { Card, PageHero, SectionHeading } from "../components/Layout";
import { embodiedPillars } from "../content";

export function EmbodiedHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Embodied Labs / Home"
        title="A frontier lab for Optic, not a duplicate of it."
        body="Embodied Labs is the exploration and transfer engine around physical AI, perception, autonomy, and evaluation. It should generate technical lead and mission insight, then move reusable infrastructure into Optic."
        actions={
          <>
            <Link className="button button-primary" to="/embodied-labs/charter">
              View Charter
            </Link>
            <Link className="button button-secondary" to="/embodied-labs/documents">
              Open Documents
            </Link>
          </>
        }
        side={
          <div className="research-stage">
            <img className="research-stage-image" src="/assets/embodied-research.svg" alt="" />
            <div className="research-orbit"></div>
            <div className="research-orbit research-orbit-alt"></div>
            <div className="research-core">
              <span>Frontier Lab</span>
              <strong>Embodied</strong>
            </div>
          </div>
        }
      />

      <section className="section">
        <div className="section-inner card-grid two-up">
          {embodiedPillars.slice(0, 2).map((item) => (
            <Card key={item}>
              <h3>{item.split(".")[0]}</h3>
              <p>{item}</p>
            </Card>
          ))}
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
            eyebrow="Embodied Labs / Programs"
            title="Programs should de-risk the future, not blur the brand."
          >
            <p>
              The lab should run bounded programs that produce prototypes,
              evaluation harnesses, synthetic or real-world testbeds, and
              transfer packages for Optic. It should not become a shadow product
              company.
            </p>
          </SectionHeading>

          <div className="card-grid three-up">
            <Card>
              <p className="panel-label">Program 01</p>
              <h3>Embodied evaluation systems</h3>
              <p>
                Build task environments, robotics eval loops, and anomaly
                assessment frameworks that harden Optic’s eventual runtime.
              </p>
            </Card>
            <Card>
              <p className="panel-label">Program 02</p>
              <h3>Sensing and autonomy prototypes</h3>
              <p>
                Prototype advanced sensing stacks, multi-agent flows, and new
                machine interaction paradigms before platformization.
              </p>
            </Card>
            <Card>
              <p className="panel-label">Program 03</p>
              <h3>Non-dilutive research pathways</h3>
              <p>
                Use the lab posture for grants, pilots, partnerships, and
                frontier collaborations that feed Optic’s core product lead.
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
            eyebrow="Embodied Labs / Charter"
            title="Embodied Labs should remain a frontier lab and transfer engine."
          >
            <p>
              Optic is the infrastructure company. Embodied Labs is the frontier
              lab. Depth stays separate as downstream consequence infrastructure.
              Keeping those boundaries crisp will strengthen fundraising,
              government positioning, and product coherence.
            </p>
          </SectionHeading>

          <div className="card-grid two-up">
            {embodiedPillars.map((item) => (
              <Card key={item}>
                <p>{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
