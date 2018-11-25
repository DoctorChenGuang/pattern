const rollup = require('rollup');
const resolveNode = require("rollup-plugin-node-resolve");
const typescript = require('rollup-plugin-typescript2');
const tscompile = require('typescript');

async function build(){
  const rollupConfig = {
    input: './src/strategy/main.ts',
    output: {
      file: './example/strategy/dist.js',
      format: 'umd',
      name: 'pattern'
    },
    plugins: [
      typescript({typescript: tscompile}),
      resolveNode({
        extensions: ['.ts']
      })
    ],
  };

  const bundle = await rollup.rollup(rollupConfig);
  await bundle.generate(rollupConfig.output);
  await bundle.write(rollupConfig.output);
}

build();