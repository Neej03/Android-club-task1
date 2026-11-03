export const eventsData = [
  {
    id: 'droid-hack-2025',
    title: 'Android Fusion 3.0: 36H National Hackathon',
    tagline: 'Building the Next Era of Android & Edge AI Experiences',
    status: 'upcoming',
    category: 'Hackathon',
    badge: 'Flagship 36H',
    featured: true,
    date: 'Nov 28 - 30, 2026',
    month: 'NOV',
    days: '28-30',
    year: '2026',
    time: '10:00 AM IST onwards',
    venue: 'Auditorium & Innovation Labs, VIT Bhopal',
    mode: 'Hybrid (On-Campus & Online)',
    teamSize: '2 - 4 Members',
    prizePool: '₹75,000 + Swag & Mentorship',
    cashPrize: '₹75,000',
    description: 'Our annual flagship mobile hackathon bringing together 500+ student developers across India to build innovative Android, Flutter, and edge-intelligence applications.',
    techStack: ['Jetpack Compose', 'Gemini Nano', 'Kotlin Multiplatform', 'TensorFlow Lite', 'Material You'],
    tracks: [
      { name: 'Edge AI on Mobile', desc: 'On-device LLMs, vision models & real-time offline inference' },
      { name: 'Smart Campus OS', desc: 'IoT integration, digital campus IDs & real-time student utility' },
      { name: 'Sustainable Tech', desc: 'Energy-efficient architectures & climate-conscious mobile tools' },
      { name: 'Open Innovation', desc: 'Novel ideas solving genuine real-world friction' }
    ],
    highlights: [
      'Tracks: AI on Android, Sustainable Tech, Smart Campus, Open Innovation',
      'Mentorship from Google Developer Experts and industry tech leads',
      'Direct interview opportunities with top tech startup partners',
      'Exclusive Android Club swag bags, mechanical keyboard giveaways & credits'
    ],
    itinerary: [
      { time: 'Day 1 - 10:00 AM', label: 'Opening Keynote & Problem Statement Drop' },
      { time: 'Day 1 - 02:00 PM', label: 'Hacking Begins • Mentorship Round 1' },
      { time: 'Day 2 - 12:00 AM', label: 'Midnight CTF Challenge & Red Bull Fuel Station' },
      { time: 'Day 2 - 06:00 PM', label: 'Pitch Deck & Code Freeze' },
      { time: 'Day 3 - 11:30 AM', label: 'Grand Finale Demos & Award Ceremony' }
    ],
    stats: {
      registered: '480+ Devs',
      teams: '120+ Teams',
      mentors: '14 GDEs'
    },
    registrationLink: '#contact',
    bannerGradient: 'from-emerald-950 via-neutral-900 to-black',
    accent: '#3DDC84',
    speaker: 'GDEs & Industry Android Architects',
    speakerRole: 'Google Developer Experts & Principal Mobile Engineers'
  },
  {
    id: 'compose-camp-2026',
    title: 'Compose Camp 2026: Master Modern Android UI',
    tagline: 'From Zero to Declarative Mastery with Jetpack Compose',
    status: 'upcoming',
    category: 'Hands-on Bootcamp',
    badge: '3-Day Masterclass',
    featured: false,
    date: 'Dec 12 - 14, 2026',
    month: 'DEC',
    days: '12-14',
    year: '2026',
    time: '04:00 PM - 07:00 PM IST',
    venue: 'Lab Block 3, Academic Block, VIT Bhopal',
    mode: 'In-Person Hands-on',
    teamSize: 'Individual',
    prizePool: 'Official Google Badges & Certificates',
    cashPrize: 'Google Certs',
    description: 'A 3-day intensive boot camp teaching idiomatic Jetpack Compose, state lifting, custom layouts, fluid physics-based animations, and clean MVI architecture on Android Studio Ladybug.',
    techStack: ['Jetpack Compose', 'Kotlin Coroutines', 'MVI Architecture', 'Compose Navigation'],
    tracks: [
      { name: 'Declarative UI Basics', desc: 'Composable lifecycles, state hoisting & recomposition' },
      { name: 'Complex Motion & Canvas', desc: 'Gesture handling, spring physics and shader effects' },
      { name: 'Production Architecture', desc: 'StateFlow, Room DB, Retrofit & Clean MVVM/MVI' }
    ],
    highlights: [
      'Build 3 fully functional production-grade Compose apps from scratch',
      'Official Google Developer profile badges and verified certifications',
      'Live code reviews and interactive 1-on-1 debugging with technical leads'
    ],
    itinerary: [
      { time: 'Day 1', label: 'Compose Fundamentals, Layouts & State Hoisting' },
      { time: 'Day 2', label: 'Custom Canvas, Complex Animations & Themes' },
      { time: 'Day 3', label: 'Mini App Hack & Google Badge Verification' }
    ],
    stats: {
      registered: '220 Seats',
      teams: 'Hands-on Labs',
      mentors: '6 Leads'
    },
    registrationLink: '#contact',
    bannerGradient: 'from-green-950 via-zinc-900 to-black',
    accent: '#8AFFB7',
    speaker: 'Android Club Tech Leads',
    speakerRole: 'Core Mobile Engineering Leads'
  },
  {
    id: 'kmp-edge-ai-jam-2026',
    title: 'Edge AI & KMP Studio: On-Device Intelligence',
    tagline: 'Deploy Local Gemini Nano & Shared Kotlin Across Devices',
    status: 'upcoming',
    category: 'Study Jam',
    badge: 'Hands-on Sprint',
    featured: false,
    date: 'Jan 16 - 18, 2027',
    month: 'JAN',
    days: '16-18',
    year: '2027',
    time: '03:30 PM - 06:30 PM IST',
    venue: 'Innovation Labs, AB-3, VIT Bhopal',
    mode: 'In-Person & Online',
    teamSize: 'Solo / Duo',
    prizePool: '₹25,000 + Google AI Credits',
    cashPrize: '₹25,000',
    description: 'Master real-time offline machine learning on modern Android devices using Google AICore, Gemini Nano, and Kotlin Multiplatform for shared cross-platform architectures.',
    techStack: ['Gemini Nano', 'Kotlin Multiplatform', 'TensorFlow Lite', 'Android AICore'],
    tracks: [
      { name: 'Local LLM Inference', desc: 'On-device summarization & smart reply with Gemini Nano' },
      { name: 'Shared KMP Logic', desc: 'Cross-platform business layer & unified data pipelines' },
      { name: 'Offline Vision & Audio', desc: 'Low-latency camera frame segmentation with TFLite' }
    ],
    highlights: [
      'Deploy real-time on-device AI models with zero cloud API latency',
      'Hands-on setup of Android AICore and Gemini Nano experimental APIs',
      'Official certificates & ₹25,000 prize credits for top projects'
    ],
    itinerary: [
      { time: 'Day 1', label: 'On-Device AI Architecture & Google AICore SDK' },
      { time: 'Day 2', label: 'Gemini Nano Integration & Prompt Engineering' },
      { time: 'Day 3', label: 'Cross-Platform KMP Deployment & Demo Day' }
    ],
    stats: {
      registered: '190 Devs',
      teams: 'Hands-on Sprint',
      mentors: '8 Leads'
    },
    registrationLink: '#contact',
    bannerGradient: 'from-cyan-950 via-slate-900 to-black',
    accent: '#22d3ee',
    speaker: 'Edge AI Engineers & Club Leads',
    speakerRole: 'Machine Learning & Systems Architects'
  },
  {
    id: 'bugoff-2025',
    title: 'BugOff 2.0: The Ultimate Debugging Challenge',
    tagline: 'Can You Hunt Down Fatal Race Conditions & Memory Leaks?',
    status: 'past',
    category: 'Competitive Debugging',
    badge: 'Hall of Fame',
    featured: false,
    date: 'Aug 18, 2026',
    month: 'AUG',
    days: '18',
    year: '2026',
    time: '02:00 PM - 06:00 PM IST',
    venue: 'Online & Virtual Arena',
    mode: 'Online Arena',
    teamSize: 'Solo / Duo',
    prizePool: '₹20,000 Cash Prizes & Goodies',
    cashPrize: '₹20,000',
    description: 'Contestants were thrown into broken Android and Kotlin codebases with cryptic stack traces, ANRs, threading deadlocks, and memory leaks. The fastest bug hunters walked away victorious.',
    techStack: ['Android Profiler', 'LeakCanary', 'Kotlin Coroutines', 'StrictMode'],
    tracks: [
      { name: 'Race Condition Hunter', desc: 'Debug concurrent coroutines & mutable state race bugs' },
      { name: 'ANR & Memory Squeeze', desc: 'Profile heap dumps and eliminate memory leaks with LeakCanary' },
      { name: 'Crash Matrix', desc: 'Fix obfuscated ProGuard/R8 crashes & broken dependencies' }
    ],
    highlights: [
      'Over 340+ participants across 12 premier institutions',
      'Real-world bug scenarios extracted from actual enterprise production apps',
      'Detailed post-mortem analysis stream with 1,200+ developer views'
    ],
    itinerary: [
      { time: '02:00 PM', label: 'Access Keys Dispatched & Rules Briefing' },
      { time: '02:30 PM', label: 'Level 1: Syntax & Coroutine Bug Hunt' },
      { time: '04:00 PM', label: 'Level 2: Memory Leak & ANR Battlefield' },
      { time: '05:45 PM', label: 'Live Leaderboard Freeze & Winner Reveal' }
    ],
    stats: {
      registered: '340+ Coders',
      teams: '180 Duos',
      mentors: 'Live Stream'
    },
    registrationLink: 'https://github.com/android-club-vitb',
    bannerGradient: 'from-teal-950 via-stone-900 to-black',
    accent: '#3DDC84',
    speaker: 'Senior Technical Leads',
    speakerRole: 'Club Systems Architects'
  },
  {
    id: 'droidcon-study-jam',
    title: 'DroidCon Study Jam & Kotlin Essentials',
    tagline: 'Deep Dive into Coroutines, Flow, and Asynchronous Kotlin',
    status: 'past',
    category: 'Study Jam',
    badge: 'Community Jam',
    featured: false,
    date: 'Apr 22, 2026',
    month: 'APR',
    days: '22',
    year: '2026',
    time: '11:00 AM - 04:00 PM IST',
    venue: 'Seminar Hall 2, VIT Bhopal',
    mode: 'In-Person',
    teamSize: 'Individual',
    prizePool: 'Certificate of Excellence',
    cashPrize: 'Certificates',
    description: 'An interactive exploration of asynchronous execution in modern Kotlin, untangling background threads, dispatchers, structured concurrency, and reactive StateFlow patterns.',
    techStack: ['Kotlin Flows', 'Structured Concurrency', 'Dispatchers', 'Room DB'],
    tracks: [
      { name: 'Coroutines Under the Hood', desc: 'Continuation passing style, suspension points & bytecode' },
      { name: 'Reactive Flow Streams', desc: 'Hot vs cold streams, backpressure & transformation operators' }
    ],
    highlights: [
      'Hands-on labs with 180+ enrolled undergraduate students',
      'Live memory allocation profiling with Android Studio profiler',
      'Open-source sample repository published for self-paced learning'
    ],
    itinerary: [
      { time: '11:00 AM', label: 'Kotlin Threading vs Coroutines Architecture' },
      { time: '01:00 PM', label: 'Interactive Lab: Building Reactive Newsfeed' },
      { time: '03:30 PM', label: 'Q&A, Git Push & Certificate Distribution' }
    ],
    stats: {
      registered: '180+ Students',
      teams: 'Individual',
      mentors: 'Faculty'
    },
    registrationLink: 'https://github.com/android-club-vitb',
    bannerGradient: 'from-emerald-900 via-neutral-900 to-black',
    accent: '#8AFFB7',
    speaker: 'Faculty & Core Android Mentors',
    speakerRole: 'Faculty Coordinator & Lead Mentors'
  },
  {
    id: 'app-o-holics',
    title: 'App-O-Holics: Rapid Mobile Prototyping Sprint',
    tagline: 'Idea to Clickable Interactive Prototype in 12 Hours',
    status: 'past',
    category: 'Design Sprint',
    badge: 'Design Sprint',
    featured: false,
    date: 'Jan 15, 2026',
    month: 'JAN',
    days: '15',
    year: '2026',
    time: '09:00 AM - 09:00 PM IST',
    venue: 'Design Studio & Auditorium',
    mode: 'In-Person',
    teamSize: '3 Members',
    prizePool: '₹15,000 + Figma Pro Subscriptions',
    cashPrize: '₹15,000',
    description: 'Designers and developers teamed up to craft stunning mobile UX concepts solving everyday problems for college students, judged on aesthetics, ergonomics, and feasibility.',
    techStack: ['Figma', 'Jetpack Compose Preview', 'Material 3', 'Micro-interactions'],
    tracks: [
      { name: 'Campus Life Redesigned', desc: 'Mess booking, timetable synchronization & ride sharing' },
      { name: 'Mental Health & Focus', desc: 'Mindful screen time and distraction-free mobile tools' }
    ],
    highlights: [
      '28 submitted UI/UX prototypes created in Figma & Compose',
      'Live judging panel consisting of senior product designers',
      'Winning prototype selected for full development incubation in the club'
    ],
    itinerary: [
      { time: '09:00 AM', label: 'Design Prompt Release & Wireframe Sprint' },
      { time: '02:00 PM', label: 'Prototyping & Compose Component Mapping' },
      { time: '07:30 PM', label: 'Live Pitching & Design Critique' }
    ],
    stats: {
      registered: '140+ Creatives',
      teams: '28 Teams',
      mentors: '5 Judges'
    },
    registrationLink: 'https://github.com/android-club-vitb',
    bannerGradient: 'from-green-950 via-zinc-950 to-black',
    accent: '#3DDC84',
    speaker: 'Product Design Leads',
    speakerRole: 'Staff Product Designers'
  }
];

