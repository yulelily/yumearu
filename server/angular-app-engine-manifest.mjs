
export default {
  basePath: 'https://yulelily.github.io/yumearu',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
