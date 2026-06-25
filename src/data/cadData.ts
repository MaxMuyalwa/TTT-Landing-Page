import { CadPlatform, Challenge, TutorialNode, LeaderboardEntry, LiveTournament } from '../types';

export const COMMUNITY_STATS = {
  challenges: 349,
  completions: 50412,
  members: 25184,
  countries: 124,
  platforms: 16,
  tutorials: 5120
};

export const CAD_PLATFORMS: CadPlatform[] = [
  { id: 'solidworks', name: 'SolidWorks', icon: 'SW', share: 38, avgCompletionRate: 84, avgSpeedSeconds: 212, topModeler: 'Alex R.', color: '#ef4444' },
  { id: 'fusion360', name: 'Fusion 360', icon: 'F3', share: 22, avgCompletionRate: 79, avgSpeedSeconds: 245, topModeler: 'Priya K.', color: '#f97316' },
  { id: 'onshape', name: 'Onshape', icon: 'OS', share: 16, avgCompletionRate: 82, avgSpeedSeconds: 232, topModeler: 'Sarah M.', color: '#3b82f6' },
  { id: 'inventor', name: 'Inventor', icon: 'IV', share: 9, avgCompletionRate: 75, avgSpeedSeconds: 268, topModeler: 'Lukas M.', color: '#eab308' },
  { id: 'creo', name: 'Creo Parametric', icon: 'CR', share: 6, avgCompletionRate: 68, avgSpeedSeconds: 295, topModeler: 'Hans S.', color: '#a855f7' },
  { id: 'catia', name: 'CATIA v5/v6', icon: 'CA', share: 3, avgCompletionRate: 71, avgSpeedSeconds: 310, topModeler: 'Jean-Luc P.', color: '#06b6d4' },
  { id: 'freecad', name: 'FreeCAD', icon: 'FC', share: 3, avgCompletionRate: 62, avgSpeedSeconds: 340, topModeler: 'Nikolai V.', color: '#22c55e' },
  { id: 'other', name: 'Other CAD', icon: 'OT', share: 3, avgCompletionRate: 70, avgSpeedSeconds: 280, topModeler: 'Engineering Guild', color: '#71717a' }
];

export const CAD_CHALLENGES: Challenge[] = [
  {
    id: 'ch-keyring',
    name: 'Industrial Key Ring',
    difficulty: 'Beginner',
    category: 'Prismatic Solids',
    completions: 12405,
    avgTime: '02:15',
    avgTimeSeconds: 135,
    previewSvg: 'keyring',
    boundingBox: '60mm x 35mm x 6mm',
    weightGrams: 42,
    material: 'Aluminium 6061-T6',
    features: ['Base Extrusion', 'Circular Boss', 'Drilled Hole', 'Inner Pocket', 'Outer Fillet']
  },
  {
    id: 'ch-bracket',
    name: 'Anchor Hook Bracket',
    difficulty: 'Intermediate',
    category: 'Castings & Drafts',
    completions: 8714,
    avgTime: '04:45',
    avgTimeSeconds: 285,
    previewSvg: 'bracket',
    boundingBox: '120mm x 85mm x 50mm',
    weightGrams: 284,
    material: 'Cast Iron (Grade 40)',
    features: ['Rib Reinforcements', 'Draft Angles (3°)', 'Counterbored Holes', 'Filleted Edges', 'Boss Face Extrusion']
  },
  {
    id: 'ch-sheetmetal',
    name: 'Precision Sheet Metal Stand',
    difficulty: 'Intermediate',
    category: 'Sheet Metal',
    completions: 6128,
    avgTime: '06:12',
    avgTimeSeconds: 372,
    previewSvg: 'sheetmetal',
    boundingBox: '150mm x 120mm x 95mm',
    weightGrams: 145,
    material: 'Stainless Steel 304 (t=1.5mm)',
    features: ['Base Flange', '90° Bends (R=1.5)', 'Relief Cuts', 'Hexagonal Punch Pattern', 'Obround Slotted Holes']
  },
  {
    id: 'ch-turbo',
    name: 'Scroll Turbo Housing',
    difficulty: 'Advanced',
    category: 'Complex Sweeps & Lofts',
    completions: 4210,
    avgTime: '14:20',
    avgTimeSeconds: 860,
    previewSvg: 'turbo',
    boundingBox: '180mm x 165mm x 130mm',
    weightGrams: 1120,
    material: 'Ductile Iron (A536)',
    features: ['Logarithmic Spiral Sweep', 'Variable Section Lofting', 'Inlet/Outlet Flanges', 'Tapped Hole Patterns', 'Core Cavity Shelling']
  },
  {
    id: 'ch-rack',
    name: 'Multi-Material Component Rack',
    difficulty: 'Expert',
    category: 'Weldments & Assemblies',
    completions: 3105,
    avgTime: '22:45',
    avgTimeSeconds: 1365,
    previewSvg: 'rack',
    boundingBox: '450mm x 300mm x 350mm',
    weightGrams: 3450,
    material: 'Carbon Steel (Structural) & Acrylic',
    features: ['Square Tube Weldments', 'Gusset Reinforcements', 'Threaded Fasteners', 'Acrylic Drawer Sliders', 'Interference Checks']
  }
];

