export const opticNav = [
  { label: "Overview", to: "/" },
  {
    label: "PIE",
    description: "Perception Infrastructure Engine",
    mark: "π",
    items: [
      {
        label: "Stack",
        to: "/optic/platform",
        description: "Architecture, ingest, fusion, anomaly intelligence, and output schemas.",
      },
      {
        label: "Runtime",
        to: "/optic/developers",
        description: "Edge orchestration, SDK surfaces, and deployment behavior.",
      },
      {
        label: "Mission Systems",
        to: "/optic/government",
        description: "Defense, government, and mission-insert positioning.",
      },
      {
        label: "Interfaces",
        to: "/optic/mockups",
        description: "Product surfaces, operator views, and system interaction layers.",
      },
    ],
  },
  {
    label: "Company",
    description: "Narrative, materials, and engagement",
    items: [
      {
        label: "Briefing Room",
        to: "/optic/documents",
        description: "Decks, capability statements, and data room materials.",
      },
      {
        label: "Trajectory",
        to: "/optic/investor",
        description: "Category story, market expansion, and platform growth path.",
      },
      {
        label: "Request Demo",
        to: "/optic/request-demo",
        description: "Start a platform review or mission-focused demo conversation.",
      },
    ],
  },
];

export const embodiedNav = [
  { label: "Overview", to: "/embodied-labs" },
  {
    label: "Frontier Lab",
    description: "Research, validation, and transfer",
    items: [
      {
        label: "Research Themes",
        to: "/embodied-labs/programs",
        description: "Frontier perception R&D, adaptive sensing, and evaluation systems.",
      },
      {
        label: "Transfer Model",
        to: "/embodied-labs/charter",
        description: "How Embodied Labs moves validated breakthroughs into deployable systems.",
      },
    ],
  },
  {
    label: "Company",
    description: "Materials and collaboration",
    items: [
      {
        label: "Briefing Room",
        to: "/embodied-labs/documents",
        description: "Capability statements and supporting documents.",
      },
      {
        label: "Partner With the Lab",
        to: "/embodied-labs/partner",
        description: "Explore frontier research, technical validation, and prototype collaboration.",
      },
    ],
  },
];

export const opticArchitecture = [
  {
    title: "Sensor ingest layer",
    body: "Ingest camera, LiDAR, EO/IR, acoustic, radar, IMU, and other sensor streams into one operational pipeline.",
  },
  {
    title: "Synchronization and normalization",
    body: "Align timestamps, normalize formats, and prepare heterogeneous data streams for cross-modal understanding.",
  },
  {
    title: "Fusion engine",
    body: "Perform temporal and spatial fusion across modalities so sensors become one coherent scene rather than isolated feeds.",
  },
  {
    title: "Perception engine",
    body: "Detect, classify, track, and localize objects, trajectories, scene relations, and environment state.",
  },
  {
    title: "Anomaly intelligence",
    body: "Detect abnormal objects, behaviors, signatures, and off-nominal conditions without waiting for perfect labels.",
  },
  {
    title: "Edge runtime policy engine",
    body: "Deploy low-latency inference, runtime optimization, and mission-aware policies directly on operational hardware.",
  },
  {
    title: "Output interface, API, and schema",
    body: "Expose normalized scene and event outputs for autonomy stacks, command-and-control, monitoring systems, and SDK integrations.",
  },
];

export const opticCoreCapabilities = [
  {
    title: "Multi-modal sensor fusion",
    body: "Fuse camera, LiDAR, EO/IR, acoustic, radar, IMU, and other modalities into one operational perception layer.",
  },
  {
    title: "Object detection and tracking",
    body: "Understand entities, trajectories, relations, and environment context instead of emitting isolated detections.",
  },
  {
    title: "Anomaly and threat detection",
    body: "Surface unknown objects, abnormal behaviors, and mission-relevant signatures in real time.",
  },
  {
    title: "Edge runtime orchestration",
    body: "Run perception at low latency on drones, robots, and industrial systems where resilience matters.",
  },
  {
    title: "Adaptive sensing and feedback",
    body: "Support sensing strategies and runtime optimization that respond to environment state and mission mode.",
  },
  {
    title: "Interoperable output schema and APIs",
    body: "Generate normalized outputs that can feed autonomy, operators, command systems, or downstream intelligence layers.",
  },
];

export const opticOperationalFlow = [
  {
    title: "Ingest",
    body: "Camera, LiDAR, EO/IR, acoustic, radar, IMU, and other sensor inputs.",
  },
  {
    title: "Fuse",
    body: "Temporal and spatial alignment across heterogeneous data streams.",
  },
  {
    title: "Understand",
    body: "Objects, trajectories, scene relations, anomalies, and environment state.",
  },
  {
    title: "Act",
    body: "Generate alerts, directives, runtime policies, and machine-consumable outputs.",
  },
];

export const opticCategoryComparisons = [
  {
    title: "Not just computer vision",
    body: "Computer vision detects. Optic perceives across modalities and produces machine-ready scene understanding.",
  },
  {
    title: "Not just world models",
    body: "World models are often simulation- or policy-oriented. Optic is real-time perception infrastructure for operational systems.",
  },
  {
    title: "Not just a vertical defense product",
    body: "Optic is a reusable platform layer that can be embedded across missions, programs, and sectors.",
  },
];

export const opticProductOutputs = [
  "Object identity",
  "Confidence",
  "3D position",
  "Velocity",
  "Relation to other objects",
  "Anomaly score",
  "Provenance by sensor source",
  "Runtime directives",
  "Operator or autonomy alerts",
];

