export const opticNav = [
  { label: "Home", to: "/" },
  { label: "Platform", to: "/optic/platform" },
  { label: "Developers", to: "/optic/developers" },
  { label: "Government", to: "/optic/government" },
  { label: "Investor", to: "/optic/investor" },
  { label: "Mockups", to: "/optic/mockups" },
  { label: "Documents", to: "/optic/documents" },
];

export const embodiedNav = [
  { label: "Embodied Labs", to: "/embodied-labs" },
  { label: "Programs", to: "/embodied-labs/programs" },
  { label: "Charter", to: "/embodied-labs/charter" },
  { label: "Documents", to: "/embodied-labs/documents" },
];

export const opticArchitecture = [
  {
    title: "Sensor Ingestion",
    body: "Synchronize camera, LiDAR, EO/IR, radar, acoustic, and IMU streams into one machine-readable timeline.",
  },
  {
    title: "Fusion Engine",
    body: "Align heterogeneous sensing into spatially coherent scene context instead of isolated detections.",
  },
  {
    title: "Perception Engine",
    body: "Detect, classify, track, and localize objects with reusable scene outputs for downstream systems.",
  },
  {
    title: "Anomaly Intelligence",
    body: "Flag unknown objects, abnormal behaviors, and off-nominal signatures without waiting for perfect labels.",
  },
  {
    title: "Edge Runtime",
    body: "Run perception close to the machine on embedded compute where latency, resilience, and safety matter.",
  },
  {
    title: "APIs + SDK",
    body: "Expose interoperable outputs for autonomy stacks, operators, government systems, and industrial platforms.",
  },
];

export const opticWedges = [
  {
    title: "Defense",
    subtitle: "Autonomous perimeter intelligence",
    bullets: [
      "Counter-UAS and force protection workflows",
      "Base, port, facility, and mobile ISR cueing",
      "Edge-deployed anomaly intelligence in degraded environments",
    ],
  },
  {
    title: "Industrial Inspection",
    subtitle: "Persistent machine perception for critical infrastructure",
    bullets: [
      "Leak, defect, and off-nominal activity detection",
      "Refineries, plants, utilities, pipelines, and asset corridors",
      "Lower human inspection burden with machine-speed awareness",
    ],
  },
  {
    title: "Robotics",
    subtitle: "Reusable perception runtime for autonomous machines",
    bullets: [
      "Drones, rovers, warehouse platforms, and inspection bots",
      "SDK-ready outputs instead of one-off vision pipelines",
      "Fleet-ready scene telemetry and event streams",
    ],
  },
];

export const governmentThemes = [
  {
    title: "Mission-System Insert",
    body: "Position Optic as the layer that upgrades an existing platform with fused perception, anomaly alerts, and scene outputs.",
  },
  {
    title: "Edge Autonomy Enabler",
    body: "Lead with low-latency onboard inference when bandwidth, contested environments, and disconnected operations matter.",
  },
  {
    title: "Detect-Track-Classify Middleware",
    body: "Pitch Optic as the reusable bridge between sensing hardware and operator or C2 systems.",
  },
];

export const investorPillars = [
  "Wedge markets first: defense perimeter intelligence and industrial inspection",
  "Convert deployments into reusable runtime and APIs",
  "Standardize outputs through Optic Perception Format",
  "Expand into SDK, ecosystem, and data flywheel advantages",
  "Own the perception layer while downstream consequence infrastructure stays separate from Depth",
];

export const embodiedPillars = [
  "Embodied Labs is the frontier lab and transfer engine for Optic, not the product company itself.",
  "Its role is to prototype, evaluate, and de-risk new sensing and autonomy concepts before platformization.",
  "It generates technical lead, applied research credibility, and government/non-dilutive pathways.",
  "It should remain clearly distinct from Optic and from any separate downstream decision infrastructure.",
];

