export interface TimelineItem {
  time: string;
  event: string;
}

export interface PrizeCategory {
  title: string;
  description: string;
  icon?: string;
}

export interface Rule {
  id: number;
  title: string;
  desc: string;
}

export interface ContactMethod {
  platform: string;
  value: string;
}

export type AccentColor = 'k-red' | 'k-teal' | 'k-peach' | 'k-blue' | 'k-yellow';