export const opticWedges = [
  {
    title: "Defense",
    subtitle: "Perimeter intelligence and threat-aware edge perception",
    bullets: [
      "Perimeter intelligence, counter-UAS cueing, and autonomous surveillance",
      "Sensor fusion for threat detection and contested-environment perception",
      "Edge deployment for defense teams that need low-latency scene awareness",
    ],
  },
  {
    title: "Industrial Inspection",
    subtitle: "Persistent machine perception for industrial autonomy",
    bullets: [
      "Inspection robots, defect detection, and facility monitoring",
      "Anomaly detection and predictive maintenance workflows",
      "Machine-speed awareness for plants, corridors, utilities, and infrastructure",
    ],
  },
  {
    title: "Robotics",
    subtitle: "Runtime perception services for fleets and autonomy stacks",
    bullets: [
      "Navigation support, object and scene understanding, and multi-robot perception",
      "Reusable services instead of custom point solutions per platform",
      "Fleet-ready scene telemetry, alerts, and runtime interfaces",
    ],
  },
];

export const opticMissionStories = [
  {
    label: "Autonomous perimeter intelligence",
    title: "Track aerial activity and classify anomalies before the operator gets buried.",
    body: "Fuse drone, EO/IR, LiDAR, and radar-adjacent feeds into one operational scene so platforms can patrol, localize, and escalate with machine-speed context.",
    video: "/media/armed-cobalt-drone.webm",
    chips: ["Drone ISR", "Perimeter patrol", "Anomaly alerts"],
    overlay: "optic",
    readouts: ["Track confidence 96.4%", "Objects tracked 14", "Sensor state fused"],
  },
  {
    label: "Counter-UAS and force protection",
    title: "Turn disjointed sensing into detect-track-classify workflows for defense teams.",
    body: "Optic helps bridge sensing hardware and mission systems with edge-deployed fusion, track persistence, and operator-grade scene outputs across contested environments.",
    video: "/media/counter-uas-training.webm",
    chips: ["Counter-UAS", "Force protection", "Operator cueing"],
    overlay: "defense",
    readouts: ["Threat queue 03", "Operator handoff live", "Alert latency <100 ms"],
  },
  {
    label: "Active drone perception",
    title: "Layer tracks, boxes, and fused telemetry directly onto live aerial video.",
    body: "Optic moves perception onto the aircraft so teams see live scene understanding instead of raw feed: active detections, range cues, anomaly confidence, and mission-ready overlays in real time.",
    video: "/media/active-drone-perception.webm",
    chips: ["Drone autonomy", "Computer vision overlays", "LiDAR-style telemetry"],
    overlay: "perception",
    readouts: ["Altitude 245 ft", "Range gate 1.2 km", "Scene confidence 97.1%"],
  },
];

export const opticProofPoints = [
  {
    title: "Built for the edge",
    body: "Optic is designed for low-latency deployment on operational hardware, not only in cloud or lab environments.",
  },
  {
    title: "Multi-modal by design",
    body: "Optic is built to fuse heterogeneous sensors rather than treating each modality as an isolated stack.",
  },
  {
    title: "Infrastructure, not a point solution",
    body: "Optic is reusable across platforms, missions, and industries rather than tied to a single vertical application.",
  },
  {
    title: "Interoperable outputs",
    body: "Optic produces normalized scene and event representations that can feed autonomy, command-and-control, monitoring systems, or downstream intelligence layers.",
  },
];

export const opticMediaCredits = [
  "Armed Cobalt 110 G-VTOL Drone / Rhk111 / CC BY-SA 4.0 via Wikimedia Commons",
  "1st Armored Division Soldiers Conduct Counter UAS Training / Staff Sgt. Felix Mena / U.S. Army public domain via Wikimedia Commons",
  "A Drone with a Brain / U.S. Department of Defense / public domain via Wikimedia Commons",
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
  "Optic is the product platform: deployable infrastructure, edge runtime, APIs and SDKs, and the commercial, defense, and government deployment path.",
  "Embodied Labs is the frontier lab: invention, experimentation, evaluation, validation, and prototype generation upstream of productization.",
  "Embodied Labs should de-risk novel sensing, fusion, evaluation, and embodied intelligence concepts before they become reusable Optic capabilities.",
  "Keeping the boundary crisp allows the lab to explore aggressively while the platform company stays deployment-focused and category-defining.",
];

export const embodiedFunctions = [
  {
    title: "Research",
    body: "Novel architectures in perception, multi-modal understanding, anomaly intelligence, and embodied machine interaction.",
  },
  {
    title: "Prototype",
    body: "Experimental systems, simulation environments, adaptive sensing loops, and high-risk technical concepts.",
  },
  {
    title: "Validate",
    body: "Benchmarking, evaluation harnesses, synthetic data generation, scenario testing, and transition-readiness studies.",
  },
  {
    title: "Transfer",
    body: "Move validated technical breakthroughs into deployable platform layers such as Optic or into partner systems.",
  },
];

export const embodiedResearchThemes = [
  "Multi-modal embodied perception",
  "Adaptive sensor orchestration",
  "Scene relation and behavior modeling",
  "Anomaly intelligence in dynamic environments",
  "Simulation-to-real perception systems",
  "Evaluation frameworks for autonomous sensing",
  "Data generation and synthetic scenario design",
  "Perception for defense, robotics, and industrial autonomy",
];

export const embodiedPipeline = [
  "Frontier research question",
  "Experimental prototype",
  "Evaluation and benchmarking",
  "Technical validation",
  "Transfer to deployable platform or partner system",
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
