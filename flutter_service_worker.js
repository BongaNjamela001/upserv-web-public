'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "72f9a7c56cff066ccb6cfba774baa3a9",
"/": "72f9a7c56cff066ccb6cfba774baa3a9",
"flutter_bootstrap.js": "c0f3ad7c9b78ab9051b3846f9312505f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "48b92e8451309fdcb73d294f0f6e9830",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "706b13a761d261d759c0a8d557ccfdcb",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "46be639d952abe98effde36da35e7701",
"assets/NOTICES": "b1e6a78e5af6726a338f0d7baeeab742",
"assets/AssetManifest.bin.json": "4a2da114464724cae737446b58910594",
"assets/fonts/MaterialIcons-Regular.otf": "e6d025501b8cfac5c842395bc1a2cdad",
"assets/FontManifest.json": "a5811363b41ab167ab78be377cbf6ddb",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/resistor.svg": "61b4b36efb3f9b7fce4ebb5246d038b1",
"assets/assets/images/clients_02_add_task_screen_dark.png": "7b08c9caafe3e8e22a5d6d81649bdd96",
"assets/assets/images/compSci.svg": "ea52fa5799c0356375d2c17222bd7264",
"assets/assets/images/trades_15_bom_bright.png": "2f61b0f5e1a0aa3d78cbe1beba4a76b9",
"assets/assets/images/clients_05_find_map_screen_bright.png": "5ef02f11494760596cb12a961fd84209",
"assets/assets/images/trades_14_rate_bright.png": "ee5ff4f3522856db426edf49e8e1e936",
"assets/assets/images/ml.svg": "4b6b1adc94b687fe27b852456ca9b8e8",
"assets/assets/images/clients_06_request_popup_dark.png": "b08c02f5325b3ef5a5f21537b477bab2",
"assets/assets/images/clients_08_progress_screen.png": "10bee7fe00a8796c6910164cf931f455",
"assets/assets/images/clients_11_selection_grid_bright.png": "0859f81f4dbf9539eca9891ba4d873b6",
"assets/assets/images/ewb_img.png": "7ab617814924988ae0236a7955b0cf5a",
"assets/assets/images/trades_02_certif_bright.png": "07a7fe139a131be0e2574e3aeb23ec2a",
"assets/assets/images/trades_00_splash_bright_none.png": "8073e856d16dcb5742472327567b67c9",
"assets/assets/images/emengineering.svg": "f40b8f19e5c01094f624d289396d8262",
"assets/assets/images/trades_17_wallet_bright.png": "27f2f6b9d468711dc32ba47dd664577a",
"assets/assets/images/qualified_pro.png": "6cf2181a3378aa557b6260c6345f0073",
"assets/assets/images/imaging.svg": "cd51ceefc9c5b10e892f1bc88758f3d0",
"assets/assets/images/parallel.svg": "0bcfb8c625e63f83fb626ade1fadf65c",
"assets/assets/images/embeddedengineering.svg": "59612873fb5b642ab30befc00a175a59",
"assets/assets/images/trades_15_bom_dark.png": "c8e98d03c275c381be58f95bfbda6bfb",
"assets/assets/images/trades_14_rate_dark.png": "b83ad8fbfbb4c1d2df54b565d43f76fa",
"assets/assets/images/trades_00_splash_dark.png": "e39906626dc8366eafa9c0ee0c91c897",
"assets/assets/images/ukzn-logo.webp": "a8d93d7031ca776dc26f02aeb1aebd25",
"assets/assets/images/uct-logo.png": "a441aa4a204a9eea5bd9526aec7903aa",
"assets/assets/images/numeric.svg": "dd93b437863a35aeff8d28ff7d16bfba",
"assets/assets/images/trades_01_speciality_bright.png": "e410e4d581cd8b7dcb495b6bbc4bf1f9",
"assets/assets/images/clients_09_bill_of_materials_dark.png": "dfaec536469e93fa0b3301d225c06590",
"assets/assets/images/trades_05_callout_dark.png": "5857bd60096fdda9b73f8246f79eeb10",
"assets/assets/images/magnet.svg": "9032714e1c1f2bfa0bb4b7f4062b074c",
"assets/assets/images/embeddedc.svg": "3790e9d6d6a52a9174225bae2b601c8c",
"assets/assets/images/imagingfpga.jpeg": "6ffe43b8a24d59f171cf0f9e5b3b5157",
"assets/assets/images/circuit.svg": "786c6e4c4585b6868f8e2054a30a8fff",
"assets/assets/images/clients_13_scheduler_bright.png": "281f6acd15a62b2d6dfd9ac0035a7500",
"assets/assets/images/upservTradesPrelaunch.svg": "98fb0a1d69b77a12106a7122544bdb26",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/trades_03_select_speciality_dark.png": "9fd93e37129a082484a79dec6029e0c4",
"assets/assets/images/trades_08_requests_bright.png": "9acce0fd8112bed0176d5ee81abd916c",
"assets/assets/images/elecEng.svg": "165833bc2c1aabe290b97e767dc92b8e",
"assets/assets/images/trades_07_home_bright.png": "07f3dec72361b17f55afe53c20b06dcf",
"assets/assets/images/trades_09_scheduler_dark.png": "7a762d3ba8eb4f42fb51b0c0f182e92f",
"assets/assets/images/java.svg": "2ae4636a86ab462bdd844e0bfd2835f5",
"assets/assets/images/barterly-logo-white-butterfly.png": "9ceade567aae23660ccc7156c7490f89",
"assets/assets/images/trades_10_invoice_dark.png": "f6e7df4482398524496bfcd02dfd9ca8",
"assets/assets/images/upservClientsPrelaunch.png": "6bdc98c217eb82cd0bfa89434c9ebe20",
"assets/assets/images/opencl.svg": "9a7684ac8630734c8acc9945a7b1f9bc",
"assets/assets/images/nano.svg": "33b0974aa2d4d7f2a3128fcc41a77080",
"assets/assets/images/mri.svg": "20056d010a9c1e6f9084ae0a895ffabb",
"assets/assets/images/sql.svg": "8b22fe7d840ee6daf9b4bfaa5e0f107d",
"assets/assets/images/trades_05_callout_bright.png": "cc93c2b12cef9e3db0801af3efd37722",
"assets/assets/images/trades_03_select_speciality_bright.png": "838d455c000da2aa680b477f798caf2c",
"assets/assets/images/clients_13_rate_dark.png": "499a24477b1887d9c19b9520738bbc51",
"assets/assets/images/control.svg": "eda06029ef11302d6adcd5c336c03d97",
"assets/assets/images/quantum.svg": "a1c868918d6d797dd66bc6fc478af148",
"assets/assets/images/tsc.jpeg": "3ab41f2851c17b64f95558e9b8f6eea0",
"assets/assets/images/pitch.png": "a692022b73e5fe6439b93689f2951166",
"assets/assets/images/clients_02_add_task_screen.png": "a5388bb29c758e30bc033a9504ad3e2a",
"assets/assets/images/trades_12_collab_search_bright.png": "00b468ec8ed1de5d50319c1c65e72571",
"assets/assets/images/alumni.png": "f481654b3696a3748634486ebcff47db",
"assets/assets/images/appMath.svg": "5e835dabad260a1e45ff8d0554e2407c",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/clients_13_rate_bright.png": "bb2de01c11f0796c91daca51ffba6eea",
"assets/assets/images/operations.svg": "b4ac17534687433703057c049d4ff856",
"assets/assets/images/pcb.svg": "3860a8dfb24f77268fdb35b258e567df",
"assets/assets/images/mpi.svg": "3a24cc59ddc6dfacd03a676b46707dc2",
"assets/assets/images/movie_watching.png": "d406e7a7a3d575b4a908f6d0dfc7de22",
"assets/assets/images/trades_08_requests_dark.png": "96982bec5190b77e0660b77d9091486d",
"assets/assets/images/cpuchip.svg": "9dc19f84575ff7fa3a91716ccd6b4133",
"assets/assets/images/clients_12_schedule_dark.png": "4a7fb69316225f1ebf021a701c991d9b",
"assets/assets/images/trades_06_allset_dark.png": "9d659c8c2c1d5e32318974756ab7add3",
"assets/assets/images/trades_11_progress_dark.png": "488422162af8f55a7542eca40e5738db",
"assets/assets/images/clients_11_selection_grid_dark.png": "19957703e81216514993a004a29c0ac9",
"assets/assets/images/clients_04_wallet_bright.png": "a1a841b713efcd8d5779bdc1b536f369",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/trades_17_wallet_dark.png": "b2af5306f0107fa8274ee305701b1030",
"assets/assets/images/trades_11_progress_bright.png": "ba95f89d9ce8f0985c0f0b366bea78aa",
"assets/assets/images/dsp.svg": "733ac78fda9049c867567e0ea71a0f19",
"assets/assets/images/scalio.png": "89b5c534a6936a715b490464d0060432",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/clients_00_splash_bright.png": "517c80fa0154d0019920447adfdd7c21",
"assets/assets/images/trades_02_certif_dark.png": "cd30a69cde813d287a8bb55bd83bb986",
"assets/assets/images/clients_12_schedule_bright.png": "1d3eeff218973300f7bfc014b34909a3",
"assets/assets/images/clients_10_chat_screen_dark.png": "aa2bdb4818267cecf606f0cf9f71c6fd",
"assets/assets/images/design.svg": "7ce8611b9d571e537f0b93f67bf6c735",
"assets/assets/images/dev_img.png": "f84ef3e036cf7da1c86a77e439df389f",
"assets/assets/images/clients_prototype_play.png": "51ee838f1e83c1c7d03f59675eac4d18",
"assets/assets/images/trades_04_baselocation_bright.png": "49b4ede52cb1a9583581b99bbb012879",
"assets/assets/images/engineering.svg": "88f0f2371ffc98395368968bd7ca11fe",
"assets/assets/images/clients_01_home_bright.png": "3c13dcef4cb47a5377fa151c4f5e3177",
"assets/assets/images/trades_09_scheduler_bright.png": "5fcee37a00a079dc7228d8e0db87ad7d",
"assets/assets/images/trades_07_home_dark.png": "0716c37b50abb6b34c000411a5d18556",
"assets/assets/images/javascript.svg": "62e9645bbd2ac03fa81d220ef769dbc8",
"assets/assets/images/upservClientsPrelaunch.svg": "d5dc503630ca533393836c4b3eb8641d",
"assets/assets/images/trades_01_speciality_dark.png": "cb8aea7f7cc91a4d1ed2e1bd044571ea",
"assets/assets/images/trades_04_baselocation_dark.png": "56324d4cc9edf1a2dd9b5fa036cf7891",
"assets/assets/images/bubble.jpeg": "1c4acb46b4cc321c8ea6a60cd873876d",
"assets/assets/images/svm.jpeg": "ab9547d55fd756fd84377ca20e3825b5",
"assets/assets/images/upservTradesPrelaunch.png": "d78505b2c35b4b55b299ef7e065b85e5",
"assets/assets/images/clients_00_splash_dark.png": "0e944705d226ce7361cdb6383c9712df",
"assets/assets/images/python.svg": "85368627053aa7df8e1340c0f29acdb8",
"assets/assets/images/clients_09_bill_of_materials.png": "782674fbe62197c78b41c7cb5bcf5f55",
"assets/assets/images/compEng.svg": "f5617c3ba97dcd2fd9b7e40daeb3c14e",
"assets/assets/images/clients_03_select_task_screen.png": "4d38073dc1fb6325df5ba85497a268f4",
"assets/assets/images/cpp.svg": "797c85b510ba6603dd20d35aed8d4089",
"assets/assets/images/trades_10_invoice_bright.png": "bd59d8f218e3d8e2262495206047b650",
"assets/assets/images/clients_03_select_task_screen_dark.png": "5f92858f4bb9e9b8904a3597faad3c4f",
"assets/assets/images/exclusivebooks_img.png": "cc73b997cbe12969f863513ffcad9265",
"assets/assets/images/opencl.jpeg": "2faa55a7f376ee252d159927555f3ede",
"assets/assets/images/trades_16_registration_bright.png": "859be22def31c1d905dd020e99cb6f4d",
"assets/assets/images/clients_05_find_map_screen_dark.png": "4f3dbdcea2cce1ec38424a96baa81a3b",
"assets/assets/images/barterly-logo-green-transparent.png": "6636075a776397e1eae8a979000eb103",
"assets/assets/images/embedded.svg": "950d9988a299a26539b30d5a09a2fec0",
"assets/assets/images/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/images/clients_01_home_dark.png": "c260b95ca596b867e3136669284c61c7",
"assets/assets/images/clients_07_invoice_bright.png": "a376df63e1556dee0991af4951604519",
"assets/assets/images/ukzn-logo.png": "92f53451361c93ca5aa43777b84b1f1c",
"assets/assets/images/barterly-logo-blue-butterfly.png": "d9b389eeed06418e3c0b56ec2163bbc8",
"assets/assets/images/trades_16_registration_dark.png": "7536088e8160a00b7b89497b1011d834",
"assets/assets/images/helicopter.jpeg": "e071149c6fd9aef235c29b02da0f5024",
"assets/assets/images/clients_13_scheduler_dark.png": "2a346d89cdc032df0a489449a83883d4",
"assets/assets/images/trades_00_splash_bright.png": "8bba032de0214ce9754fcb551d1d6ec7",
"assets/assets/images/clients_08_progress_screen_dark.png": "93dbcc12cfe2143ad698d5859f6af175",
"assets/assets/images/trades_06_allset_bright.png": "2cf11b320d12e726993cabbeb3847e46",
"assets/assets/images/clients_04_wallet_dark.png": "efb2bec52a271a892fd56adfc82e1cbf",
"assets/assets/images/dna.svg": "917008e3f2d0b81ee2e52cb3b4b5ed2d",
"assets/assets/images/EEE4125C_Group_13_Business_Idea_Selection.pdf": "69ccc9be8c16bf74bdde778e41102ecd",
"assets/assets/images/messagepassing.svg": "ce58e7d948ebf3a2edd9862236be3fcc",
"assets/assets/images/clients_07_invoice_dark.png": "630976872f46b71c57ce1bdb0a5e499a",
"assets/assets/images/clients_06_request_popup.png": "c0f27ec063b238488aa6e96883001a8d",
"assets/assets/images/realanalysis.svg": "5518b2db80d9933acd897ec32330ded2",
"assets/assets/images/trades_13_set_prices_dark.png": "45764689f1f52bc8ceb004d140f85c5a",
"assets/assets/images/trades_12_collab_search_dark.png": "1a6704df791b7a9fb97ba3e9225b9c00",
"assets/assets/images/clients_00_splash_bright_none.png": "27b01a47700c7189ab10f90aaeb7a880",
"assets/assets/images/physics.svg": "621042741c35baae7d81f365c2cd578a",
"assets/assets/images/verilog.svg": "5ad61e42a00e946cd57f6c790a4d10ba",
"assets/assets/images/trades_13_set_prices_bright.png": "8e88d5436379f234dfc8cd5b249f3f50",
"assets/assets/images/trades_prototype_play.png": "e2dedb7647711b326ae2654b8e108a60",
"assets/assets/images/acoustic.jpeg": "10d9dca7daa0707774d54f0626ac9509",
"assets/assets/images/clients_10_chat_screen_bright.png": "d53beb0bf770ee672b55153364fc4916",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/AssetManifest.bin": "9d3b2efdf055deee6a862bf181be1e3c",
"assets/loading.png": "309abd48223fd70b0857f3aa92ced152",
"assets/AssetManifest.json": "c9f8eba135b0f4820d7d0c987c4d912c",
"favicon.png": "1996ba4abd979e244338cc111fb2fd39",
"main.dart.js": "c1991575b344b7c0cde9d4d1c2ace500",
"manifest.json": "adfdf4fd75c7fc0cdbd1a195bd48bce3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"icons/Icon-512.png": "2330c64bfe567ab232173b87f1eea5a5",
"icons/Icon-maskable-512.png": "2330c64bfe567ab232173b87f1eea5a5",
"icons/Icon-192.png": "bb34cd71322a0ab7f3d9afd367d49c0d",
"icons/Icon-maskable-192.png": "bb34cd71322a0ab7f3d9afd367d49c0d",
"version.json": "8ad9200171df954825dcb0312386ef72"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
