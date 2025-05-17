
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://yulelily.github.io/yumearu/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/yumearu"
  },
  {
    "renderMode": 2,
    "route": "/yumearu/post/my-vow-to-my-liege"
  },
  {
    "renderMode": 2,
    "route": "/yumearu/lib"
  },
  {
    "renderMode": 2,
    "route": "/yumearu/usr"
  },
  {
    "renderMode": 2,
    "route": "/yumearu/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7620, hash: '2f201dcfecf0da4f6ece4e90455d71cc002cafbc5f68585ccd3a03bda068a2f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3176, hash: 'c97f82917505bcb7c3732d5f0ea96b2e6f443979040fce7f5a6911ede035398b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30772, hash: '917349510bb457903fbc5c9d42553ecb4e8a757e84f9d9c86e09396559d1bb81', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'usr/index.html': {size: 30041, hash: '50d0c981e73f861788a6338fff1a9d396cf22e809a3a8d343a5f5bf01ee93bde', text: () => import('./assets-chunks/usr_index_html.mjs').then(m => m.default)},
    'post/my-vow-to-my-liege/index.html': {size: 29677, hash: 'e77bc2dcfac2e2c894b1b58bbd9271d01ff5163cc309b30a0e0f4703f5821e2b', text: () => import('./assets-chunks/post_my-vow-to-my-liege_index_html.mjs').then(m => m.default)},
    'lib/index.html': {size: 29597, hash: '2eb2e62d7e09aa02c441767207733ba4e3e976ef34a89be393a18787ae0d20d3', text: () => import('./assets-chunks/lib_index_html.mjs').then(m => m.default)},
    'styles-GBSCJDHT.css': {size: 10263, hash: 'ZEqUKxvfFs4', text: () => import('./assets-chunks/styles-GBSCJDHT_css.mjs').then(m => m.default)}
  },
};
