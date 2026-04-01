import { Link } from "react-router-dom";
import PerceptionCanvas from "../components/PerceptionCanvas";
import { Card, PageHero, SectionHeading } from "../components/Layout";
import {
  governmentThemes,
  investorPillars,
  mockupFrames,
  opticArchitecture,
  opticWedges,
} from "../content";

function VisualPanel({ src, label, title, body }) {
  return (
    <article className="visual-panel">
      <div className="visual-panel-image">
        <img src={src} alt="" />
      </div>
      <div className="visual-panel-copy">
        <p className="panel-label">{label}</p>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}

function MockupScene({ frame }) {
  const isMission = frame.title === "Mission Control UI";
  const isDocs = frame.title === "Deck + Data Room Hub";
  const isGov = frame.title === "Government Capture Page";

  return (
    <div className="mockup-scene">
      <div className="mockup-scene-topbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="mockup-scene-body">
        <div className="mockup-scene-sidebar">
          <div className="mockup-pill active"></div>
          <div className="mockup-pill"></div>
          <div className="mockup-pill"></div>
          <div className="mockup-pill"></div>
        </div>
        <div className="mockup-scene-main">
          <div className={`mockup-main-panel ${isMission ? "mission" : ""}`}>
            <div className="mockup-lines"></div>
            {isMission ? <div className="mockup-target-box"></div> : null}
            {isGov ? <div className="mockup-timeline"></div> : null}
            {isDocs ? (
              <div className="mockup-doc-grid">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : null}
          </div>
          <div className="mockup-support-grid">
            <div className="mockup-support-card"></div>
            <div className="mockup-support-card"></div>
            <div className="mockup-support-card"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroStage() {
  return (
    <div className="stage-frame">
      <img className="stage-poster" src="/assets/mission-control.svg" alt="" />
      <PerceptionCanvas />
      <div className="scanline scanline-horizontal" aria-hidden="true"></div>
      <div className="scanline scanline-vertical" aria-hidden="true"></div>
      <div className="stage-grid" aria-hidden="true"></div>
      <div className="stage-vignette" aria-hidden="true"></div>
      <div className="hud hud-top">
        <span>OPTIC RUNTIME</span>
        <span>MISSION MODE / ACTIVE</span>
      </div>
      <div className="hud hud-bottom">
        <div>
          <span className="hud-kicker">Objects tracked</span>
          <strong>14</strong>
        </div>
        <div>
          <span className="hud-kicker">Scene confidence</span>
          <strong>96.4%</strong>
        </div>
        <div>
          <span className="hud-kicker">Sensor state</span>
          <strong>Fused</strong>
        </div>
      </div>
      <div className="floating-panel floating-panel-left">
        <p className="panel-label">Perception Output</p>
        <ul>
          <li>3D localization</li>
          <li>Behavior anomaly alerts</li>
          <li>Edge runtime telemetry</li>
        </ul>
      </div>
      <div className="floating-panel floating-panel-right">
        <p className="panel-label">Sensor Inputs</p>
        <ul>
          <li>RGB / EO-IR</li>
          <li>LiDAR / Radar</li>
          <li>Acoustic / IMU</li>
        </ul>
      </div>
    </div>
  );
}

export function OpticHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Optic.ai / Home"
        title="Perception Infrastructure for Physical AI"
        body="Optic turns sensor-rich machines into perception-capable systems with real-time fusion, anomaly intelligence, and edge deployment for defense, industrial inspection, and robotics."
        actions={
          <>
            <Link className="button button-primary" to="/optic/investor">
              View Investor Story
            </Link>
            <Link className="button button-secondary" to="/optic/government">
              Government Readiness
            </Link>
          </>
        }
        side={<HeroStage />}
      />

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Why Optic"
            title="Sensor-rich systems are still perception-poor."
          >
            <p>
              Most autonomous programs still stitch together fragmented
              pipelines, cloud dependence, and single-use models. Optic is the
              missing operating layer between raw sensing and machine action.
            </p>
          </SectionHeading>

          <div className="card-grid three-up">
            <Card>
              <span className="card-index">01</span>
              <h3>Fragmented sensing</h3>
              <p>
                Cameras, LiDAR, radar, EO/IR, and acoustics often live in
                separate toolchains with no shared scene understanding.
              </p>
            </Card>
            <Card>
              <span className="card-index">02</span>
              <h3>Weak edge autonomy</h3>
              <p>
                Cloud-heavy perception breaks in contested, disconnected, or
                safety-critical environments where machine-speed response
                matters.
              </p>
            </Card>
            <Card>
              <span className="card-index">03</span>
              <h3>No system of record for reality</h3>
              <p>
                Platforms can collect data, but they often cannot turn it into
                interoperable, actionable scene intelligence at the edge.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Wedges"
            title="One infrastructure layer. Multiple operational wedges."
          />
          <div className="card-grid three-up">
            {opticWedges.map((wedge) => (
              <Card key={wedge.title}>
                <p className="panel-label">{wedge.title}</p>
                <h3>{wedge.subtitle}</h3>
                <ul>
                  {wedge.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Visual Layer"
            title="A more cohesive marketing and product surface."
          >
            <p>
              Local signal-art and dashboard imagery now reinforce the site’s
              category claim: Optic is infrastructure, not a generic AI landing
              page.
            </p>
          </SectionHeading>

          <div className="card-grid two-up">
            <VisualPanel
              src="/assets/optic-network.svg"
              label="Platform Visual"
              title="Perception network and architecture art"
              body="A generated system map that visually reinforces Optic as a reusable infrastructure layer rather than a single feature or model."
            />
            <VisualPanel
              src="/assets/mission-control.svg"
              label="Product Visual"
              title="Mission-control dashboard art"
              body="A local interface illustration that helps the product, mockup, and deck pages feel more like a coherent software platform."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export function OpticPlatformPage() {
  return (
    <>
      <section className="section page-hero-compact">
        <div className="section-inner architecture-grid">
          <div>
            <SectionHeading
              eyebrow="Optic / Platform"
              title="A six-layer stack built for real-world machine perception."
            >
              <p>
                Optic is not a world model and not a narrow point product. It
                is the reusable perception infrastructure layer between sensors
                and downstream autonomy or operator systems.
              </p>
            </SectionHeading>

            <div className="stack-list">
              {opticArchitecture.map((item, index) => (
                <article
                  className={`stack-item ${index === 0 ? "is-active" : ""}`}
                  key={item.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="architecture-panel">
            <p className="panel-label">Optic Perception Format</p>
            <pre>
              <code>{`{
  "timestamp": 1774924200,
  "objects": [
    {
      "id": "obj_17",
      "type": "vehicle",
      "position": [12.2, -3.4, 0.8],
      "velocity": [2.3, 0.0, 0.0],
      "confidence": 0.94
    }
  ],
  "anomalies": [
    { "type": "unknown_activity", "confidence": 0.88 }
  ]
}`}</code>
            </pre>
            <p className="panel-footnote">
              Standardized outputs create interoperability across robots,
              industrial systems, and defense mission stacks.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Positioning"
            title="Optic is the perception layer. Depth remains downstream."
          >
            <p>
              Optic should own perception infrastructure: fusion, localization,
              anomaly awareness, and scene outputs. Embodied Labs explores the
              frontier; Depth, if pursued, remains separate downstream
              consequence and decision infrastructure.
            </p>
          </SectionHeading>

          <div className="compare-grid">
            <Card className="muted-card">
              <h3>World Models</h3>
              <p>Good for simulation and internal representations.</p>
              <ul>
                <li>Often centralized and compute-heavy</li>
                <li>Not optimized for dirty edge sensing</li>
                <li>Weak as deployable perception middleware</li>
              </ul>
            </Card>
            <Card className="featured-card">
              <h3>Optic</h3>
              <p>Real-time, edge-deployable perception infrastructure.</p>
              <ul>
                <li>Fusion across heterogeneous sensing</li>
                <li>Anomaly-aware scene intelligence</li>
                <li>Reusable APIs and runtime layer</li>
              </ul>
            </Card>
            <Card className="muted-card">
              <h3>Vertical Defense Products</h3>
              <p>Strong domain products, but usually closed and narrow.</p>
              <ul>
                <li>Tied to specific mission systems</li>
                <li>Less reusable across industries</li>
                <li>Limited ecosystem potential</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export function OpticDevelopersPage() {
  return (
    <>
      <section className="section page-hero-compact">
        <div className="section-inner developer-grid">
          <div>
            <SectionHeading
              eyebrow="Optic / Developers"
              title="Build on the perception layer instead of rebuilding it."
            >
              <p>
                The developer surface should feel more like mission-control
                infrastructure than a generic AI API: streams, scene outputs,
                anomaly events, and hardware-aware runtime behavior.
              </p>
            </SectionHeading>

            <div className="terminal-card">
              <div className="terminal-header">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <pre>
                <code>{`import optic

frame = camera.capture()
lidar = lidar.scan()

scene = optic.fusion.combine(frame, lidar)
objects = optic.vision.detect(scene)
alerts = optic.anomaly.check(scene)

print(objects[0].type, alerts.status)`}</code>
              </pre>
            </div>
          </div>

          <div className="developer-points">
            <VisualPanel
              src="/assets/mission-control.svg"
              label="UI Direction"
              title="A developer-facing mission control interface"
              body="Perception streams, scene graph, telemetry, simulation, and deployment surfaces all reinforce the platform posture."
            />
            <Card>
              <h3>Mission-ready APIs</h3>
              <p>
                Scene, object, anomaly, and streaming endpoints for autonomy,
                operator workflows, and external systems.
              </p>
            </Card>
            <Card>
              <h3>Hardware-aware runtime</h3>
              <p>
                Designed for drones, inspection robots, industrial systems, and
                other embedded edge deployments.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export function OpticGovernmentPage() {
  return (
    <>
      <section className="section page-hero-compact">
        <div className="section-inner split-copy">
          <div>
            <SectionHeading
              eyebrow="Optic / Government"
              title="A reusable government narrative built around perception infrastructure."
            >
              <p>
                The strongest government position for Optic is as a modular
                perception layer that ingests heterogeneous sensing, performs
                edge-deployed fusion and anomaly intelligence, and exposes
                interoperable scene understanding for autonomous systems.
              </p>
            </SectionHeading>
          </div>
          <VisualPanel
            src="/assets/optic-network.svg"
            label="Capture Visual"
            title="Lead with reusable archetypes, not one-off topic forcing."
            body="Focus on proposal shapes that snap to verified opportunities: mission-system insert, edge autonomy enabler, and detect-track-classify middleware."
          />
        </div>
      </section>

      <section className="section">
        <div className="section-inner card-grid three-up">
          {governmentThemes.map((theme) => (
            <Card key={theme.title}>
              <h3>{theme.title}</h3>
              <p>{theme.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Acquisition Fit"
            title="Where Optic is most credible."
          >
            <p>
              Use this site and document layer to support capability briefs,
              white papers, technical volumes, quad charts, and follow-on
              capture motions across SBIR, BAA, CSO, OTA, and direct pilot
              pathways.
            </p>
          </SectionHeading>

          <div className="card-grid three-up">
            <Card>
              <h3>Defense perimeter intelligence</h3>
              <p>
                Counter-UAS, ISR cueing, and force protection workflows where
                fused perception and anomaly awareness matter immediately.
              </p>
            </Card>
            <Card>
              <h3>Autonomous inspection and surveillance</h3>
              <p>
                Dual-use missions where edge deployment and modular sensing are
                as important as detection quality.
              </p>
            </Card>
            <Card>
              <h3>Sensor exploitation and fusion middleware</h3>
              <p>
                Best fit when the government funds sensing hardware but still
                needs interpretable perception and operator-grade outputs.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export function OpticInvestorPage() {
  return (
    <>
      <section className="section page-hero-compact">
        <div className="section-inner split-copy">
          <div>
            <SectionHeading
              eyebrow="Optic / Investor"
              title="A multi-billion-dollar trajectory built from wedge deployments to category ownership."
            >
              <p>
                The most credible story is not "better AI." It is runtime +
                OPF + dataset + ecosystem, beginning with operational wedges
                that prove Optic is the reusable perception layer for machines.
              </p>
            </SectionHeading>
          </div>
          <Card className="metric-column">
            <span className="metric-label">Trajectory</span>
            <strong>Wedge - Runtime - Standard - Ecosystem</strong>
            <span className="metric-detail">
              Defense and industrial deployments first, then SDK, data flywheel,
              and category control points.
            </span>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="card-grid two-up">
            <Card>
              <h3>Investor spine</h3>
              <ul>
                {investorPillars.map((pillar) => (
                  <li key={pillar}>{pillar}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3>Why this can compound</h3>
              <ul>
                <li>Sensor-rich markets keep expanding</li>
                <li>Edge autonomy needs reusable infrastructure</li>
                <li>Interoperable outputs reduce integration cost</li>
                <li>Operational deployments generate hard-to-copy data exhaust</li>
                <li>Developers build on a standard once it saves enough time</li>
              </ul>
            </Card>
          </div>

          <div className="card-grid two-up section-spacer-top">
            <VisualPanel
              src="/assets/optic-network.svg"
              label="Narrative Visual"
              title="Infrastructure and category ownership"
              body="Use architecture imagery to keep the investor story anchored on infrastructure, not on one narrow AI capability."
            />
            <VisualPanel
              src="/assets/mission-control.svg"
              label="Operating Layer"
              title="The software posture behind the market claim"
              body="A visual product surface helps investors understand why Optic can become a platform rather than a services-heavy integration story."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export function OpticMockupsPage() {
  return (
    <>
      <section className="section page-hero-compact">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Optic / Mockups"
            title="A screenshot-ready mockup layer for site, product, and data room."
          >
            <p>
              These frames are now structured to look more like real interface
              captures so you can use them in reviews, decks, and design
              handoffs.
            </p>
          </SectionHeading>

          <div className="mockup-grid">
            {mockupFrames.map((frame) => (
              <article className="mockup-frame" key={frame.title}>
                <MockupScene frame={frame} />
                <div className="mockup-body mockup-copy">
                  <p className="panel-label">{frame.label}</p>
                  <h3>{frame.title}</h3>
                  <ul>
                    {frame.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
