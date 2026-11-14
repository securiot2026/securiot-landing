# Operations

## CI/CD

| Workflow | Trigger | What it does |
| --- | --- | --- |
| `.github/workflows/ci.yml` | push and pull request to `develop` and `main` | Validates `index.html` with htmlhint, checks that every local asset referenced by the page, the web manifest and the stylesheet exists, checks that `js/i18n.js` has the same keys in ES and EN, enforces the 400 KB per image budget under `assets/`, and builds the nginx Docker image. |
| `.github/workflows/cd.yml` | push to `develop` | Calls the Dokploy deploy webhook so the `securiot-landing` application rebuilds from `develop`. |

Secrets used (repository secrets, names only): `DOKPLOY_DEPLOY_HOOK`.

Run the same checks locally:

```bash
npx htmlhint index.html
node scripts/check-assets.mjs
node scripts/check-i18n.mjs
scripts/check-image-budget.sh 400
docker build -t securiot-landing .
```

The Dokploy application (`5dQGHE4fd8YQ35gd3oK1l`) builds the `develop` branch. The webhook only deploys when the request carries `X-GitHub-Event: push` and `ref: refs/heads/develop`, which `cd.yml` already sends.
