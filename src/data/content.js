// All site copy lives here, so content can be updated without touching components.
import {
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiSequelize,
  SiTypeorm,
  SiSupabase,
  SiChakraui,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiVitest,
  SiC,
  SiGnubash,
  SiFramer,
  SiJsonwebtokens,
  SiVite,
  SiReactrouter,
  SiX,
  SiMongodb,
  SiMongoose,
  SiHono,
  SiZod,
  SiTanstack,
  SiSwagger,
  SiDocker,
  SiCloudflare,
  SiRailway,
  SiCloudinary,
  SiNeon,
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import {
  HiOutlineCodeBracket,
  HiOutlineWindow,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineWrenchScrewdriver,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
  HiOutlineCreditCard,
} from 'react-icons/hi2';

import styledbysky from '../assets/projects/styledbysky.jpg';
import nexus from '../assets/projects/nexus.jpg';
import lafiamoms from '../assets/projects/lafiamoms.jpg';
import mekItHappen from '../assets/projects/mek-it-happen.jpg';

const GITHUB = 'https://github.com/twilight05';

export const profile = {
  name: 'Anne Usoroh',
  fullName: 'Anne Abasifreke Usoroh',
  title: 'Fullstack Software Developer',
  roles: ['Fullstack Software Developer', 'React & Next.js Engineer', 'Node.js API Builder'],
  tagline: 'The best option for your business.',
  intro:
    'I build complete web products end to end: fast, responsive interfaces in React and Next.js, backed by secure Node.js APIs and well-structured databases.',
  location: 'Lagos, Nigeria',
  phone: '+234 810 277 2398',
  email: 'annenorahusoroh@gmail.com',
  github: GITHUB,
  // Add profile URLs here; entries with an empty href are hidden.
  socials: [
    { label: 'GitHub', icon: SiGithub, href: GITHUB },
    { label: 'LinkedIn', icon: FaLinkedin, href: '' },
    { label: 'X (Twitter)', icon: SiX, href: '' },
  ],
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    "I'm a fullstack software developer based in Lagos, Nigeria. My engineering journey started in 2021 with the ALX Software Engineering programme, where I learned the fundamentals in C, shell scripting and Linux before moving into the web.",
    "Today I ship full products: React, Next.js and TypeScript on the frontend; Node.js, Express and Hono APIs on the backend; and PostgreSQL, MongoDB or MySQL underneath. I've built a production e-commerce platform with Paystack payments and an admin back office, an age-adaptive banking app with real-time updates, and much of the backend for LafiaMoms, a maternal health platform.",
    'I care about clean architecture, type safety, tested business logic and interfaces that feel great on every device.',
  ],
  highlights: [
    {
      icon: HiOutlineWindow,
      title: 'Frontend',
      text: 'Responsive, accessible UIs with React, Next.js, TypeScript and Tailwind CSS.',
    },
    {
      icon: HiOutlineServerStack,
      title: 'Backend & APIs',
      text: 'REST APIs with Node.js, Express and Hono, secure auth, payments and validation.',
    },
    {
      icon: HiOutlineCircleStack,
      title: 'Databases',
      text: 'Data modelling with PostgreSQL, MongoDB and MySQL via Prisma, Sequelize and Mongoose.',
    },
    {
      icon: HiOutlineRocketLaunch,
      title: 'Ship to production',
      text: 'Deployments on Vercel and Render, CI with GitHub Actions, tests with Vitest.',
    },
  ],
};

// `color: null` uses the current text colour (for black logos that would vanish in dark mode).
export const skillGroups = [
  {
    title: 'Languages',
    icon: HiOutlineCodeBracket,
    items: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'SQL', icon: HiOutlineCircleStack, color: '#DB2777' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'Bash', icon: SiGnubash, color: '#4EAA25' },
    ],
  },
  {
    title: 'Frontend',
    icon: HiOutlineWindow,
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: null },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Chakra UI', icon: SiChakraui, color: '#319795' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'React Router', icon: SiReactrouter, color: '#CA4245' },
      { name: 'TanStack Query', icon: SiTanstack, color: '#FF4154' },
      { name: 'Zustand', icon: HiOutlineCube, color: '#B45309' },
      { name: 'Framer Motion', icon: SiFramer, color: null },
    ],
  },
  {
    title: 'Backend',
    icon: HiOutlineServerStack,
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress, color: null },
      { name: 'Hono', icon: SiHono, color: '#E36002' },
      { name: 'REST APIs', icon: HiOutlineServerStack, color: '#DB2777' },
      { name: 'JWT & OAuth', icon: SiJsonwebtokens, color: null },
      { name: 'Zod', icon: SiZod, color: '#408AFF' },
      { name: 'Swagger / OpenAPI', icon: SiSwagger, color: '#85EA2D' },
      { name: 'Payments (Paystack)', icon: HiOutlineCreditCard, color: '#0BA4DB' },
      { name: 'Security (Helmet, rate limiting)', icon: HiOutlineShieldCheck, color: '#059669' },
    ],
  },
  {
    title: 'Databases & ORMs',
    icon: HiOutlineCircleStack,
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Neon', icon: SiNeon, color: '#00E599' },
      { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
      { name: 'Prisma', icon: SiPrisma, color: null },
      { name: 'Sequelize', icon: SiSequelize, color: '#52B0E7' },
      { name: 'Mongoose', icon: SiMongoose, color: '#880000' },
      { name: 'TypeORM', icon: SiTypeorm, color: '#FE0803' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: HiOutlineWrenchScrewdriver,
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: null },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Vitest', icon: SiVitest, color: '#6E9F18' },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
      { name: 'Vercel', icon: SiVercel, color: null },
      { name: 'Render', icon: SiRender, color: null },
      { name: 'Railway', icon: SiRailway, color: null },
      { name: 'Cloudflare', icon: SiCloudflare, color: '#F38020' },
    ],
  },
];

