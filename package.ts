import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  external:["@solenopsys/converged-reactive"],
  plugins: [
    dts()
  ],
})
