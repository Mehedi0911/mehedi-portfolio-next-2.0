export type GithubContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type GithubContributionsResponse = {
  total: Record<string, number>;
  contributions: GithubContributionDay[];
};

export const GITHUB_USERNAME = 'Mehedi0911';

const WEEKS_TO_SHOW = 53;

export function sumContributionTotals(total: Record<string, number>) {
  return Object.values(total).reduce((sum, count) => sum + count, 0);
}

/** Build GitHub-style week columns (Sun–Sat rows) from API days. */
export function buildContributionWeeks(contributions: GithubContributionDay[]) {
  const sorted = [...contributions].sort((a, b) => a.date.localeCompare(b.date));
  const maxDays = WEEKS_TO_SHOW * 7;
  const recent = sorted.slice(-maxDays);

  if (recent.length === 0) return [];

  const first = new Date(`${recent[0].date}T00:00:00Z`);
  const leadPadding = first.getUTCDay();

  const padded: GithubContributionDay[] = [
    ...Array.from({ length: leadPadding }, () => ({ date: '', count: 0, level: 0 })),
    ...recent,
  ];

  const weeks: GithubContributionDay[][] = [];

  for (let i = 0; i < padded.length; i += 7) {
    const week = padded.slice(i, i + 7);
    while (week.length < 7) {
      week.push({ date: '', count: 0, level: 0 });
    }
    weeks.push(week);
  }

  return weeks.slice(-WEEKS_TO_SHOW);
}

export function getContributionLevelClass(level: number) {
  const clamped = Math.min(4, Math.max(0, level));
  return [
    'bg-muted/25 border border-border/30',
    'bg-primary/20 border border-primary/25',
    'bg-primary/45 border border-primary/35',
    'bg-primary/70 border border-primary/50',
    'bg-primary border border-primary shadow-[0_0_10px_-4px_hsl(var(--primary)/0.8)]',
  ][clamped];
}