export const eventExperienceMoments = [
  {
    id: 'hackathon-night',
    title: 'Midnight Coding Sprints',
    event: 'Android Fusion 36H Hackathon',
    subtitle: 'Over 120 teams pushing commits, fixing race conditions, and drinking Red Bull at 3:00 AM.',
    stats: '500+ Builders',
    tag: 'Hackathon Energy',
    accent: '#3DDC84'
  },
  {
    id: 'demo-day',
    title: 'Grand Finale Pitch Arena',
    event: 'App-O-Holics Sprint',
    subtitle: 'Student teams pitching live working prototypes on the auditorium big screen before judges.',
    stats: '28 Prototypes',
    tag: 'Stage Demo',
    accent: '#60A5FA'
  },
  {
    id: 'compose-labs',
    title: 'Hands-on Lab Mastery',
    event: 'Compose Camp 2026',
    subtitle: '180+ developers simultaneously compiling their first declarative Android apps with zero XML.',
    stats: '180+ Active Laptops',
    tag: 'Workshop',
    accent: '#F59E0B'
  },
  {
    id: 'celebration',
    title: 'Winners & Community Gala',
    event: 'BugOff 2.0 Finale',
    subtitle: 'Celebrating the champions, handing out cash rewards, custom trophies, and Google swag.',
    stats: '₹1.1L+ Total Swag',
    tag: 'Awards & Swag',
    accent: '#A78BFA'
  }
];
