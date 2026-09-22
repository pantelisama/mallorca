# Mallorca Agent

This is the backend for the **+ Add** button in the Mallorca planner.

## What it does

- Accepts natural-language requests such as:
  - "Add a local restaurant in Sóller for Saturday"
  - "Find a hotel in Pollença for Sunday"
  - "Add a viewpoint near Formentor"
  - "Remove Caimari"
- Uses the free/open-source **gosom/google-maps-scraper** Docker image for Google Maps data.
- Stores agent-added places in `data/agent-items.json`.
- Commits that file to GitHub so GitHub Pages picks up the change.
- Keeps Google Maps URL, coordinates, rating, review count, thumbnail, website and a small review sample when returned by the scraper.

## Run locally

Requirements: Node 20+, Docker, and a GitHub token with permission to write this repository.

1. Copy `.env.example` to `.env` and set `GITHUB_TOKEN`.
2. Start the backend:

```bash
npm start
```

The scraper itself runs through Docker, so the backend process needs access to the Docker socket.

The browser app expects the agent at `http://localhost:8787` while developing locally. For the published site, set `window.MALLORCA_AGENT_URL` in `index.html` to the deployed backend URL.

## Data source / legal note

The scraper is MIT-licensed and documented as free/open-source, but its own project warns that unauthorised scraping can violate terms of service. Use it responsibly and check the terms applicable to your use. Google-hosted photos/review text may also have reuse/attribution restrictions; the app stores source metadata and does not claim ownership of scraped content.

## Search enrichment

SearchForge/SearXNG can be added later as a second enrichment layer for official websites, local guides and other public sources. The frontend/backend boundary is intentionally kept simple so that layer can be added without changing the planner UI.
