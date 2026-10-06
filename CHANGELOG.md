# nova-kit-react

## 1.1.1 (2026-10-06)

### Fixes

- Fixed CommonJS consumers: `require("nova-kit-react")` (and subpath entries) returned an empty module because CJS output used a `.cjs.js` extension in an ESM (`"type": "module"`) package. CJS builds now ship as `.cjs` with matching `.d.cts` types.

### Maintenance

- Updated all dependencies to their latest compatible minor/patch versions (no major upgrades)
- Migrated ESLint to the flat config format (`eslint.config.js`); `pnpm lint` works again

---

## 1.1.0 (2026-03-30)

### Features & Improvements

- Upgraded all dependencies to latest versions
- Added new UI components: combobox, field, direction, item, spinner
- Added form module with React Hook Form + Zod integration
- Added hooks module (`useMediaQuery`, `useMobile`)
- Added lib module with middleware and model utilities
- Improved exports with dedicated entry points (`components`, `lib`, `hooks`, `utils`)
- Migrated build to `tsup` for faster, cleaner output
- Full Storybook documentation at https://sebschaeffler.github.io/nova-kit-react

### Deprecations

- All versions prior to 1.1.0 are deprecated. Please upgrade.

---

## 1.0.0 (2025)

### Features

- First stable release
- Core UI components based on Radix UI and Tailwind CSS v4
- Chart components powered by Recharts
- Calendar and date picker via react-day-picker
- Carousel via embla-carousel-react
- Toast notifications via Sonner
- Drawer via Vaul
- Command palette via cmdk

---

## 0.5.0 (2025)

### Patch Changes

- Update dependencies to latest versions
- Fix minor bugs and improve documentation

---

## 0.4.0 (2024)

### Changes

- Initial public pre-release

## 0.0.1

### Patch Changes

- Initial nova-kit package (internal)
