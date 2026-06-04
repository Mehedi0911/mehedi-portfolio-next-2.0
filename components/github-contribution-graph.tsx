'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  buildContributionWeeks,
  getContributionLevelClass,
  GITHUB_USERNAME,
  sumContributionTotals,
  type GithubContributionsResponse,
} from '@/lib/github-contributions';
import { SOCIAL_LINKS } from '@/lib/social-links';

const MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function getMonthLabels(weeks: ReturnType<typeof buildContributionWeeks>) {
  const labels: { label: string; column: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, column) => {
    const firstDated = week.find((day) => day.date);
    if (!firstDated) return;

    const month = new Date(`${firstDated.date}T00:00:00Z`).getUTCMonth();
    if (month !== lastMonth) {
      labels.push({ label: MONTH_LABELS[month], column });
      lastMonth = month;
    }
  });

  return labels;
}

export function GithubContributionGraph() {
  const [data, setData] = useState<GithubContributionsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch('/api/github-contributions');
        if (!response.ok) throw new Error('fetch_failed');
        const json = (await response.json()) as GithubContributionsResponse;
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) setError('Could not load contribution graph right now.');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = useMemo(() => (data ? buildContributionWeeks(data.contributions) : []), [data]);
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);
  const totalContributions = data ? sumContributionTotals(data.total) : 0;
  const currentYear = new Date().getUTCFullYear();
  const yearTotal = data?.total[String(currentYear)] ?? 0;

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0 space-y-1">
          <p className="text-[11px] text-muted-foreground command-text sm:text-xs">
            $ git log --contributions --author={GITHUB_USERNAME}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-mono text-sm font-semibold text-foreground sm:text-base">
              Open-source activity
            </h3>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] text-primary transition-colors hover:border-primary/50 hover:bg-primary/20 command-text"
            >
              <Github size={11} />@{GITHUB_USERNAME}
            </a>
          </div>
        </div>

        {!isLoading && !error && data && (
          <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px]">
            <span className="rounded border border-border/50 bg-black/35 px-2 py-1 tabular-nums text-foreground command-text">
              {totalContributions} total
            </span>
            <span className="rounded border border-accent/30 bg-accent/10 px-2 py-1 tabular-nums text-accent command-text">
              {yearTotal} in {currentYear}
            </span>
          </div>
        )}
      </div>

      {isLoading && (
        <div
          className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-busy="true"
          aria-label="Loading contribution graph"
        >
          <div className="flex gap-[3px] sm:gap-1">
            {Array.from({ length: 53 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px] sm:gap-1">
                {Array.from({ length: 7 }).map((__, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="size-[9px] animate-pulse rounded-[2px] bg-muted/40 sm:size-[11px]"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <p className="rounded-lg border border-border/50 bg-black/30 px-3 py-2 text-xs text-muted-foreground command-text">
          {error}
        </p>
      )}

      {!isLoading && !error && data && weeks.length > 0 && (
        <>
          <div className="relative">
            <div className="mb-1 hidden h-4 sm:block">
              <div className="relative ml-7">
                {monthLabels.map(({ label, column }) => (
                  <span
                    key={`${label}-${column}`}
                    className="absolute top-0 text-[9px] text-muted-foreground command-text"
                    style={{ left: `${column * 15}px` }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="inline-flex min-w-max items-start gap-2">
                <div className="hidden flex-col justify-between py-[2px] text-[9px] leading-none text-muted-foreground command-text sm:flex sm:h-[calc(7*11px+6*3px)] sm:text-[10px]">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.45 }}
                  className="flex gap-[3px] sm:gap-1"
                  role="img"
                  aria-label={`GitHub contribution graph for ${GITHUB_USERNAME}, ${totalContributions} contributions in the last year`}
                >
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px] sm:gap-1">
                      {week.map((day, dayIndex) => (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          title={
                            day.date
                              ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`
                              : undefined
                          }
                          className={`size-[9px] rounded-[2px] sm:size-[11px] ${getContributionLevelClass(day.level)}`}
                        />
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-muted-foreground command-text sm:text-[11px]">
            <span>Last 53 weeks · synced via contributions API</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`size-[9px] rounded-[2px] sm:size-[10px] ${getContributionLevelClass(level)}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
