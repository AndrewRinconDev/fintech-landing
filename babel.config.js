module.exports = {
  presets: [
    ['@babel/preset-env', { 
      targets: { 
        node: 'current' 
      },
      modules: 'commonjs'
    }],
    ['@babel/preset-react', { 
      runtime: 'automatic' 
    }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      regenerator: true
    }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    'babel-plugin-styled-components'
  ]
};