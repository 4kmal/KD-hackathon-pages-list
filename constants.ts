import { TimelineItem, PrizeCategory, Rule } from './types';

export const COLORS = {
  red: '#c34a36',
  teal: '#4e8397',
  peach: '#ff8066',
  blue: '#008bc9',
  dark: '#444444',
  yellow: '#eab308'
};

export const TIMELINE: TimelineItem[] = [
  { time: '10:30 AM', event: 'Join #krackathon-build voice channel' },
  { time: '10:30 – 10:45 AM', event: 'Host introduction + rules + prompt reveal' },
  { time: '10:45 AM', event: '🚀 BUILD TIMER STARTS' },
  { time: '12:15 PM', event: 'Host check-in #1 (stay in voice)' },
  { time: '01:00 PM', event: 'Lunch/prayer break (45 min)' },
  { time: '01:45 PM', event: 'Resume building' },
  { time: '03:15 PM', event: 'Host check-in #2' },
  { time: '04:45 PM', event: 'Host check-in #3 + "15 minutes left!"' },
  { time: '05:00 PM', event: '⏰ SUBMISSION DEADLINE' },
  { time: '05:30 PM', event: 'Finalist demos + Winner announcements' },
];

export const PRIZES: PrizeCategory[] = [
  { title: 'Best Overall', description: 'Complete, polished, impressive', icon: '🏆' },
  { title: 'Best UX / Design', description: 'Clean UI, intuitive flow', icon: '🎨' },
  { title: 'Most Useful', description: 'Solves a real problem', icon: '💡' },
  { title: 'Most Creative', description: 'Unique idea or approach', icon: '✨' },
  { title: 'Best Beginner', description: 'Great effort for experience level', icon: '🌱' },
];

export const RULES: Rule[] = [
  { id: 1, title: 'Build during event', desc: 'No pre-built projects' },
  { id: 2, title: 'AI Allowed', desc: 'Cursor, Copilot, etc. (disclose usage)' },
  { id: 3, title: 'Solo Only', desc: 'No team collaboration' },
  { id: 4, title: 'Must Deploy', desc: 'Localhost doesn\'t count' },
  { id: 5, title: 'Be Respectful', desc: 'Follow Code of Conduct' },
  { id: 6, title: 'Stay Available', desc: 'Remain in voice channel' },
];