// src/hooks/useGitHubRepos.js
// ─────────────────────────────────────────────────────────────
// Fetches live repos + profile from GitHub public API.
// No API key needed for public repos (60 req/hr free).
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

// 👇 ONLY THING YOU NEED TO CHANGE
export const GITHUB_USERNAME = "sumitDon47";

// Repos to always show first (by exact repo name). Leave [] for auto-sort.
const PINNED = [];

// Repo names to hide from the grid (old/irrelevant ones)
const EXCLUDE = [];

// Max repos shown in projects grid
const MAX_REPOS = 10;

export function useGitHubRepos() {
  const [repos,   setRepos]   = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const sig = controller.signal;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch repos + profile in parallel
        const [repoRes, profileRes] = await Promise.all([
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=public`,
            { signal: sig, headers: { Accept: "application/vnd.github.mercy-preview+json" } }
          ),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { signal: sig }),
        ]);

        if (!repoRes.ok) throw new Error(`GitHub API ${repoRes.status}`);

        const allRepos  = await repoRes.json();
        const profileData = profileRes.ok ? await profileRes.json() : null;

        // Filter exclusions
        let filtered = allRepos.filter(r => !EXCLUDE.includes(r.name));

        // Sort: pinned first → then by stars → then by updated_at
        filtered.sort((a, b) => {
          const ai = PINNED.indexOf(a.name);
          const bi = PINNED.indexOf(b.name);
          if (ai !== -1 || bi !== -1) {
            if (ai !== -1 && bi === -1) return -1;
            if (bi !== -1 && ai === -1) return 1;
            return ai - bi;
          }
          if (b.stargazers_count !== a.stargazers_count)
            return b.stargazers_count - a.stargazers_count;
          return new Date(b.updated_at) - new Date(a.updated_at);
        });

        setRepos(filtered.slice(0, MAX_REPOS));
        setProfile(profileData);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  // Derived stats — used in Hero counter bar
  const stats = {
    count:     repos.length,
    stars:     repos.reduce((s, r) => s + r.stargazers_count, 0),
    forks:     repos.reduce((s, r) => s + r.forks_count, 0),
    languages: [...new Set(repos.map(r => r.language).filter(Boolean))],
  };

  return { repos, profile, stats, loading, error };
}
