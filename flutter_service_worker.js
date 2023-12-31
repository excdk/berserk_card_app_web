'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c7f61fe321dd2a634a10a9e297d24f62",
"index.html": "75994cf735d4c01bdcc99871e6d0fd2c",
"/": "75994cf735d4c01bdcc99871e6d0fd2c",
"main.dart.js": "b18eaa20f46b8e4a1e08eeff134e35d7",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"icons/favicon-16x16.png": "c37a768ce3e8a67303d4d6a28a7f18ca",
"icons/android-chrome-384x384.png": "b4e7439967cdff8477f7355610cb37cb",
"icons/safari-pinned-tab.svg": "3eecf5c65d91f9e81b091f7db7e58987",
"icons/favicon.ico": "2f492c096c2fd1540e3e4708ea756f13",
"icons/android-chrome-192x192.png": "c9800b594a882f948e43a6c957d95b0b",
"icons/apple-touch-icon.png": "d8be1102b5880ff9ee14f2906410342c",
"icons/site.webmanifest": "9e9efbf9f5a988e574bf3fbbea320a21",
"icons/mstile-150x150.png": "e3595f6be644b38181e1771c314eeace",
"icons/browserconfig.xml": "37083d7e0036d50fc6878c80473a9fa7",
"icons/favicon-32x32.png": "be1007094c0f0aedb4e23b85afa9179d",
"manifest.json": "7e0311d029ff22373ab3fe6ab672d27b",
"readme.txt": "fbaea222899dcf11b63bf9057bfc169b",
".git/ORIG_HEAD": "50b914fe38e3eb5ef164e5c5ec4eb97e",
".git/config": "68bfe4465a04edbbc55200e1f3ef6d67",
".git/objects/95/04e1b85cf3934610fe7576e07dbb28ad3f5ca2": "f389cc215d6deebaf75870705465e71c",
".git/objects/59/1ae610cd5f59e7484e9755c24c47b02b52ccb1": "a3b57a337b3a7f00871eb776fcd0baff",
".git/objects/92/bf44f4b53b040e909551035942e1b04c05e609": "6fa1ce0b336c2e8058143317ae663059",
".git/objects/92/a189abb8e49952ef82851bdecd605e04b3f13b": "7252b4e7042ec5c5e156ba5c9a677edf",
".git/objects/66/d2a01ad3417e2d25572d5005ac6ddd22abf048": "de64972183e0759b48e4f5da2807b04b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/f48cb7c9dc907462dbbb4fd81423287035b929": "abb491c1e83bbcf537410bdf112ff50b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/74ace16c816d9cd75825e1b57a309a308926ee": "e953f9f7b8113004d1d42a3fae7a73d0",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/d33c3b4b75e582abc4818ae5e5e335b81b1e44": "b3451844152e824477826ba5b9867f3f",
".git/objects/3c/2d6d1c5c79047e84b17c7a0884f37507465123": "72dec0e8ae44b134cc9937e7b44dc829",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/58/fc57811d3febcd3db5521abc17674019542034": "95187af38a2e5a269d30d85fe43b63a0",
".git/objects/5f/fc72bd38b1299268bf1e3eb4bac1a71312c69f": "a65ef19fb817773d229c9d805451ea70",
".git/objects/9d/2573b35a7ed0fdadc7b20a5c69f8dee0a350dc": "1f80b610c980851cae4603a2c63d129b",
".git/objects/02/c64233a075e9c07a9627885caf2342c7352dc3": "37b57973a9cf271c525ea9e742669e87",
".git/objects/a3/cfbcb769c76aea25409f36bd6a0d087491f071": "6379eb551f70a5829a75a655dc146282",
".git/objects/a3/5e00ad4fe03dd6e4676969340788a74b4fa7f0": "1d9a5127924740fc0b4feb7176d929e2",
".git/objects/d9/50388316ecc5d663cf67dfd86f66f91972944a": "14ceeb4edf2c40ab33cd399c1181e8a6",
".git/objects/ac/da130acdb42ac5002694f6fb27881165236177": "6ebca9dbdb14c7a500db5fd1eb6bc6fa",
".git/objects/ac/f84bbd2c8274d7521ecc4d3125cfe8ef16378b": "a5027a3b711f76639a52bfad67f5a02d",
".git/objects/ac/9058295cf49971fbe073b53a7f7769d7fb55e5": "ae3fbe5647f4e0fcb8741e32efb2c598",
".git/objects/bb/8a33d59063316362c0a50f9eece76dea3290aa": "6c86da00fa73c150e2efbe9384d03d23",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/fb86fc88175b25a36c6f2b0c710d23a0f94b49": "c44e502a61f0cf4f1743b040ea700707",
".git/objects/d7/72598dfdc675239675e5683526197a74eadd11": "27bccd1eab5380328a82b018bda1fd4e",
".git/objects/d0/8220efab282e57cbceed9e905cee0657e77dab": "8643cb632f9cd9430e9820a46addaa0d",
".git/objects/be/20b7d57b46fe84cc92e27c893dcb26fa3bcc8e": "dc711cc2d7ab1ec518dcf28dcc34a930",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/df31a02eb38f462fb695dcd7be84fac2951895": "d893bad3801734e718f558543fe16400",
".git/objects/b4/8d76f96ca66e6403efba594090f2ca283d3f13": "48aa6c987e38bcc0d8668f5a46f0499d",
".git/objects/a5/be1da9434b4011a5e433374a9bdd16185ad173": "e19cdfa0e054cf39c8c7a8f0a2b103b5",
".git/objects/a5/65c15f12b2d7d8dea5c6ce60376c458b15097b": "3d41b27767b3a73a2e333ab90eb7eac1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/3c35bc23d7f5f1d3f96f228c42237d7793b0d7": "6d595c9ba18935312f2444b30b3627b4",
".git/objects/bc/43953cf0900d4258474f4dbacb133cea75112b": "7bf5cb4bc7c3c23d738cc7dd931c1623",
".git/objects/bc/3e3503073d785dbe8e2bb161e4106a8c9be33a": "4b06cc41360ba9272599c2324133f9a9",
".git/objects/ae/c2ad0126f8c377bcc01acc706b986e90bee122": "b62b4bf43a1ab96c14abb9edca280b73",
".git/objects/e2/8b0845c91806a988677fe0d4977cfd8a2c1f36": "0ac1d9aafc09c5f815e0fa5d7a637e7b",
".git/objects/f3/6fbadd92f69e1a921a42c97b4b2a8e820dbf1c": "1f5cca1e0da5c09907c78a3a18506e0a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/28f0a344b92f265a41622291a2b0f668572cfb": "8186a43385de1218eb90669a12914a6f",
".git/objects/c9/90b5d1db944559d657754473cca0951a9360fa": "e773559bd38bf8c763aab32c0e78fdba",
".git/objects/fc/3cb29219ac81f4e09eeaa93e29bf73393b31ba": "e4fbe3c9d72d587cbc3a1d9517798b0c",
".git/objects/f5/8caf6d7588f5019f6c2d544e905cb1d46a9c53": "9f3df0c82c853d9009df87a8c719aaf1",
".git/objects/fb/bc6ca422da23f1cba23b0cbe9d7fa2615affc3": "e78b0d491643e95f1f0ae0a078bd2903",
".git/objects/ed/c92550783adbf44124c96b43adb35b4fefaaf8": "4e189ef194323e01575b898dd71bf256",
".git/objects/c6/8f61d487d6f57b4ac6c4eaa13e68d8e212a11e": "e5b188fb8a7bb1789119511c0a8cc42d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/ef75a464634ed396aa9cc157eec57e041e334c": "6180fcf1150b085cfcc4f5463d24b59a",
".git/objects/18/25944a23e18ab7fbc80819188c7ea426ee3e81": "45411ec4233a7becb955f1ef286f6a33",
".git/objects/27/04d6828c38acc30bfcb940c43c4fc8f08e64da": "b288cb46d2d20e7213888b1b48783297",
".git/objects/11/234dac7b3a9d46308dcb06285b76f5c1471605": "6c1514d972fc4dfcdf31e6d552070f3b",
".git/objects/7d/324af924c99e0c7e9497041c663f18ba72f94d": "0b1cabf8b949cd18175452b3533886c0",
".git/objects/16/2bdec4be6f160bffb66a937504013a90ddcad6": "e906f67268ff3943d94063651f8566c0",
".git/objects/42/ec9a58844bc96737b2ce3376ad84261f26beb2": "a55855f369eb898c9eaff9d1bc71cfa8",
".git/objects/89/5bd8cc6f332cb179fde00ba1051929182a8d99": "93d04ce85ed0ac7cbfba22b98470d044",
".git/objects/80/1faacdbea1fa7b4d4d9c18332ce986028a013c": "956fc725bcefbf80adf6da5eb59287fd",
".git/objects/1a/6f17b8dbc900f87d8e354f60e95605b857fabd": "7c49bf2044c7da59d0d70d6514fd5cd0",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c96041366641eae70d99f023060dc1874dee55": "27ae9c31251ffc5e8dcd37eeb3ac31f3",
".git/objects/4c/982498c039b7dbec79e9046e851ad2fc36d557": "82ecc2be97fafffe0702e4102fa53783",
".git/objects/26/cd6312621a328577ffc659528dd111cfa0b13f": "3d025caa1a357a1b933887e231185843",
".git/objects/21/1339df1c7a608b24f1b0f0a009eca82580ee11": "bf423b7cc9b649eda27b51fe315cb72e",
".git/objects/75/b5c7344d83b8e0a98bbfa6bc970aa6fbd1e849": "a19ba96c2729589ab9d619a4631e5d72",
".git/objects/75/d5c32f5641705baef983edf83130ede065b4ff": "acd82e27cddb71bb1ea35b4433facefc",
".git/objects/2a/44d92d5a28d8431381a81584fb8602678f114b": "c06156f77ddafb963d7f3325c4d6883c",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/d8d810b20858ff65dd8dbce03548b889e782e9": "2687465a148be85aa997f77ffb60ce28",
".git/objects/6b/7168856f2bb31681222d2f2f7861d80d139db2": "f0a45303a2cf2167c27ada9be15a17d1",
".git/objects/07/a4882a085166c39178dea4d2a0469a77f55f1d": "9eec08009ba65cec26a35e93da55f8a7",
".git/objects/00/ea0b118bb2f54a8936224bc70760a20bd3d64b": "e2f2e052a4fba9d353324547a6519c19",
".git/objects/5c/91fb10639dfc2b95a971fbeaea8b20cc09fc41": "57b5dc0709186d07980f8e3573b3f80a",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/5d/40b0d4d8cfa194256392ab8759b24431de6fba": "3bb60148c2fddee1f3aa7cd3d2edb8e0",
".git/objects/3a/c72b69c7dbd1f5d6d25c52b378b15841cf5148": "07e84d5b9551280c4c32a6cbb1f815d9",
".git/objects/3a/7149630d4f9ff64c31b91f919fe27f6a615347": "8858eddbe5d6258f4ec48c3d84256d4e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/c30f3236bcef23467be3eca4644b75ac281869": "71e4a5e6d81c942e4df6358bebbda0a8",
".git/objects/5b/820f91e644b6cbdd7e16342ee70555c1272b84": "7d83e3a67271cf51b9e5d727e30fe00f",
".git/objects/6d/4e90d75022a4b82a52cac0bc6e1aea0fb726e0": "f24b40fd3d2fa0e143990e2c162bac69",
".git/objects/01/683da5b93c93df30f7fb65830aedc6464a094a": "871748be8bb4f2e807350b8c59d1631f",
".git/objects/01/264b226b1b38cbec7f05642bd166c8b1148c9f": "a0be827a1264ee241ad39908b9569c82",
".git/objects/01/748d3b8d0afed49c2a14776b22ab9ad94a1f6d": "741c9f53c1c4754514308c600de0260a",
".git/objects/06/ba11f06cfcd38d5a5e0b5d7b6f92ce2d2fd599": "1f0e8d96ba69e191228e6beda073e6da",
".git/objects/06/83f7a1406f3beabdcc035affc7b8b5af2f6e58": "5d0e87ddec82e279fdb2e4ecbc9e37bc",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/9b43ab6e3c18930cea69c61bf108a7283eadf3": "d466835128baf718311164b1668771f6",
".git/objects/55/756a4f40ccf092558dcaca65cc74dd024e9f2c": "c2122876b0dd34bb4bb16a2b2d553593",
".git/objects/55/9fcf09e6e91609668ccc6f40623a3c6e596ff8": "86f2fa4b4d12dd276f566c9850c82dda",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/cf0c214efbb4f61fc8ac747a90ea7abf9726ee": "a6e98c484db9900751b9f870f51018f9",
".git/objects/d3/e0ef46215afe897fa9d0b0fbc5f35841f52383": "1dfb505221ae72517c02077931cd5a4c",
".git/objects/d3/b37c3cdd409472d74409fe78a289e1c03a2222": "e0d7309321e22d7be2bc0c2748eccaeb",
".git/objects/d3/cccb053856528520e695d7456ce3272002b516": "a0cd675755e4a4525a72cfdbfe3e4018",
".git/objects/d4/b6ad5b1110eb368077786e496bdab5e468f08d": "a8bdcd758d0add3fe4b4a59e10a87bff",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a7/e9b9dbb8bb00a2d43aeb15137fccc950409daf": "2ac7cfc0dbf3fd3adc35c8f67dc0b1ba",
".git/objects/dd/60d6b5af68ddf3a9ab4105c765e103978653ff": "f0b8bfaa877ab8fc90112d8aa3fb117e",
".git/objects/b7/9b959c7fbb6895ddaec0c70767a828cf8ce395": "e13ab0f20b8343e0c7e6cdfab02f89b3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/b6bf931a1593df6f60f6b8b806283a37d366cf": "8a8c58eaad4bc4a8beaa009989d690a1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/ae705be579f248f8df1ff8bef785877b33b927": "01113a59fe7073fecd9693ad7a073f66",
".git/objects/c3/293ce4c494ebf5dab9dc407d95bbd1a612a24c": "d30c41704f636feda613144ef0217511",
".git/objects/ea/98e0c3d47222db1d70b159d697e79858af1896": "b0749a17891a2da08c479f74b2484bf6",
".git/objects/ea/402b427b745d0122026fd5a9d7a93cc3fbaca6": "3b5b8a4318a34e48e9666cea7b63368b",
".git/objects/e1/b77c7a38d55422140507e7acc9dd4b2a4b1d77": "a6669fa0e1f2785515e7e3d8e0d948ac",
".git/objects/e1/ec170bd8f808bc2e35cbe08c7f9fdd0ef5169d": "0bca9eb334e0d5e22cc0c55786ed6be9",
".git/objects/cd/30f32e5f817e28721003c5657cafd21bc108b3": "e8d63070798f01aa48611853c266febd",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/1d0807709fdc63dafb1e4c171caf2fec6aede8": "71f640a879efcd1dad14a8d57266d364",
".git/objects/e8/9f34f333f06a851a2bf76cdb8f427ee2928362": "e6682b697c318e4cf00d85dadf61ca82",
".git/objects/c5/b0aa15972563ae52967096b6cf9a6971547d4d": "3a5ad765333869ce7aa534f3a1d6f033",
".git/objects/c2/a8cf0a189b0b1c84016b8375da3b910a1916c4": "ef79ea2c281b5b74e879b71724d83b3b",
".git/objects/f6/cdb2ee55936c6ef4638c289fc5d35e7f7f0331": "100ec1c016447145215b49f0365163c7",
".git/objects/f6/3a6df14a705b4b6cf82b1d8dccb12d4e71bb41": "808284c79793de215fdc3293f03e1bc4",
".git/objects/f1/7e8f561f3b6967e8265cec2fac90c40711feaa": "b79113f04e0fa1e72e99e06489a3479b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/f23d8f5f1efb006708b41a3210fc23652dcc2e": "1a66dd1b18e06b995c8468a3ecf9a3fb",
".git/objects/41/244c274bf564a3b29c84834d1de8cb9cde01e3": "aa1032dbc404939488635ec008a020b8",
".git/objects/41/a7f52f598c2aea633f82bf256450064c8eb836": "79fc8c447b61e86753eac8889b97e02f",
".git/objects/1b/0e46e9436f5b6d56b9d210e5b3992d7c15eaab": "b4fe21b7a3add681e5dda12de62cba99",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/b95e5f06f5133dfce470119aaccf732efa942a": "d60dd4101cee6426d2022eabe76e5315",
".git/objects/1e/2c08d64323f526b37ef0666a360c51eb34b98d": "e34c968e273d6f3f0ba36b79620afd50",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/9c23583aa229a3a6be45c0a0014caf5c1a4e18": "beaef33b3f504dcf0d3f8c3f32833df9",
".git/objects/76/d31ee0ad4d3e281b561d71c3720f54dcc76fb1": "51cc28d85b0d490b59a35e428c956266",
".git/objects/76/c05dc16587aff45acade9f7092cd0ca93bdf26": "c2675d610528056b6e0941be50145295",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/78/d53d35e178ffc10ce54632e8853114d0d91d0d": "2efcbbb2cc4e97e3656fbd5f8d10ec1d",
".git/objects/7f/eab32982d97cae35568e9c2611155a99bbb82a": "64cc04e4b01f2f14147753cbd387aa6c",
".git/objects/8e/2106ed664133870f4b950adb0d97af3650fe6e": "6aac7a96acdfd2e45d2d1a1514deff60",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e9d9a0959c0ade51758dafbef44dc0e",
".git/logs/refs/heads/main": "6e9d9a0959c0ade51758dafbef44dc0e",
".git/logs/refs/remotes/origin/main": "6be717d2f7973304d3a9146246007dea",
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
".git/refs/heads/main": "de39172ef934868ecc5c5e6a8d937697",
".git/refs/remotes/origin/main": "de39172ef934868ecc5c5e6a8d937697",
".git/index": "1b31423dd0d10c0c22ac71f3ca700944",
".git/COMMIT_EDITMSG": "4c46f4f2710233d58df56cef86a188c4",
".git/FETCH_HEAD": "377261f44578a99c60825205663f3353",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "365760d99112911218af1d82a8c5dedc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7bc443ac77834c5e3087756940b3a967",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "0c78f1d8e5c3516174f41c70488be6fe",
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
