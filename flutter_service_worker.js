'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c7f61fe321dd2a634a10a9e297d24f62",
"index.html": "129196092304c7bee339d72bdccea9fa",
"/": "129196092304c7bee339d72bdccea9fa",
"main.dart.js": "1be71dd95d4ba7cac08705924f3679e5",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f5427cc4a22a2518e8e0f528e85fa2eb",
"readme.txt": "fbaea222899dcf11b63bf9057bfc169b",
".git/config": "68bfe4465a04edbbc55200e1f3ef6d67",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/74ace16c816d9cd75825e1b57a309a308926ee": "e953f9f7b8113004d1d42a3fae7a73d0",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/5f/fc72bd38b1299268bf1e3eb4bac1a71312c69f": "a65ef19fb817773d229c9d805451ea70",
".git/objects/9d/2573b35a7ed0fdadc7b20a5c69f8dee0a350dc": "1f80b610c980851cae4603a2c63d129b",
".git/objects/02/c64233a075e9c07a9627885caf2342c7352dc3": "37b57973a9cf271c525ea9e742669e87",
".git/objects/d9/50388316ecc5d663cf67dfd86f66f91972944a": "14ceeb4edf2c40ab33cd399c1181e8a6",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/fb86fc88175b25a36c6f2b0c710d23a0f94b49": "c44e502a61f0cf4f1743b040ea700707",
".git/objects/d0/8220efab282e57cbceed9e905cee0657e77dab": "8643cb632f9cd9430e9820a46addaa0d",
".git/objects/be/20b7d57b46fe84cc92e27c893dcb26fa3bcc8e": "dc711cc2d7ab1ec518dcf28dcc34a930",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/8d76f96ca66e6403efba594090f2ca283d3f13": "48aa6c987e38bcc0d8668f5a46f0499d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/c2ad0126f8c377bcc01acc706b986e90bee122": "b62b4bf43a1ab96c14abb9edca280b73",
".git/objects/f3/6fbadd92f69e1a921a42c97b4b2a8e820dbf1c": "1f5cca1e0da5c09907c78a3a18506e0a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/8caf6d7588f5019f6c2d544e905cb1d46a9c53": "9f3df0c82c853d9009df87a8c719aaf1",
".git/objects/c6/8f61d487d6f57b4ac6c4eaa13e68d8e212a11e": "e5b188fb8a7bb1789119511c0a8cc42d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/04d6828c38acc30bfcb940c43c4fc8f08e64da": "b288cb46d2d20e7213888b1b48783297",
".git/objects/16/2bdec4be6f160bffb66a937504013a90ddcad6": "e906f67268ff3943d94063651f8566c0",
".git/objects/80/1faacdbea1fa7b4d4d9c18332ce986028a013c": "956fc725bcefbf80adf6da5eb59287fd",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c96041366641eae70d99f023060dc1874dee55": "27ae9c31251ffc5e8dcd37eeb3ac31f3",
".git/objects/4c/982498c039b7dbec79e9046e851ad2fc36d557": "82ecc2be97fafffe0702e4102fa53783",
".git/objects/26/cd6312621a328577ffc659528dd111cfa0b13f": "3d025caa1a357a1b933887e231185843",
".git/objects/2a/44d92d5a28d8431381a81584fb8602678f114b": "c06156f77ddafb963d7f3325c4d6883c",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/d8d810b20858ff65dd8dbce03548b889e782e9": "2687465a148be85aa997f77ffb60ce28",
".git/objects/07/a4882a085166c39178dea4d2a0469a77f55f1d": "9eec08009ba65cec26a35e93da55f8a7",
".git/objects/00/ea0b118bb2f54a8936224bc70760a20bd3d64b": "e2f2e052a4fba9d353324547a6519c19",
".git/objects/5c/91fb10639dfc2b95a971fbeaea8b20cc09fc41": "57b5dc0709186d07980f8e3573b3f80a",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/3a/c72b69c7dbd1f5d6d25c52b378b15841cf5148": "07e84d5b9551280c4c32a6cbb1f815d9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/820f91e644b6cbdd7e16342ee70555c1272b84": "7d83e3a67271cf51b9e5d727e30fe00f",
".git/objects/06/ba11f06cfcd38d5a5e0b5d7b6f92ce2d2fd599": "1f0e8d96ba69e191228e6beda073e6da",
".git/objects/06/83f7a1406f3beabdcc035affc7b8b5af2f6e58": "5d0e87ddec82e279fdb2e4ecbc9e37bc",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/9b43ab6e3c18930cea69c61bf108a7283eadf3": "d466835128baf718311164b1668771f6",
".git/objects/55/756a4f40ccf092558dcaca65cc74dd024e9f2c": "c2122876b0dd34bb4bb16a2b2d553593",
".git/objects/55/9fcf09e6e91609668ccc6f40623a3c6e596ff8": "86f2fa4b4d12dd276f566c9850c82dda",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/dd/60d6b5af68ddf3a9ab4105c765e103978653ff": "f0b8bfaa877ab8fc90112d8aa3fb117e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/b6bf931a1593df6f60f6b8b806283a37d366cf": "8a8c58eaad4bc4a8beaa009989d690a1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/98e0c3d47222db1d70b159d697e79858af1896": "b0749a17891a2da08c479f74b2484bf6",
".git/objects/ea/402b427b745d0122026fd5a9d7a93cc3fbaca6": "3b5b8a4318a34e48e9666cea7b63368b",
".git/objects/e1/b77c7a38d55422140507e7acc9dd4b2a4b1d77": "a6669fa0e1f2785515e7e3d8e0d948ac",
".git/objects/e1/ec170bd8f808bc2e35cbe08c7f9fdd0ef5169d": "0bca9eb334e0d5e22cc0c55786ed6be9",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/1d0807709fdc63dafb1e4c171caf2fec6aede8": "71f640a879efcd1dad14a8d57266d364",
".git/objects/e8/9f34f333f06a851a2bf76cdb8f427ee2928362": "e6682b697c318e4cf00d85dadf61ca82",
".git/objects/c5/b0aa15972563ae52967096b6cf9a6971547d4d": "3a5ad765333869ce7aa534f3a1d6f033",
".git/objects/c2/a8cf0a189b0b1c84016b8375da3b910a1916c4": "ef79ea2c281b5b74e879b71724d83b3b",
".git/objects/f6/cdb2ee55936c6ef4638c289fc5d35e7f7f0331": "100ec1c016447145215b49f0365163c7",
".git/objects/f1/7e8f561f3b6967e8265cec2fac90c40711feaa": "b79113f04e0fa1e72e99e06489a3479b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/244c274bf564a3b29c84834d1de8cb9cde01e3": "aa1032dbc404939488635ec008a020b8",
".git/objects/41/a7f52f598c2aea633f82bf256450064c8eb836": "79fc8c447b61e86753eac8889b97e02f",
".git/objects/1b/0e46e9436f5b6d56b9d210e5b3992d7c15eaab": "b4fe21b7a3add681e5dda12de62cba99",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/9c23583aa229a3a6be45c0a0014caf5c1a4e18": "beaef33b3f504dcf0d3f8c3f32833df9",
".git/objects/76/d31ee0ad4d3e281b561d71c3720f54dcc76fb1": "51cc28d85b0d490b59a35e428c956266",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/78/d53d35e178ffc10ce54632e8853114d0d91d0d": "2efcbbb2cc4e97e3656fbd5f8d10ec1d",
".git/objects/7f/eab32982d97cae35568e9c2611155a99bbb82a": "64cc04e4b01f2f14147753cbd387aa6c",
".git/objects/8e/2106ed664133870f4b950adb0d97af3650fe6e": "6aac7a96acdfd2e45d2d1a1514deff60",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3e9943cf49b843fa7c2b3efd3e1b9f2c",
".git/logs/refs/heads/main": "3e9943cf49b843fa7c2b3efd3e1b9f2c",
".git/logs/refs/remotes/origin/main": "e599a94cf89def95e6b2bcf8048cdb6d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3ad4a5e86ac9672f1e6a9d3fd31853de",
".git/refs/remotes/origin/main": "3ad4a5e86ac9672f1e6a9d3fd31853de",
".git/index": "a6d02380f853879f4823508b281f92a8",
".git/COMMIT_EDITMSG": "5350d9bff9a7b4790614bc3910bd1b95",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "543d074368402c85f63bdb2b8f001ba4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7bc443ac77834c5e3087756940b3a967",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "1f32a759a650b3641cbe20c5d72628bc",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
