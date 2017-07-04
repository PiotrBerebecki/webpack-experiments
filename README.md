# Webpack experiments

## Notes:

- Run `webpack --display-error-details` to see error details

- In experiment 02 `webpack -p` reduced the size of `bundle.js` from 18kB to 6kB

- `path.join` vs `path.resolve`

  `path.join` - joins all the arguments together and normalize the resulting path
  
  `path.resolve` - resolves to an absolute path

- `extract-text-webpack-plugin` moves all the required css modules in entry chunks into a separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file (styles.css). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle.

- See the breakdown of sizes of your dependencies with [webpack-visualizer](https://github.com/chrisbateman/webpack-visualizer)
