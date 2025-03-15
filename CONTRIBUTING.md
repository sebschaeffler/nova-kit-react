# Contributing to the project

Please follow the guidelines below.

## Install

```shell
npm install
```

## Build and publish

```shell
npm run build
```

Publish beta version:

```shell
npm run pub:beta
```

Publish release version:

```shell
npm run pub:release
```

## Storybook

```shell
npm run storybook
```

## Examples

Two example projects are included in the repository:

- [next-tailwind-app](examples/next-tailwind-app)`: a NextJS project that uses the
  library.
- [vite-tailwind-app](examples/vite-tailwind-app): a Vite Vue project that uses the
  library.

### Import library locally without publishing

From the root of the library:

```shell
npm link
```

From the example project:

```shell
npm link nova-kit-react
```