export const TUTORIAL_NODES: TutorialNode[] = [
  {
    id: 'tut-1',
    title: 'Precision Dimensioning & Constraints',
    category: 'Fundamentals',
    cadSystems: ['SolidWorks', 'Fusion 360', 'Onshape', 'Inventor', 'FreeCAD'],
    duration: '12:45',
    difficulty: 'Beginner',
    views: 8204,
    instructor: 'Mike S.',
    connections: ['tut-2', 'tut-3'],
    completedCount: 4502
  },
  {
    id: 'tut-2',
    title: 'Mastering Parametric Equations',
    category: 'Parametric Equations',
    cadSystems: ['SolidWorks', 'Fusion 360', 'Inventor', 'Creo'],
    duration: '18:30',
    difficulty: 'Intermediate',
    views: 6710,
    instructor: 'Priya K.',
    connections: ['tut-1', 'tut-4'],
    completedCount: 3120
  },
  {
    id: 'tut-3',
    title: 'Surfacing for Complex Curvatures',
    category: 'Surfacing',
    cadSystems: ['SolidWorks', 'Onshape', 'CATIA'],
    duration: '15:22',
    difficulty: 'Advanced',
    views: 5142,
    instructor: 'James L.',
    connections: ['tut-1', 'tut-5'],
    completedCount: 1980
  },
  {
    id: 'tut-4',
    title: 'Sheet Metal Bend Allowance & K-Factor',
    category: 'Sheet Metal',
    cadSystems: ['SolidWorks', 'Fusion 360', 'Inventor'],
    duration: '22:10',
    difficulty: 'Intermediate',
    views: 4312,
    instructor: 'Alex R.',
    connections: ['tut-2', 'tut-6'],
    completedCount: 2210
  },
  {
    id: 'tut-5',
    title: 'Advanced Assembly Constraints & Motion',
    category: 'Advanced Assemblies',
    cadSystems: ['SolidWorks', 'Onshape', 'Inventor', 'CATIA'],
    duration: '10:05',
    difficulty: 'Advanced',
    views: 3904,
    instructor: 'Sarah M.',
    connections: ['tut-3', 'tut-6'],
    completedCount: 1450
  },
  {
    id: 'tut-6',
    title: 'Tournament Speedrun Modeling Patterns',
    category: 'Speed Techniques',
    cadSystems: ['SolidWorks', 'Fusion 360', 'Onshape', 'Creo', 'Inventor', 'FreeCAD', 'CATIA'],
    duration: '25:40',
    difficulty: 'Expert',
    views: 7421,
    instructor: 'Toby Schnaars',
    connections: ['tut-4', 'tut-5'],
    completedCount: 2901
  }
];

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  { rank: 1, username: 'Alex R.', avatarUrl: 'AR', country: 'United States', cadPlatform: 'SolidWorks', time: '02:31.45', timeMs: 151450, streakDays: 142, challengesCompleted: 345, points: 9850 },
  { rank: 2, username: 'Priya K.', avatarUrl: 'PK', country: 'India', cadPlatform: 'Fusion 360', time: '02:45.62', timeMs: 165620, streakDays: 89, challengesCompleted: 312, points: 9120 },
  { rank: 3, username: 'Lukas M.', avatarUrl: 'LM', country: 'Germany', cadPlatform: 'Inventor', time: '02:48.09', timeMs: 168090, streakDays: 110, challengesCompleted: 298, points: 8990 },
  { rank: 4, username: 'Sarah M.', avatarUrl: 'SM', country: 'Canada', cadPlatform: 'Onshape', time: '02:51.34', timeMs: 171340, streakDays: 74, challengesCompleted: 320, points: 8750 },
  { rank: 5, username: 'Thabo N.', avatarUrl: 'TN', country: 'South Africa', cadPlatform: 'Creo Parametric', time: '03:02.18', timeMs: 182180, streakDays: 56, challengesCompleted: 189, points: 7600 },
  { rank: 6, username: 'Jean-Luc P.', avatarUrl: 'JP', country: 'France', cadPlatform: 'CATIA v5/v6', time: '03:07.41', timeMs: 187410, streakDays: 43, challengesCompleted: 145, points: 7120 },
  { rank: 7, username: 'Yuki T.', avatarUrl: 'YT', country: 'Japan', cadPlatform: 'SolidWorks', time: '03:11.85', timeMs: 191850, streakDays: 121, challengesCompleted: 280, points: 8400 },
  { rank: 8, username: 'Nikolai V.', avatarUrl: 'NV', country: 'Ukraine', cadPlatform: 'FreeCAD', time: '03:22.90', timeMs: 202900, streakDays: 32, challengesCompleted: 112, points: 5900 }
];

