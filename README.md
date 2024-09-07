# Monorepo template

## DevLog Specs

- Package Manager: pnpm v9.x.x
- Mono Management: [Turborepo](https://turbo.build/repo/docs) v2.x.x
- eslint v8.x.x
- prettier v3.x.x
- husky v9.x.x
- lint-staged v15.x.x
- commitlint v19.x.x

## Prepared to run server

### corepack

```bash
corepack enable
```

- to install pnpm by using corepack

```bash
corepack use pnpm@latest
```

### Install Package modules

```bash
pnpm install
```

### Run Server

```bash
pnpm run <script_command> --filter <package_name>
```

## Manage Packages

### Update Package

```bash
pnpm update --latest --recursive
```
