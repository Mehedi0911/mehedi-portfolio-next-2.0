import { NextResponse } from 'next/server';
import type { GithubContributionsResponse } from '@/lib/github-contributions';
import { GITHUB_USERNAME } from '@/lib/github-contributions';

const API_BASE = 'https://github-contributions-api.jogruber.de/v4';

export const revalidate = 3600;

export async function GET() {
  try {
    const response = await fetch(`${API_BASE}/${GITHUB_USERNAME}`, {
      next: { revalidate },
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch GitHub contributions' },
        { status: response.status },
      );
    }

    const data = (await response.json()) as GithubContributionsResponse;

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return NextResponse.json({ error: 'GitHub contributions unavailable' }, { status: 502 });
  }
}
