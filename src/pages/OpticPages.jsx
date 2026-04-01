import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PerceptionCanvas from "../components/PerceptionCanvas";
import { Card, PageHero, SectionHeading } from "../components/Layout";
import {
  governmentThemes,
  investorPillars,
  mockupFrames,
  opticArchitecture,
  opticCategoryComparisons,
  opticCoreCapabilities,
  opticMediaCredits,
  opticMissionStories,
  opticOperationalFlow,
  opticProofPoints,
  opticProductOutputs,
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

function MissionVideoBand({ story, index }) {
  const isReversed = index % 2 === 1;
  const bandRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const element = bandRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const total = Math.max(1, rect.height - viewportHeight);
      const travelled = clamp(-rect.top, 0, total);
      setProgress(travelled / total);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const videoScale = 1 + progress * 0.08;
  const copyOpacity = clamp(progress < 0.12 ? progress / 0.12 : progress > 0.92 ? (1 - progress) / 0.08 : 1, 0, 1);
  const copyTranslate = 30 - progress * 30;

  return (
    <article className={`mission-band mission-band-${story.overlay}`} ref={bandRef}>
      <div className="mission-band-stage">
        <div className="mission-band-media">
        <video
          className="mission-band-video"
          src={story.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/mission-control.svg"
          style={{ transform: `scale(${videoScale})` }}
        />
        <div className={`mission-band-overlay mission-band-overlay-${story.overlay}`}></div>
        <div className="mission-band-grid" aria-hidden="true"></div>
        <div className="mission-band-corners" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="mission-band-target mission-band-target-primary" aria-hidden="true"></div>
        <div className="mission-band-target mission-band-target-secondary" aria-hidden="true"></div>
        <div className="mission-band-sweep" aria-hidden="true"></div>
        <div className="mission-band-crosshair" aria-hidden="true"></div>
        <div className="mission-band-range" aria-hidden="true">
          <span>12m</span>
          <span>87m</span>
          <span>142m</span>
        </div>
        <div className="mission-band-hud">
          <span>{story.label}</span>
          <strong>OPTIC / ACTIVE</strong>
        </div>
        </div>

        <div className={`mission-band-inner ${isReversed ? "is-reversed" : ""}`}>
          <div
            className="mission-band-copy"
            style={{
              opacity: copyOpacity,
              transform: `translate3d(0, ${copyTranslate}px, 0)`,
            }}
          >
            <p className="panel-label">{story.label}</p>
            <h3>{story.title}</h3>
            <p>{story.body}</p>
            <div className="mission-chip-row">
              {story.chips.map((chip) => (
                <span className="mission-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="mission-readout-grid">
              {story.readouts.map((readout) => (
                <span className="mission-readout" key={readout}>
                  {readout}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function OpticHomePage() {
  return (
    <>
      <PageHero
        className="optic-home-hero"
        eyebrow="Optic.ai / Home"
        title="Perception Engine for Autonomony"
        body="Optic enables ingested data from drones, robots, and industrial systems to see, understand, and respond to the physical world in real time."
        backgroundVideo={{
          src: "/media/counter-uas-training.webm",
          poster: "/assets/mission-control.svg",
        }}
        actions={
          <>
            <Link className="button button-primary" to="/optic/request-demo">
              Request Demo
            </Link>
            <Link className="button button-secondary" to="/optic/developers">
              Get Developer Access
            </Link>
          </>
        }
        side={<HeroStage />}
      />

      <section className="section optic-home-overlap optic-home-overlap-first">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Why Optic"
            title="Sensor-rich systems are still perception-poor."
          >
            <p>
              Autonomous systems are surrounded by data but constrained by
              fragmented perception. Every robotics company, defense integrator,
              and industrial platform team is forced to stitch together custom
              pipelines for sensor ingest, synchronization, fusion, detection,
              anomaly handling, and runtime deployment.
            </p>
            <p>
              That approach is slow, expensive, difficult to scale, and poorly
              suited to real-world autonomy.
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

      <section className="section optic-home-overlap">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Solution"
            title="PIE is the missing perception layer."
          >
            <p>
              Optic transforms raw sensor streams into machine-ready scene
              intelligence through PIE, its Perception Infrastructure Engine.
              PIE combines synchronized ingest, cross-modal fusion,
              edge-deployed inference, anomaly intelligence, and normalized
              output schemas into a single reusable platform.
            </p>
          </SectionHeading>

          <div className="card-grid three-up">
            {opticCoreCapabilities.map((capability) => (
              <Card key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section operations-section optic-home-overlap">
        <div className="section-inner operations-intro">
          <SectionHeading
            eyebrow="Operational Use Cases"
            title="A full-width mission layer that shows Optic operating in the field."
          >
            <p>
              The middle of the homepage should feel less like a stack of cards
              and more like an operational sequence: aerial patrol, counter-UAS
              response, and live drone perception with overlays that make the
              technology legible in action.
            </p>
          </SectionHeading>

          <div className="operations-proof-grid">
            {opticProofPoints.map((point) => (
              <Card className="operations-proof-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="operations-bands">
          {opticMissionStories.map((story, index) => (
            <MissionVideoBand key={story.title} story={story} index={index} />
          ))}
        </div>

        <div className="section-inner media-credit-row">
          <p className="media-credit">Footage credits: {opticMediaCredits.join(" | ")}</p>
        </div>
      </section>

      <section className="section signal-section optic-home-overlap">
        <div className="section-inner">
          <SectionHeading
            eyebrow="What Optic Does"
            title="Ingest, fuse, understand, and act."
          >
            <p>
              Optic is not a world model, not a dashboard, and not a one-off
              computer vision stack. It is the operating layer that allows
              sensor-rich machines to perceive dynamic environments in real
              time and act on that understanding.
            </p>
          </SectionHeading>

          <div className="card-grid four-up">
            {opticOperationalFlow.map((step) => (
              <Card key={step.title}>
                <p className="panel-label">{step.title}</p>
                <p>{step.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section optic-home-overlap">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Deployments"
            title="Reusable across defense, industrial, and robotics systems."
          >
            <p>
              Rather than selling a single vertical application, Optic provides
              reusable perception infrastructure that can be embedded across
              defense, industrial, and robotics systems.
            </p>
          </SectionHeading>

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

      <section className="section optic-home-overlap">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Product Outputs"
            title="Optic turns sensor data into actionable scene intelligence."
          >
            <p>
              Outputs can feed autonomy stacks, operator systems,
              command-and-control, monitoring platforms, or downstream
              intelligence layers through normalized schemas, APIs, and runtime
              interfaces.
            </p>
          </SectionHeading>

          <div className="card-grid two-up">
            <Card>
              <p className="panel-label">Machine-Ready Outputs</p>
              <ul>
                {opticProductOutputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <p className="panel-label">Category Position</p>
              <ul>
                {opticCategoryComparisons.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}:</strong> {item.body}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="card-grid two-up section-spacer-top">
            <VisualPanel
              src="/assets/optic-network.svg"
              label="Platform Visual"
              title="The Optic Perception Stack"
              body="A reusable infrastructure layer for synchronized ingest, fusion, inference, anomaly intelligence, edge policy, and interoperable outputs."
            />
            <Card>
              <p className="panel-label">Vision</p>
              <h3>The operating layer for machines that need to perceive the world.</h3>
              <p>
                As machines become more autonomous, perception becomes
                foundational infrastructure. Optic is building that layer:
                reusable, edge-deployable, multi-modal, and interoperable.
              </p>
            </Card>
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
            eyebrow="PIE / Stack"
            title="PIE: Optic's Perception Infrastructure Engine"
          >
            <p>
              At its core, Optic ingests multi-modal sensor streams,
              synchronizes and fuses them, performs object and scene-level
              inference, detects anomalies, and exposes normalized outputs
              through APIs, SDKs, and runtime interfaces.
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
            eyebrow="Why Optic Is Different"
            title="Infrastructure for operational perception, not another isolated stack."
          >
            <p>
              Optic is reusable across platforms, missions, and sectors because
              it is built as infrastructure: multi-modal by design, deployable
              at the edge, and able to generate interoperable scene and event
              outputs for real-world systems.
            </p>
          </SectionHeading>

          <div className="compare-grid">
            <Card className="muted-card">
              <h3>Computer Vision</h3>
              <p>Computer vision detects. Optic perceives across modalities.</p>
              <ul>
                <li>Single-modality pipelines are often brittle</li>
                <li>Detections alone are not a system of record for reality</li>
                <li>Limited scene understanding and runtime orchestration</li>
              </ul>
            </Card>
            <Card className="featured-card">
              <h3>Optic</h3>
              <p>Real-time, edge-deployable perception infrastructure.</p>
              <ul>
                <li>Fusion across heterogeneous sensing</li>
                <li>Scene understanding, anomaly intelligence, and runtime policy</li>
                <li>Reusable APIs, schemas, and deployable software surfaces</li>
              </ul>
            </Card>
            <Card className="muted-card">
              <h3>World Models and Vertical Products</h3>
              <p>Important categories, but not what Optic is building.</p>
              <ul>
                <li>World models are often simulation- or policy-oriented</li>
                <li>Vertical defense products are usually closed and mission-specific</li>
                <li>Optic sits underneath as a reusable platform layer</li>
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
            eyebrow="PIE / Runtime"
            title="Build on PIE instead of rebuilding perception from scratch."
          >
            <p>
              Build on the Optic platform instead of rebuilding ingest,
              synchronization, fusion, anomaly handling, and runtime logic for
              each new machine or deployment.
            </p>
          </SectionHeading>

            <div className="terminal-card">
              <div className="terminal-header">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <pre>
                <code>{`scene = optic.fusion.combine(camera, lidar, thermal)
objects = optic.vision.detect(scene)
alerts = optic.anomaly.check(scene)
runtime = optic.runtime.optimize(scene, mission_mode="perimeter")`}</code>
              </pre>
            </div>
          </div>

          <div className="developer-points">
            <Card>
              <h3>Interoperable output schema</h3>
              <p>
                Normalized scene and event outputs can feed autonomy stacks,
                operator experiences, command systems, or downstream intelligence
                layers.
              </p>
            </Card>
            <Card>
              <h3>Runtime orchestration</h3>
              <p>
                Optimize scene understanding and mission behavior directly on
                drones, robots, and industrial systems where latency matters.
              </p>
            </Card>
            <VisualPanel
              src="/assets/mission-control.svg"
              label="UI Direction"
              title="A developer-facing mission control interface"
              body="Perception streams, scene graph, telemetry, simulation, and deployment surfaces all reinforce the platform posture."
            />
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
            eyebrow="PIE / Mission Systems"
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
            eyebrow="Optic / Trajectory"
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
            eyebrow="PIE / Interfaces"
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

export function OpticRequestDemoPage() {
  return (
    <>
      <section className="section page-hero-compact">
        <div className="section-inner split-copy">
          <div>
            <SectionHeading
              eyebrow="Optic / Company"
              title="Request a PIE platform demo."
            >
              <p>
                Review Optic's Perception Infrastructure Engine across ingest,
                fusion, anomaly intelligence, runtime orchestration, and
                mission-system outputs for defense, robotics, and industrial
                deployments.
              </p>
            </SectionHeading>
          </div>
            <Card className="callout-card">
              <p className="panel-label">Demo Focus</p>
              <h3>PIE in operational context.</h3>
              <p>
                Use this route as the handoff surface for platform reviews,
              mission-aligned demos, and partner conversations until a dedicated
              lead form is added.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
