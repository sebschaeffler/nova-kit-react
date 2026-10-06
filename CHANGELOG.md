# nova-kit-react

## 2.0.0 (2026-10-06)

### Breaking Changes

- **`react-day-picker` upgraded to v10.** `Calendar` forwards DayPicker props, so the props removed in v10 are no longer accepted:
  - `fromDate` / `toDate` → `hidden={{ before: date }}` / `hidden={{ after: date }}` (optionally with `startMonth` / `endMonth`)
  - `fromMonth` / `toMonth` → `startMonth` / `endMonth`
  - `fromYear` / `toYear` → `startMonth={new Date(year, 0)}` / `endMonth={new Date(year, 11)}`
  - `initialFocus` → `autoFocus`
  - `classNames` keys: `table` → `month_grid`, `nav_button` → `button_previous` / `button_next`, `day_selected` → `selected`
  - See the [DayPicker v10 upgrade guide](https://daypicker.dev/upgrading).
- **Removed unused runtime dependencies:** `uuid`, `date-fns`, `zod` and `@hookform/resolvers` are no longer installed with the library. If your app imports them, add them to your own `package.json`.

### Changes

- `lucide-react` upgraded to v1. Icons rendered by components now set `aria-hidden` by default.
- `useMediaQuery` and `useIsMobile` now use `useSyncExternalStore`: they return the correct value on the first client render (still `false` during SSR).
- `Carousel` now also unsubscribes its `reInit` listener on cleanup.

### Maintenance

- Storybook 10, Vite 8, TypeScript 6, ESLint 10 (with React Compiler lint rules), Faker 10, postcss-cli 12
- Developing the library now requires Node.js 22+
- Security: resolved Dependabot alerts (patched example apps, removed stale `package-lock.json`, `esbuild` >= 0.28.1 override)

---

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
