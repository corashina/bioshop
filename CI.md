# Continuous Integration (CI) Setup

This project uses GitHub Actions for automated testing, linting, and building on every push and pull request.

## Workflows

### 1. Basic CI (`ci.yml`)
Runs on every push to `main`/`master` and pull requests.

**What it does:**
- ✅ Lints code with ESLint
- ✅ Runs all tests with Vitest
- ✅ Generates coverage reports
- ✅ Builds the project
- ✅ Uploads coverage and build artifacts

### 2. Matrix CI (`ci-matrix.yml`)
More comprehensive testing across multiple Node.js versions.

**What it does:**
- ✅ Tests against Node.js 18, 20, and 22
- ✅ Runs tests and coverage on all versions
- ✅ Builds project after all tests pass
- ✅ Uploads build artifacts

## Workflow Triggers

Both workflows trigger on:
- **Push** to `main` or `master` branches
- **Pull Request** to `main` or `master` branches

## Artifacts

The CI generates and stores:
- **Coverage Report**: HTML coverage report in `coverage/` directory
- **Build Files**: Production build in `dist/` directory
- **Retention**: Artifacts are kept for 30 days

## Local CI Checks

Before pushing, run these commands locally:

```bash
# Install dependencies
npm ci

# Lint code
npm run lint

# Run tests
npm run test:run

# Check coverage
npm run test:coverage

# Build project
npm run build
```

## CI Status Badge

Add this to your README.md to show CI status:

```markdown
![CI](https://github.com/{username}/{repo-name}/workflows/CI/badge.svg)
```

Replace `{username}` and `{repo-name}` with your actual GitHub username and repository name.

## Coverage Badge

For coverage badges, consider using:
- [Codecov](https://about.codecov.io/)
- [Coveralls](https://coveralls.io/)

## Troubleshooting

### Common Issues

1. **Tests failing in CI but passing locally**
   - Check for environment-specific code
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Build failing**
   - Check for TypeScript errors
   - Ensure all imports are correct
   - Verify Vite configuration

3. **Linting errors**
   - Run `npm run lint` locally first
   - Check ESLint configuration
   - Fix any auto-fixable issues with `npm run lint -- --fix`

### Debugging

1. Check the **Actions** tab on GitHub
2. Click on the failed workflow
3. Click on the failed job
4. Check the logs for specific error messages

## Performance

- **Caching**: npm dependencies are cached for faster builds
- **Parallel Jobs**: Matrix testing runs in parallel
- **Artifact Retention**: 30-day retention to balance storage and access

## Security

- **Dependency Scanning**: Consider adding `npm audit` to your workflow
- **Secrets**: Use GitHub Secrets for sensitive data (API keys, etc.)
- **Permissions**: Workflows run with minimal required permissions

## Customization

### Adding More Checks

```yaml
- name: Security audit
  run: npm audit --audit-level moderate

- name: Type check
  run: npm run type-check

- name: Bundle size check
  run: npm run bundle-size
```

### Environment-Specific Workflows

Create separate workflows for:
- **Staging**: Deploy to staging environment
- **Production**: Deploy to production
- **Release**: Create releases and tags

### Notifications

Add notifications to Slack, Discord, or email:

```yaml
- name: Notify on failure
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: failure
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
``` 