export const LIVE_TOURNAMENT: LiveTournament = {
  id: 't-turbo-showdown',
  title: 'Turbocharger Speedrun Showdown',
  status: 'UPCOMING',
  date: 'July 15, 2026',
  time: '18:00 UTC',
  participantsCount: 148,
  maxParticipants: 256,
  prizePool: '$1,500 + Custom SolidGold Trophy',
  description: 'A multi-bracket speedrun modeling event. Competitors go head-to-head on a previously unreleased complex casting part. Milliseconds will separate the victors!',
  bracket: {
    roundOf4: [
      'Alex R. (SolidWorks) vs. Sarah M. (Onshape)',
      'Priya K. (Fusion 360) vs. Lukas M. (Inventor)'
    ],
    finals: [
      'TBD vs. TBD'
    ],
    winner: 'TBD'
  }
};

// Improvement trend over weeks (average time in minutes for standard model)
export const PRACTICE_IMPROVEMENT_DATA = [
  { week: 1, avgMinutes: 18.5, completionRate: 42, activeMembers: 1200 },
  { week: 2, avgMinutes: 14.2, completionRate: 51, activeMembers: 1800 },
  { week: 4, avgMinutes: 9.8, completionRate: 64, activeMembers: 2400 },
  { week: 8, avgMinutes: 6.4, completionRate: 75, activeMembers: 3900 },
  { week: 12, avgMinutes: 4.1, completionRate: 83, activeMembers: 5200 },
  { week: 24, avgMinutes: 2.8, completionRate: 91, activeMembers: 8400 },
  { week: 52, avgMinutes: 1.9, completionRate: 96, activeMembers: 14200 }
];

// World coordinates for the interactive globe dots
export const WORLD_DOTS = [
  { country: 'United States', code: 'USA', members: 8450, lat: 40, lng: -100, x: 200, y: 150, topCAD: 'SolidWorks', activeSpeed: '02:31.45' },
  { country: 'Germany', code: 'DEU', members: 4210, lat: 51, lng: 10, x: 410, y: 120, topCAD: 'SolidWorks', activeSpeed: '02:48.09' },
  { country: 'India', code: 'IND', members: 5430, lat: 20, lng: 78, x: 580, y: 210, topCAD: 'Fusion 360', activeSpeed: '02:45.62' },
  { country: 'South Africa', code: 'ZAF', members: 1120, lat: -30, lng: 25, x: 440, y: 350, topCAD: 'Creo Parametric', activeSpeed: '03:02.18' },
  { country: 'Canada', code: 'CAN', members: 2100, lat: 56, lng: -106, x: 180, y: 100, topCAD: 'Onshape', activeSpeed: '02:51.34' },
  { country: 'Japan', code: 'JPN', members: 1840, lat: 36, lng: 138, x: 720, y: 160, topCAD: 'SolidWorks', activeSpeed: '03:11.85' },
  { country: 'Brazil', code: 'BRA', members: 1220, lat: -14, lng: -51, x: 290, y: 300, topCAD: 'Fusion 360', activeSpeed: '03:18.40' },
  { country: 'Australia', code: 'AUS', members: 980, lat: -25, lng: 133, x: 710, y: 330, topCAD: 'Inventor', activeSpeed: '03:24.12' }
];