export const documentCards = [
  {
    title: "Optic Investor Deck",
    type: "Deck",
    path: "/docs/optic-investor-deck.md",
    deckPath: "/decks/optic-investor",
    description: "Narrative spine, market wedge, moat, product roadmap, and billion-dollar trajectory.",
  },
  {
    title: "Optic Commercial Deck",
    type: "Deck",
    path: "/docs/optic-commercial-deck.md",
    deckPath: "/decks/optic-commercial",
    description: "Industrial inspection, enterprise platform, and buyer-facing commercial narrative.",
  },
  {
    title: "Optic Defense Deck",
    type: "Deck",
    path: "/docs/optic-defense-deck.md",
    deckPath: "/decks/optic-defense",
    description: "Force protection, counter-UAS, ISR cueing, and mission-system insertion story.",
  },
  {
    title: "Optic Government Deck",
    type: "Deck",
    path: "/docs/optic-government-deck.md",
    deckPath: "/decks/optic-government",
    description: "SBIR/BAA/OTA aligned positioning, capability statements, and acquisition fit.",
  },
  {
    title: "Data Room Index",
    type: "Index",
    path: "/docs/data-room-index.md",
    description: "Core materials checklist for investors, pilots, government capture, and diligence.",
  },
  {
    title: "Optic Capability Statement",
    type: "Capability",
    path: "/docs/optic-capability-statement.md",
    description: "One-stop capability statement for government and commercial introductions.",
  },
  {
    title: "Embodied Labs Capability Statement",
    type: "Capability",
    path: "/docs/embodied-labs-capability-statement.md",
    description: "Frontier lab charter, research posture, and transfer model for Optic.",
  },
];

export const mockupFrames = [
  {
    title: "Optic Home Hero",
    label: "Marketing",
    lines: [
      "Perception Infrastructure for Physical AI",
      "Mission-grade animated perception layer",
      "Investor + government-ready headline system",
    ],
  },
  {
    title: "Mission Control UI",
    label: "Product",
    lines: [
      "Perception streams",
      "Scene graph explorer",
      "Anomaly and track telemetry",
    ],
  },
  {
    title: "Government Capture Page",
    label: "Government",
    lines: [
      "Proposal archetypes",
      "Capability statement",
      "Acquisition-fit pathways",
    ],
  },
  {
    title: "Deck + Data Room Hub",
    label: "Documents",
    lines: [
      "Investor, commercial, defense, government decks",
      "Capability statements",
      "Data room index",
    ],
  },
];

