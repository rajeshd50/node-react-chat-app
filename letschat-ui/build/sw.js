if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
   
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([{"revision":"7d3c6607dd94fed48a749e82b9a15931","url":"images/icons/android-icon-144x144.png"},{"revision":"f9766f0ea2bbf5835e3915ae42d212a1","url":"images/icons/android-icon-192x192.png"},{"revision":"b8c35b1b16e036754f8d4646466228c4","url":"images/icons/android-icon-36x36.png"},{"revision":"0fa5c4c1e5ddcfb8f2876020e73c7dc8","url":"images/icons/android-icon-48x48.png"},{"revision":"58c58685df5df4ab850ac11d8ab2693d","url":"images/icons/android-icon-512x512.png"},{"revision":"02c0af1e7ff18432b09dde8e6919f0b2","url":"images/icons/android-icon-72x72.png"},{"revision":"ea01c3f831bc3ba6116481382c554431","url":"images/icons/android-icon-96x96.png"},{"revision":"dbb1400ab27d27efb4cc1c05cf02e2a9","url":"images/icons/apple-icon-114x114.png"},{"revision":"a99b4ede59a4f795ce62475e771e7d88","url":"images/icons/apple-icon-120x120.png"},{"revision":"7d3c6607dd94fed48a749e82b9a15931","url":"images/icons/apple-icon-144x144.png"},{"revision":"8c305b18ca07b2f3b2004a4915a498a0","url":"images/icons/apple-icon-152x152.png"},{"revision":"b1d1cd3457c96e5b047985bb5284486c","url":"images/icons/apple-icon-180x180.png"},{"revision":"946dbb60e4796fbb01620b75b14011fe","url":"images/icons/apple-icon-57x57.png"},{"revision":"c1db4b77e5ab2d59d657d1a079310313","url":"images/icons/apple-icon-60x60.png"},{"revision":"02c0af1e7ff18432b09dde8e6919f0b2","url":"images/icons/apple-icon-72x72.png"},{"revision":"8e9c71762d30da1611f651c5444aa8db","url":"images/icons/apple-icon-76x76.png"},{"revision":"8f0493b27a079af2455605145f4690e1","url":"images/icons/apple-icon-precomposed.png"},{"revision":"8f0493b27a079af2455605145f4690e1","url":"images/icons/apple-icon.png"},{"revision":"52f2281042c71d57753d90af9664d4a9","url":"images/icons/favicon-16x16.png"},{"revision":"8bee64a3ce2f2ce6adc05024a3787b4a","url":"images/icons/favicon-32x32.png"},{"revision":"ea01c3f831bc3ba6116481382c554431","url":"images/icons/favicon-96x96.png"},{"revision":"7d3c6607dd94fed48a749e82b9a15931","url":"images/icons/ms-icon-144x144.png"},{"revision":"e36c78c5a4e6d6d927db925055bbed05","url":"images/icons/ms-icon-150x150.png"},{"revision":"08e2ed6c6cd67ea6ce57de5317026cac","url":"images/icons/ms-icon-310x310.png"},{"revision":"35062ac3b5bf46e36e88920e9649a360","url":"images/icons/ms-icon-70x70.png"},{"revision":"f9bc44df9acde0e7534e0e812d9981ba","url":"index.html"},{"revision":"bb6635d2dbe0809d6c5d8f33b2a22e09","url":"static/css/7.63b2bfc7.chunk.css"},{"revision":"2b318ca5a691019700684dc7c97ea8c3","url":"static/css/main.d6aacba7.chunk.css"},{"revision":"13b8b6ac0189cc4098a9c9146193e3c7","url":"static/js/0.b7718513.chunk.js"},{"revision":"9a8ab0cf14d2bd2542e7a5ee9890f6e5","url":"static/js/7.d1a1a292.chunk.js"},{"revision":"ede6e00ce598772615e616a6dc8d7f3e","url":"static/js/8.100f382e.chunk.js"},{"revision":"9089391b3b1a26bbecadbef2bdc4979b","url":"static/js/Home.692a4218.chunk.js"},{"revision":"120aa1dee466fac13b2940cabcc09b9a","url":"static/js/Login.512eeb6c.chunk.js"},{"revision":"370f0a4d21fc64a45d7af1b779662c70","url":"static/js/main.9dc653ef.chunk.js"},{"revision":"f8e3ccfb2b8643c4b48633b4319d9a68","url":"static/js/PageNotFound.ec72aedb.chunk.js"},{"revision":"ca57f0469b33df257e66d909e141c5d2","url":"static/js/runtime-main.3ec85418.js"},{"revision":"b00d35b363b5f81337b5be43de7131ce","url":"static/js/Signup.0bc756b9.chunk.js"},{"revision":"023b3876bb73aa541367fc40a193d2b7","url":"styles/bootstrap.min.css"},{"revision":"5cf2832a36ef33bc80c2b21498f73263","url":"styles/custom.css"},{"revision":"2d9bc1304968c1aa38c4da29614ae000","url":"styles/custom.min.css"},{"revision":"c7eaab46053234d0fef180d7ed4e3123","url":"styles/style.css"},{"revision":"c506f7165057511cc6108250dc7ff001","url":"styles/style.min.css"}]);
   
  /* custom cache rules*/
  workbox.routing.registerNavigationRoute('/index.html', {
        blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
      });
   
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|ico)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
        new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
        ],
    }));

    workbox.routing.registerRoute(
        /\.(?:js|css|json|html|xml)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'assets',
            plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 100,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
            }),
            ],
        }));
    workbox.routing.registerRoute(
        /\/api\/v1/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'api-cache',
            plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
                headers: {
                'X-Is-Cacheable': 'true',
                },
            })
            ]
        })
    );
    workbox.routing.registerRoute(
        /\.(?:eot|svg|ttf|woff)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'fonts',
            plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 100,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
            }),
            ],
        }));
} else {
    console.log('Workbox could not be loaded. No Offline support');
}
}