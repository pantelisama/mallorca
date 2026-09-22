# Mallorca planner

## Development

Run once after cloning to enable the local pre-commit hook:

```bash
npm run setup-hooks
```

The hook runs `npm test` before every commit, so syntax and planner smoke tests catch common regressions before they reach GitHub Actions.

The GitHub Actions workflow runs the same tests before deploying to GitHub Pages.