export const skillCount = new Set(skillGroups.flatMap((g) => g.items.map((i) => i.name))).size;

// Completed projects only. `image` is optional; without one a designed cover is shown.
// `role` describes my part on team projects; `privateCode` marks repos that aren't public.
export const projects = [
  {
    title: 'StyledbySky',
    type: 'Full-stack',
    label: 'E-commerce platform',
    role: 'Sole developer',
    description:
      'A production fashion e-commerce platform with storefront, checkout, real Paystack payments, customer accounts and a full admin back office, all backed by PostgreSQL.',
    highlights: [
      'Storefront with collections, filters, live search, product variants, wishlist and lookbook',
      'Auth with httpOnly-cookie JWT + refresh tokens, email verification, password reset and Google OAuth',
      'Guest and logged-in carts (merged on login), multi-step checkout, Nigerian shipping zones and promo codes',
      'Paystack payments verified server-side with idempotent webhooks',
      'Order lifecycle with automatic stock decrement and restock on cancellation/refund',
      'Admin back office: analytics dashboard, products and variants, orders, customers, coupons, reviews, returns and homepage CMS',
      'Cloudinary image uploads, transactional emails and SEO (sitemap, JSON-LD)',
    ],
    image: styledbysky,
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'Express', 'PostgreSQL', 'Sequelize', 'Paystack', 'Cloudinary'],
    liveUrl: 'https://styledbyskyy.com',
    codeUrl: '',
    privateCode: true,
  },
  {
    title: 'Nexus by Union Bank',
    type: 'Full-stack',
    label: 'Fintech · Banking',
    role: 'Lead developer',
    description:
      'A banking app whose interface adapts to the user’s age: Sprout (7–12), Thrive (13–17) and Prime (18+), with guardian-led accounts for children.',
    highlights: [
      'Age-tier routing computed server-side from date of birth, with protected per-tier routes',
      'Guardian-led KYC for minors; children sign in with a parent’s email and PIN',
      'Real-time updates via Neon Realtime: money a parent sends appears on the child’s screen within about a second',
      'Hono API deployed as a Neon Function with Neon Postgres, Neon Auth and Prisma',
      'Request validation with Zod and backend test suites for every tier with Vitest',
    ],
    image: nexus,
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Hono', 'Neon Postgres', 'Neon Auth', 'Prisma', 'Zod', 'Vitest'],
    liveUrl: 'https://nexus-frontend-goyc.onrender.com',
    codeUrl: '',
    privateCode: true,
  },
  {
    title: 'LafiaMoms',
    type: 'Backend',
    label: 'Maternal health platform',
    role: 'Backend developer (team project)',
    description:
      'A maternal and child health platform that supports expectant and nursing mothers with health tracking, expert support and a safe community. I built a large part of its REST API.',
    highlights: [
      'Articles & videos (resources) API, with per-user ratings and automatic read-time',
      'Community posts, comments and threaded replies',
      'Expert Q&A: only verified experts can answer, with public expert profiles',
      'EPDS (Edinburgh Postnatal Depression Scale) screening API with risk-level scoring',
      'Baby-care records and emergency contacts CRUD',
      'Admin report management and role-based access middleware',
      'Swagger API documentation for the endpoints',
    ],
    image: lafiamoms,
    tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Swagger', 'Cloudinary'],
    liveUrl: 'https://lafiamoms.com',
    codeUrl: '',
    privateCode: true,
  },
  {
    title: 'Mek It Happen Luxury Rydes',
    type: 'Full-stack',
    label: 'Client project',
    description:
      'Website and booking platform for a chauffeur-driven luxury car service in Houston, Texas, covering airport transfers, executive travel, weddings and events.',
    highlights: [
      'Fleet catalogue with vehicle detail pages, services, about and contact pages',
      'Booking API (Next.js route handler) with server-side validation and a 2-hour minimum',
      'Bookings stored in Supabase and synced to the owner’s Google Calendar',
      'One-tap WhatsApp enquiries with pre-filled booking details',
    ],
    image: mekItHappen,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Google Calendar API', 'Radix UI'],
    liveUrl: '',
    codeUrl: `${GITHUB}/mekit-cars`,
  },
  {
    title: 'SwiftSlot',
    type: 'Full-stack',
    label: 'Booking system',
    description:
      'A complete appointment booking system where customers pick a vendor, see live 30-minute availability and book through a multi-stage checkout flow.',
    highlights: [
      'Timezone-aware availability (Africa/Lagos) with UTC storage',
      'Double-booking prevention via unique constraints and a 2-hour advance buffer',
      'Idempotency keys to safely handle duplicate payment/booking requests',
      'Booking progress flow: Creating → Paying → Confirming → Completed',
      'Business logic covered by Vitest + Supertest',
    ],
    tags: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Zustand', 'Vitest'],
    cover: { from: '#7c3aed', to: '#db2777', icon: 'calendar' },
    liveUrl: '',
    codeUrl: `${GITHUB}/SwifSlot`,
  },
];
