import type { Experience, Project, SkillGroup } from "@/types";

export const experiences: Experience[] = [
  {
    id: "conovo",
    company: "Conovo Technologies",
    role: "Software Engineer",
    period: "Oct 2025 · Present",
    projects: [
      {
        name: "Shia Spouse",
        url: "https://shiaspouse.org",
        bullets: [
          "Built a subscription-gated real-time chat system using Socket.IO, handling 500+ concurrent user sessions with access controlled by active subscription status.",
          "Designed and implemented a document-based profile verification flow where users upload ID proof and admins review before profiles go live, reducing fake accounts by an estimated 60%.",
          "Shipped a premium agent-matching feature where staff manually suggest compatible profiles; users receive push notifications and accept or decline in one tap.",
          "Developed a community events module allowing the team to publish live events with user registration, participation tracking, and attendance notifications.",
          "Resolved a Google Places API edge case for disputed Kashmir territories by building a TypeScript fallback lookup map covering Pakistani and Indian-administered zones with accurate region labels.",
          "Integrated Redis caching on high-traffic GET endpoints, reducing average API response time by 35%.",
        ],
      },
      {
        name: "Bowmont Global",
        bullets: [
          "Built the Work Breakdown Structure (WBS) module enabling planners to create task hierarchies, assign contractors, and define predecessor/successor dependencies across multi-phase projects.",
          "Implemented a contractor-facing task review workflow where contractors submit completed work and planners approve or reject with notes, reducing manual back and forth by an estimated 40%.",
          "Developed a dynamic Gantt chart view that reflects task dependencies in real time and updates visually as task statuses change.",
        ],
      },
    ],
  },
  {
    id: "ragzon",
    company: "Ragzon Solutions",
    role: "Software Engineer",
    period: "Jun 2025 · Oct 2025",
    projects: [
      {
        name: "HRMS",
        bullets: [
          "Built the full HRMS from scratch: companies post jobs, candidates apply, and the system manages the pipeline from CV scoring through to automated offer letter generation.",
          "Implemented an AI-powered CV-to-JD match scoring feature that ranks candidates by percentage fit, reducing recruiter screening time by an estimated 50%.",
          "Designed a configurable interview pipeline with stages (screening, technical, HR); the system triggers automated actions and notifications when candidates advance.",
        ],
      },
      {
        name: "JobJen",
        bullets: [
          "Built CV parsing that extracts structured data (experience, skills, education) from uploaded PDFs, eliminating manual data entry for HR teams.",
          "Developed a real-time Kanban board for candidates showing current application stage, updated live as HR moves applicants through the pipeline.",
          "Built an HR dashboard with applicant management, parsed CV data review, and automated interview scheduling with email notifications.",
        ],
      },
    ],
  },
  {
    id: "argon",
    company: "Argon Teq",
    role: "Senior Backend Developer",
    period: "Nov 2022 · Jun 2025",
    companyBullets: [
      "Designed and maintained REST APIs across 4+ products using Node.js, NestJS, TypeScript, and Express.js, serving teams of 3 to 8 engineers per project.",
      "Set up Redis-backed BullMQ job queues for async processing (notifications, report generation, email dispatch), handling high-volume background jobs reliably.",
      "Deployed and managed services on AWS: configured EC2 instances, managed static assets on S3, set up Route 53 DNS routing, and used RDS for managed PostgreSQL in production.",
      "Managed payment integrations (Stripe) and logistics APIs (Shippo, J&T), handling live transactions and order fulfillment across multiple client products.",
      "Used Docker to containerize services, ensuring environment parity between development and production and reducing deployment issues significantly.",
      "Conducted regular code reviews and mentored 3 junior developers on API design patterns, error handling strategies, and database query optimization.",
    ],
    projects: [
      {
        name: "AccuBrew",
        bullets: [
          "Built a real-time sensor data ingestion pipeline from Particle.io hardware, processing and storing brew telemetry for live dashboard display and session history replay.",
          "Designed an alert and reminder notification system with configurable thresholds, enabling brewers to catch out-of-range conditions without constant monitoring.",
        ],
      },
      {
        name: "Kidault",
        bullets: [
          "Built backend services for ride bookings, user and driver profile management, and driver assignment logic with safety-first business rules.",
          "Used Firebase Realtime Database to push live ride status updates to the mobile app, eliminating the need for client-side polling.",
        ],
      },
      {
        name: "Gallelio",
        bullets: [
          "Built minting, listing, buying, and transfer APIs integrating web3.js with Ethereum smart contracts; handled dual authentication using both JWT and crypto wallet sign-in.",
        ],
      },
      {
        name: "Katana Inu",
        bullets: [
          "Built tournament management APIs covering player registration, leaderboards, and scoring for competitive events with thousands of participants.",
          "Implemented a social layer with real-time chat, friend requests, post sharing, and notification feeds powered by Socket.IO, alongside wallet-linked in-game item purchases.",
        ],
      },
    ],
  },
  {
    id: "adriot",
    company: "Adriot Soft Solutions",
    role: "Full Stack Developer",
    period: "Sep 2021 · Nov 2022",
    companyBullets: [
      "Built and maintained REST APIs in Node.js and MongoDB powering business logic for multilingual content platforms, an event ticketing system, and a bidding platform, with a Laravel admin panel.",
      "Optimized slow MongoDB queries and restructured two database schemas to handle higher traffic, reducing query times by an estimated 40 to 60% on the most loaded endpoints.",
      "Worked across multiple client projects simultaneously, context-switching between different stacks and domain requirements.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "shia-spouse",
    name: "Shia Spouse",
    company: "Conovo Technologies",
    categories: ["Full Stack"],
    description:
      "A subscription-gated matrimonial platform for the Shia Muslim community. Features real-time chat over Socket.IO, admin-managed profile verification, agent-assisted matchmaking, community events, and Redis-cached APIs for performance at scale.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Socket.IO", "Redis", "Prisma", "AWS"],
    live: true,
    url: "https://shiaspouse.org",
  },
  {
    id: "bowmont",
    name: "Bowmont Global",
    company: "Conovo Technologies",
    categories: ["Full Stack"],
    description:
      "A construction project controls SaaS platform. Includes a Work Breakdown Structure (WBS) module, contractor task review workflows, and a live-updating Gantt chart that reflects task dependencies in real time.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "Ant Design"],
    live: false,
  },
  {
    id: "hrms",
    name: "HRMS",
    company: "Ragzon Solutions",
    categories: ["Full Stack"],
    description:
      "An end-to-end HR management system built from scratch. Handles job posting, candidate applications, AI-powered CV scoring against job descriptions, a configurable multi-stage interview pipeline, and automated offer letter generation.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "OpenAI API"],
    live: false,
  },
  {
    id: "jobjen",
    name: "JobJen",
    company: "Ragzon Solutions",
    categories: ["Full Stack"],
    description:
      "A job portal with intelligent CV parsing to extract structured candidate data, a real-time Kanban board tracking application stages, and an HR dashboard with automated interview scheduling.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Prisma"],
    live: false,
  },
  {
    id: "accubrew",
    name: "AccuBrew",
    company: "Argon Teq",
    categories: ["Backend"],
    description:
      "A real-time IoT brewing monitor that ingests live sensor telemetry from Particle.io hardware, stores brew session history, and dispatches configurable threshold alerts so brewers catch out-of-range conditions instantly.",
    tech: ["Node.js", "NestJS", "Particle.io", "PostgreSQL", "WebSockets"],
    live: false,
  },
  {
    id: "kidault",
    name: "Kidault",
    company: "Argon Teq",
    categories: ["Full Stack", "Mobile"],
    description:
      "A safety-first ride-share platform designed for children. Built backend services for bookings, driver assignment, and Firebase-powered real-time ride status updates pushed directly to the mobile app.",
    tech: ["Node.js", "NestJS", "Firebase Realtime DB", "PostgreSQL"],
    live: false,
  },
  {
    id: "gallelio",
    name: "Gallelio",
    company: "Argon Teq",
    categories: ["Web3", "Full Stack"],
    description:
      "An NFT marketplace with minting, listing, buying, and transfer APIs integrated with Ethereum smart contracts via web3.js. Supports dual authentication using both JWT and crypto wallet sign-in.",
    tech: ["Node.js", "NestJS", "web3.js", "Ethereum", "Shippo", "Quaderno", "JWT"],
    live: false,
  },
  {
    id: "katana-inu",
    name: "Katana Inu",
    company: "Argon Teq",
    categories: ["Full Stack"],
    description:
      "A social gaming platform with tournament management, leaderboards, real-time chat and friend feeds powered by Socket.IO, and wallet-linked in-game item purchases.",
    tech: ["Node.js", "NestJS", "Socket.IO", "PostgreSQL", "Web3"],
    live: false,
  },
  {
    id: "ebility",
    name: "Ebility",
    company: "Adriot Soft Solutions",
    categories: ["Full Stack", "Mobile"],
    description:
      "A logistics bidding platform for cargo vehicles. Users bid against drivers for container loads. Ride status updates require mutual confirmation from both driver and user before the system advances the state, preventing unilateral changes.",
    tech: ["Node.js", "MongoDB", "REST API", "Laravel Admin Panel"],
    live: false,
  },
  {
    id: "gold-business",
    name: "Gold Business SaaS",
    company: "Adriot Soft Solutions",
    categories: ["Backend"],
    description:
      "A multi-tenant SaaS backend for Dubai-based gold trading businesses. Delivers live gold rates via third-party sockets, supports custom buy and sell price alerts per user, and handles full white-label business configuration.",
    tech: ["Node.js", "MongoDB", "WebSockets", "SaaS Multi-tenant Architecture"],
    live: false,
  },
  {
    id: "sterling",
    name: "Sterling Attendance",
    company: "Adriot Soft Solutions",
    categories: ["Full Stack"],
    description:
      "An attendance and expense management system for construction workers. Marks attendance with a timestamped photo capture, and provides a full expense submission and admin approval workflow.",
    tech: ["Node.js", "MongoDB", "Laravel Admin"],
    live: false,
  },
  {
    id: "smart-audit",
    name: "Smart Audit",
    company: "Adriot Soft Solutions",
    categories: ["Full Stack"],
    description:
      "A shop auditing platform where auditors are assigned specific areas and shops. Auditors conduct visits, upload reference images, and submit reviews. Admins track coverage and audit quality across regions.",
    tech: ["Node.js", "MongoDB", "Laravel Admin"],
    live: false,
  },
  {
    id: "pcda",
    name: "PCDA App",
    company: "Adriot Soft Solutions",
    categories: ["Full Stack", "Mobile"],
    description:
      "A multilingual medical information and calorie tracking app. A nutritionist-managed food database powers a calorie calculator that factors in user height and weight, and users can log and review their daily intake history. Admin manages all static multilingual content.",
    tech: ["Node.js", "MongoDB", "Laravel Admin", "Mobile App"],
    live: false,
  },
  {
    id: "koduvalley",
    name: "KoduValley Event Ticketing",
    company: "Adriot Soft Solutions",
    categories: ["Full Stack"],
    description:
      "An event ticket management system where admins manage event entries and generate printable PDF tickets per attendee.",
    tech: ["Node.js", "MongoDB", "Laravel Admin"],
    live: false,
  },
  {
    id: "carmamma",
    name: "Carmamma",
    company: "Argon Teq",
    categories: ["Web3", "Full Stack"],
    description:
      "A blockchain-powered car marketplace. Users post and browse car listings, and all purchases and sales are completed using a blockchain wallet, combining traditional e-commerce UX with Web3 transaction flows.",
    tech: ["Node.js", "React.js", "Blockchain", "Web3.js"],
    live: false,
  },
  {
    id: "job-board",
    name: "Job Board",
    company: "Argon Teq",
    categories: ["Full Stack"],
    description:
      "A straightforward job board where admins post openings visible on a public listing page. Candidates apply by submitting their resume, and admins review applications and toggle job status between open and closed.",
    tech: ["Node.js", "React.js", "MongoDB"],
    live: false,
  },
  {
    id: "golf-token",
    name: "Golf Token Machine",
    company: "Argon Teq",
    categories: ["Full Stack"],
    description:
      "A golf token vending system linked to an embedded machine. Users purchase tokens through a reservation portal, and those tokens are synced to the physical golf ball dispenser, which only releases a ball upon valid token balance.",
    tech: ["Node.js", "Embedded Systems Integration", "React.js"],
    live: false,
  },
  {
    id: "craydle",
    name: "Craydle",
    company: "Argon Teq",
    categories: ["Full Stack"],
    description:
      "A dynamic construction home questionnaire platform for developers and architects. Costs are calculated based on answers, and each subsequent question and its pricing options are driven by previous responses. Admins manage formulas, questions, and answer options dynamically.",
    tech: ["Node.js", "React.js", "PostgreSQL"],
    live: false,
  },
];

export const skills: SkillGroup[] = [
  { label: "Languages", skills: ["TypeScript", "JavaScript"] },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "Socket.IO",
      "JWT Auth",
      "BullMQ",
    ],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js (App Router)", "TailwindCSS", "Ant Design"],
  },
  { label: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
  { label: "ORMs", skills: ["Prisma", "Sequelize", "Mongoose"] },
  {
    label: "Cloud & Infra",
    skills: ["AWS (EC2, S3, Route 53, RDS)", "Redis", "Docker", "Firebase"],
  },
  {
    label: "Dev Tools",
    skills: ["Git", "Postman", "Swagger", "VSCode", "PgAdmin"],
  },
  {
    label: "Integrations",
    skills: [
      "Stripe",
      "PayPal",
      "Telr",
      "Google Maps",
      "Google Places",
      "Google Sign-In",
      "Apple Sign-In",
      "Steam API",
      "Shippo",
      "Quaderno",
      "J&T Express",
      "Particle.io",
      "web3.js",
      "Google Drive API",
    ],
  },
];