export const deckPages = {
  "optic-investor": {
    eyebrow: "Deck / Investor",
    title: "Optic Investor Deck",
    subtitle:
      "Perception infrastructure for physical AI, built from wedge deployments into category ownership.",
    theme: "optic",
    slides: [
      {
        type: "cover",
        title: "Optic",
        kicker: "Perception Infrastructure for Physical AI",
        body:
          "A reusable operating layer that turns heterogeneous sensing into real-time scene intelligence for autonomous systems.",
        asset: "/assets/optic-network.svg",
      },
      {
        type: "bullets",
        title: "The core problem",
        bullets: [
          "Sensor-rich systems are still perception-poor",
          "Teams repeatedly rebuild fusion, localization, and anomaly logic",
          "Cloud-heavy perception breaks where latency and resilience matter",
          "There is still no standard system of record for reality",
        ],
      },
      {
        type: "columns",
        title: "Why Optic can become a platform",
        leftTitle: "What Optic owns",
        left: [
          "Sensor ingestion and synchronization",
          "Fusion engine and scene understanding",
          "Anomaly intelligence and edge runtime",
          "APIs, SDK, and interoperable outputs",
        ],
        rightTitle: "How it compounds",
        right: [
          "Deployments create reusable runtime maturity",
          "OPF standardizes outputs across use cases",
          "Developers integrate once instead of rebuilding",
          "Data exhaust strengthens platform defensibility",
        ],
      },
      {
        type: "timeline",
        title: "Trajectory",
        items: [
          "Wedge deployments in defense perimeter intelligence",
          "Industrial inspection runtime expansion",
          "SDK and developer ecosystem launch",
          "Data flywheel and category control points",
        ],
      },
      {
        type: "quote",
        title: "Category claim",
        quote:
          "Optic is not another AI feature company. It is the operating layer that gives physical AI systems machine-grade perception.",
      },
    ],
  },
  "optic-commercial": {
    eyebrow: "Deck / Commercial",
    title: "Optic Commercial Deck",
    subtitle:
      "Persistent perception for industrial operations, robotics fleets, and critical infrastructure.",
    theme: "optic",
    slides: [
      {
        type: "cover",
        title: "Optic for Industrial and Enterprise Physical AI",
        kicker: "Commercial Narrative",
        body:
          "Fuse sensing, localize anomalies, and deliver edge-ready perception for plants, corridors, facilities, and autonomous operations.",
        asset: "/assets/mission-control.svg",
      },
      {
        type: "bullets",
        title: "Commercial wedge",
        bullets: [
          "Inspection, monitoring, and anomaly detection in asset-heavy environments",
          "Lower integration cost than building a perception stack in-house",
          "Support drones, robots, fixed cameras, and mixed fleets",
          "Push intelligence closer to the machine and operator",
        ],
      },
      {
        type: "columns",
        title: "Why buyers care",
        leftTitle: "Operational outcomes",
        left: [
          "Reduced manual inspection burden",
          "Faster anomaly detection and escalation",
          "More reusable machine workflows",
        ],
        rightTitle: "Platform outcomes",
        right: [
          "Shared runtime across sites and devices",
          "API-ready telemetry for enterprise systems",
          "A path from pilot to fleet standardization",
        ],
      },
      {
        type: "timeline",
        title: "Pilot path",
        items: [
          "Target one facility or corridor",
          "Instrument one or two sensing modalities",
          "Validate anomaly, localization, and operator workflow fit",
          "Scale into multi-site runtime and telemetry rollouts",
        ],
      },
    ],
  },
  "optic-defense": {
    eyebrow: "Deck / Defense",
    title: "Optic Defense Deck",
    subtitle:
      "Detect-track-classify perception middleware for autonomous defense systems.",
    theme: "optic",
    slides: [
      {
        type: "cover",
        title: "Optic for Defense",
        kicker: "Autonomous Perimeter Intelligence",
        body:
          "A mission-system insert and edge autonomy enabler for force protection, ISR cueing, and anomaly-aware sensing.",
        asset: "/assets/mission-control.svg",
      },
      {
        type: "bullets",
        title: "Defense problem set",
        bullets: [
          "Sensor overload without shared scene understanding",
          "High false-positive burden on operators",
          "Cloud dependence in contested or degraded environments",
          "Closed vendor stacks that limit reuse across missions",
        ],
      },
      {
        type: "columns",
        title: "How Optic fits defense",
        leftTitle: "Best-fit missions",
        left: [
          "Perimeter intelligence and base protection",
          "Counter-UAS sensing and cueing",
          "Mobile ISR and autonomous patrol workflows",
        ],
        rightTitle: "Proposal posture",
        right: [
          "Mission-system insert",
          "Edge autonomy enabler",
          "Detect-track-classify middleware",
        ],
      },
      {
        type: "quote",
        title: "Positioning statement",
        quote:
          "Optic should be pitched as the reusable perception layer between heterogeneous sensing and downstream autonomy or C2 systems.",
      },
    ],
  },
  "optic-government": {
    eyebrow: "Deck / Government",
    title: "Optic Government Deck",
    subtitle:
      "A capture-ready narrative for SBIR, CSO, OTA, BAA, and pilot pathways.",
    theme: "optic",
    slides: [
      {
        type: "cover",
        title: "Government Readiness",
        kicker: "Capture Narrative",
        body:
          "Reusable perception infrastructure aligned to government problem sets around sensing, edge autonomy, anomaly detection, and operator-grade scene intelligence.",
        asset: "/assets/optic-network.svg",
      },
      {
        type: "bullets",
        title: "What to standardize",
        bullets: [
          "Capability statement",
          "5-page white paper template",
          "Phase I technical volume master template",
          "Quad chart and mission-insert visual",
        ],
      },
      {
        type: "columns",
        title: "Capture posture",
        leftTitle: "Do lead with",
        left: [
          "Perception infrastructure",
          "Edge deployment and machine-speed response",
          "Mission fit and modular integration",
          "Interoperable scene outputs",
        ],
        rightTitle: "Do not lead with",
        right: [
          "Generic AI platform language",
          "A narrow camera + LiDAR demo only",
          "A forced fit to unrelated hardware topics",
          "A world-models framing",
        ],
      },
      {
        type: "timeline",
        title: "Capture flow",
        items: [
          "Capability brief and white paper",
          "Topic or mission alignment review",
          "Technical volume adaptation",
          "Pilot, transition, and follow-on funding path",
        ],
      },
    ],
  },
};
