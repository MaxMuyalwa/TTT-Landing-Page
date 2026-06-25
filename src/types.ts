export interface CadPlatform {
  id: string;
  name: string;
  icon: string;
  share: number; // Percentage usage in community
  avgCompletionRate: number; // Percentage
  avgSpeedSeconds: number; // Average modeling speed for standard baseline challenge
  topModeler: string;
  color: string;
}

export interface Challenge {
  id: string;
  name: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
  completions: number;
  avgTime: string; // MM:SS
  avgTimeSeconds: number;
  previewSvg: string; // Custom inline vector representation of CAD model
  boundingBox: string; // e.g. "120mm x 80mm x 45mm"
  weightGrams: number; // e.g. 342g
  material: string; // e.g. "Aluminium 6061-T6"
  features: string[]; // e.g. ["Holes", "Fillets", "Loft", "Shell"]
}

export interface TutorialNode {
  id: string;
  title: string;
  category: 'Fundamentals' | 'Parametric Equations' | 'Surfacing' | 'Sheet Metal' | 'Advanced Assemblies' | 'Speed Techniques';
  cadSystems: string[];
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  views: number;
  instructor: string;
  connections: string[]; // IDs of related tutorial nodes
  completedCount: number;
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  avatarUrl: string;
  country: string;
  cadPlatform: string;
  time: string; // MM:SS.CC
  timeMs: number;
  streakDays: number;
  challengesCompleted: number;
  points: number;
}

export interface LiveTournament {
  id: string;
  title: string;
  status: 'LIVE' | 'UPCOMING' | 'COMPLETED';
  date: string;
  time: string;
  participantsCount: number;
  maxParticipants: number;
  prizePool: string;
  description: string;
  bracket: {
    roundOf4: string[];
    finals: string[];
    winner: string;
  };
}
