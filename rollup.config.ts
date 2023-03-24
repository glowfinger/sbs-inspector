import replace from '@rollup/plugin-replace';

plugins: [

replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
       include: '**/node_modules/**',
    })
]