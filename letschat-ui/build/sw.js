if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
   
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([{"revision":"7d3c6607dd94fed48a749e82b9a15931","url":"images/icons/android-icon-144x144.png"},{"revision":"f9766f0ea2bbf5835e3915ae42d212a1","url":"images/icons/android-icon-192x192.png"},{"revision":"b8c35b1b16e036754f8d4646466228c4","url":"images/icons/android-icon-36x36.png"},{"revision":"0fa5c4c1e5ddcfb8f2876020e73c7dc8","url":"images/icons/android-icon-48x48.png"},{"revision":"58c58685df5df4ab850ac11d8ab2693d","url":"images/icons/android-icon-512x512.png"},{"revision":"02c0af1e7ff18432b09dde8e6919f0b2","url":"images/icons/android-icon-72x72.png"},{"revision":"ea01c3f831bc3ba6116481382c554431","url":"images/icons/android-icon-96x96.png"},{"revision":"dbb1400ab27d27efb4cc1c05cf02e2a9","url":"images/icons/apple-icon-114x114.png"},{"revision":"a99b4ede59a4f795ce62475e771e7d88","url":"images/icons/apple-icon-120x120.png"},{"revision":"7d3c6607dd94fed48a749e82b9a15931","url":"images/icons/apple-icon-144x144.png"},{"revision":"8c305b18ca07b2f3b2004a4915a498a0","url":"images/icons/apple-icon-152x152.png"},{"revision":"b1d1cd3457c96e5b047985bb5284486c","url":"images/icons/apple-icon-180x180.png"},{"revision":"946dbb60e4796fbb01620b75b14011fe","url":"images/icons/apple-icon-57x57.png"},{"revision":"c1db4b77e5ab2d59d657d1a079310313","url":"images/icons/apple-icon-60x60.png"},{"revision":"02c0af1e7ff18432b09dde8e6919f0b2","url":"images/icons/apple-icon-72x72.png"},{"revision":"8e9c71762d30da1611f651c5444aa8db","url":"images/icons/apple-icon-76x76.png"},{"revision":"8f0493b27a079af2455605145f4690e1","url":"images/icons/apple-icon-precomposed.png"},{"revision":"8f0493b27a079af2455605145f4690e1","url":"images/icons/apple-icon.png"},{"revision":"52f2281042c71d57753d90af9664d4a9","url":"images/icons/favicon-16x16.png"},{"revision":"8bee64a3ce2f2ce6adc05024a3787b4a","url":"images/icons/favicon-32x32.png"},{"revision":"ea01c3f831bc3ba6116481382c554431","url":"images/icons/favicon-96x96.png"},{"revision":"7d3c6607dd94fed48a749e82b9a15931","url":"images/icons/ms-icon-144x144.png"},{"revision":"e36c78c5a4e6d6d927db925055bbed05","url":"images/icons/ms-icon-150x150.png"},{"revision":"08e2ed6c6cd67ea6ce57de5317026cac","url":"images/icons/ms-icon-310x310.png"},{"revision":"35062ac3b5bf46e36e88920e9649a360","url":"images/icons/ms-icon-70x70.png"},{"revision":"36f9471be029fbb22a9290b7adcee6fb","url":"index.html"},{"revision":"bb6635d2dbe0809d6c5d8f33b2a22e09","url":"static/css/7.63b2bfc7.chunk.css"},{"revision":"143d361dc9fdd638a197229b3b781dee","url":"static/css/main.4645f926.chunk.css"},{"revision":"9c6c4577182ca2d69a690f2b00cf53d7","url":"static/js/0.950040b9.chunk.js"},{"revision":"2538e130a1164602f10a9cb981992a21","url":"static/js/7.b6cf4305.chunk.js"},{"revision":"e52be8860dd2df7dd79a324783867704","url":"static/js/8.9474172a.chunk.js"},{"revision":"7c9e582148a211993cc6a0cbd1263918","url":"static/js/Home.ba64280f.chunk.js"},{"revision":"df24772e4b56349629cb94010b61897f","url":"static/js/Login.ee223e90.chunk.js"},{"revision":"85f001702d1d518b345140554917fa4d","url":"static/js/main.4bf0d86b.chunk.js"},{"revision":"45a4bed2789a5670d6e479c0cc88b60a","url":"static/js/PageNotFound.a40da375.chunk.js"},{"revision":"47250e03e95999166a0d8bccca02d4fc","url":"static/js/runtime-main.1b9eb331.js"},{"revision":"d6bbbe950b3ef8c6e888efacda20cb5d","url":"static/js/Signup.d5124e0e.chunk.js"},{"revision":"023b3876bb73aa541367fc40a193d2b7","url":"styles/bootstrap.min.css"},{"revision":"5cf2832a36ef33bc80c2b21498f73263","url":"styles/custom.css"},{"revision":"2d9bc1304968c1aa38c4da29614ae000","url":"styles/custom.min.css"},{"revision":"c7eaab46053234d0fef180d7ed4e3123","url":"styles/style.css"},{"revision":"c506f7165057511cc6108250dc7ff001","url":"styles/style.min.css"}]);
   
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