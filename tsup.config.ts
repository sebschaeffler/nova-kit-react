import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    'components': 'src/components/index.ts',
    'lib': 'src/lib/index.ts',
    'hooks': 'src/hooks/index.ts',
    'utils': 'src/utils/index.ts'
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.es.js' : '.cjs.js',
  }),
  // Exclude form folder from build
  external: ['@/form/*', '@/form']
})
