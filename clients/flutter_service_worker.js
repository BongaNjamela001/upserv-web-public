'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "f7282a1e36d849ea772135a734fba9f1",
"/": "f7282a1e36d849ea772135a734fba9f1",
"flutter_bootstrap.js": "dd92599f6c98fc6dbdb7f8d420c836c1",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"assets/packages/pay_platform_interface/pubspec.yaml": "576a151a92ea9fc3da773ad9e9b4864b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/NOTICES": "6b8188dfca206b5162663c73222b9eb6",
"assets/AssetManifest.bin.json": "b98c9618a1a7a8f0428b5c82956dd48c",
"assets/fonts/MaterialIcons-Regular.otf": "9c9ac555e50e318b11c3b12f6ea02dec",
"assets/FontManifest.json": "a0d45049a6f21a65d8ac3ae3931e1041",
"assets/assets/google_pay_config.json": "a7505fba648dbdab9fb81ddc98054129",
"assets/assets/fonts/InterBold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/RobotoRomanBold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/RobotoRomanMedium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/RobotoRomanRegular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/FrancoisOneRegular.ttf": "88cae51f1f0893f67dad2f609d5caba0",
"assets/assets/fonts/RobotoRomanBlack.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/images/icon_home_installations.svg": "8f4588a092da849da9adf13c4a0bec23",
"assets/assets/images/img_mercedes.svg": "a3262b4887964ab70ee00a4b72cd9721",
"assets/assets/images/img_brightness.svg": "0fcad79c56ff4aa4c281a3f25a249288",
"assets/assets/images/img_settings_primary_42x49.svg": "1dd5b6cc7c6aa833f37f0bc73e166628",
"assets/assets/images/img_spprofile_image.png": "22204d7687e2b9ee5de7758771d6dce5",
"assets/assets/images/img_settings_primary.svg": "dacd21c2d61e3699ecf5aa0905ed3c49",
"assets/assets/images/img_carmirror.svg": "815f022d406892e04fc65a8a08f6a60a",
"assets/assets/images/img_instagram.svg": "8ddbffb64dd339c2acd538207fe05219",
"assets/assets/images/img_splashscreen_logo.svg": "36769d784af7f2ad6701e100501c48ae",
"assets/assets/images/img_ticket.svg": "cdfefb7f82b23b371029c696c2824bae",
"assets/assets/images/icon_solar_power.svg": "4f18b56620b9a340e46e2a559ef0c38f",
"assets/assets/images/icon_garage_small.svg": "073f25359f72a9e3060cc2c037c32127",
"assets/assets/images/img_termsofservice.svg": "19a993b6e5f9a022f001c76d9fa9bda1",
"assets/assets/images/img_bathtub.svg": "458b5f81e8ba443b100fb589c2101a1f",
"assets/assets/images/icon_solar_small.svg": "1b0dcbdffb1d8398a571fe0106d310a7",
"assets/assets/images/icon_scheduler.svg": "3c225d4c77874afad4a86ea70f352fdb",
"assets/assets/images/img_share.svg": "8c3f67de1caa0742666e7df2fda3087e",
"assets/assets/images/img_settings_onprimary_45x45.svg": "f412180f799f2a6c8c5cd3b16ecdb3dc",
"assets/assets/images/img_forward.svg": "e8040a3edaa7b8f237f5d028d7082c5a",
"assets/assets/images/img_rewind_blue_400.svg": "dcf02ee0818d5fa9b0bacbd76cd50e5f",
"assets/assets/images/img_settings_blue_500_01_45x45.svg": "245a8f382f20002e333a13cba711b729",
"assets/assets/images/img_geyserleftleg_vector.svg": "4fe3481b8ab4b9bc95e404b921dcd9e7",
"assets/assets/images/img_account.svg": "7edd88949e9d0b7ec9f620de5420faee",
"assets/assets/images/img_tiles.svg": "cd38725f51e7fb36ff6270ab3b77bff8",
"assets/assets/images/img_contrast_primary.svg": "ec76f7e061ac2e9e0ae1b5aa649feeac",
"assets/assets/images/img_settings_onprimary_25x27.svg": "0749f87df947fb9b134c0c2ed96dc550",
"assets/assets/images/img_garden_house.svg": "97dd6e6e0a5e46c0d3b4b1293b5dff5f",
"assets/assets/images/img_woodbench.svg": "858e37e1fc7ad4950f658f8fda85fbc8",
"assets/assets/images/img_stairs.svg": "91b3d06d339caf1c2492e376e66a8327",
"assets/assets/images/img_clock_blue_400.svg": "d8fb309faff78660ff3891cf5dc5b74b",
"assets/assets/images/img_plumbing_house.svg": "80be22e51e8ea6591f4011e9fb3852a3",
"assets/assets/images/img_microwave.svg": "51425ba0efd471dd965ad961e5457da6",
"assets/assets/images/img_clock_blue_400_21x20.svg": "fab11f79777c6423351175b4e304ecf7",
"assets/assets/images/img_paintbrush.svg": "673efe536850e29a9947e52bb000b5eb",
"assets/assets/images/img_nav_alerts.svg": "60776d37a2121d52e94e6aea584308b0",
"assets/assets/images/img_user_onprimary_7x17.svg": "c35aaf09f93df60df0afa10fb63958b0",
"assets/assets/images/icon_settings.svg": "e96754cc22355600e2f98bb9770da3c5",
"assets/assets/images/img_clock_vector.svg": "b42ea5fb047f0d17d11b79dee18dd297",
"assets/assets/images/img_save.svg": "d8505eb146b90025a5496b48e533945f",
"assets/assets/images/img_basin.svg": "b3e44997b4135d37841a78f22811d6b0",
"assets/assets/images/img_checkmark.svg": "4da7989ac70f63e66dfba6f68f4778b8",
"assets/assets/images/img_grid_onprimary_19x19.svg": "2fe63bb4254884ff54264a31f9bfbed8",
"assets/assets/images/img_pool_house.svg": "1141880a3ce3d98da8d536123fd9f4ed",
"assets/assets/images/icon_home_repairs.svg": "6b184040c9913af8a1f8ef61c8c79cfd",
"assets/assets/images/img_call.svg": "408b4ed6787517c7daa87a30407dd8da",
"assets/assets/images/img_close.svg": "8f4588a092da849da9adf13c4a0bec23",
"assets/assets/images/img_nissan.svg": "97e638505d68c7d815a0fdddc49535f4",
"assets/assets/images/img_contrast_onprimary.svg": "cb6875c8c582bcf3e1444ebe42d40444",
"assets/assets/images/img_menu.svg": "d125e364f4162efdcba21d497a74300c",
"assets/assets/images/img_bricks.svg": "6b39c847fc66022ac24b2d92bc63e2e4",
"assets/assets/images/img_privacypolicy.svg": "34b81ba59f395cdb7127aabc1923bea6",
"assets/assets/images/img_roof.svg": "16a367a04f6c06d590c15a6db66ffb48",
"assets/assets/images/img_brakes.svg": "c3d88b1b808c341165e4386ef63e08c7",
"assets/assets/images/img_arrow_up_onprimary.svg": "a4f9e256407a34e004b49f128ffd2dc3",
"assets/assets/images/img_television_onprimary.svg": "50b9fb54d8cc279edf93524ef36c2021",
"assets/assets/images/img_tyre.svg": "a339e6f8bb08e08a7bc0729125c8f045",
"assets/assets/images/img_roof_house.svg": "9467c19a31c8323cdfe66ce3e4170ff8",
"assets/assets/images/icon_home_certification.svg": "4dfad9418b1d04b5b2723e9ac1a2400a",
"assets/assets/images/img_calendar_blue_400.svg": "d45c5b3a24c8a8c5fac617585e18ac82",
"assets/assets/images/img_availability_map_preselect.png": "42703414b889fc561123986153761b30",
"assets/assets/images/barterly-logo-white-butterfly.png": "9ceade567aae23660ccc7156c7490f89",
"assets/assets/images/img_clock_indigo_300_01.svg": "e487c51d52fa53dcede9c36407e51a30",
"assets/assets/images/img_close_onprimary_23x23.svg": "da4748043da0b6a0b25fe41349926921",
"assets/assets/images/img_fence.svg": "df1d06708eea981f55548cb80ec98595",
"assets/assets/images/img_showerdrop2_vector.svg": "fbbf732627584ceafa3791b32a5d01d4",
"assets/assets/images/img_calendar.svg": "ad23696bd7fac314186645c2af8ebe98",
"assets/assets/images/img_projects.svg": "911ba7aced7e540b71469e6674a9077b",
"assets/assets/images/img_nav_projects.svg": "d4b63995083469a34d9ef0076184ab88",
"assets/assets/images/img_patch.svg": "74530508c144a2a6c95e748c90c1c2de",
"assets/assets/images/img_window.svg": "cd27e41e00dabfdde3d13396ad5b1c85",
"assets/assets/images/img_close_blue_500_01.svg": "d08eb2a83d6f3f0aeb3ac80f48bd579b",
"assets/assets/images/electricity-caution-svgrepo-com.svg": "fe67e5ba72ffbd3bbe7b5a6789a3c57f",
"assets/assets/images/img_offers.svg": "4ca93b690fa5505663dc58a79f587da3",
"assets/assets/images/img_settings_onprimary.svg": "6746626124ea9c660d9fb6176678ea11",
"assets/assets/images/img_polishing.svg": "c330556580a7d519c23f271f74258036",
"assets/assets/images/icon_home_original.svg": "7d26e29fe92fe55a7747f7cfc0093384",
"assets/assets/images/img_arrow_down_black_900.svg": "f65a3463ff4b0165bb946054c5ce4f4b",
"assets/assets/images/img_close_onprimary.svg": "454eac0a98103a376b9e970edadc2c20",
"assets/assets/images/img_checklist_questionmark.svg": "08e4f954b1c484fe77a19cc154baa36a",
"assets/assets/images/barterlylogogreenflat.svg": "2d7176b600c90eba9831d6f266fa9385",
"assets/assets/images/img_heater.svg": "b29c9a761a396277d1b7a55864be6de0",
"assets/assets/images/img_lighting_primary.svg": "81bf7f820f4905154460d4f2e91b1921",
"assets/assets/images/img_gasdryer.svg": "25365fa36074b56f0fd096bdcd7214a1",
"assets/assets/images/img_arrow_down.svg": "b63a002adc0de15de0046a2cac0fe21c",
"assets/assets/images/img_settings_indigo_300.svg": "b962d11a17dcff4cc0c4515d79ba6992",
"assets/assets/images/img_ellipse_1.svg": "1fdb351ad344f518c984455ddc13ebfa",
"assets/assets/images/img_woodchair.svg": "0dac1906eb44dfe0da850165a90e0cce",
"assets/assets/images/img_safety.svg": "546854bf897f6992ba1a5f333e4e9fe5",
"assets/assets/images/img_door.svg": "b17b6b8b4a231297f66511ac8842bd95",
"assets/assets/images/img_antenna_0.svg": "ab03388ce7e08753292075351c8367d0",
"assets/assets/images/img_ellipse_2.svg": "50574f34085c54b79a548adfa6779c9e",
"assets/assets/images/img_windowblinds.svg": "060b95e924fdb0051900d9a1f953ee51",
"assets/assets/images/img_paving_house.svg": "0b9316fa7bf6898160527276e716d3f5",
"assets/assets/images/img_carbattery.svg": "be7ac6643988b4ad94cfcd6fd8873f99",
"assets/assets/images/img_wheel.svg": "048c1ef53d42c1780d7dec644437ecfe",
"assets/assets/images/img_group_25.svg": "91120df7161ea02b4cdbe99c640abd3f",
"assets/assets/images/img_nav_account.svg": "c3c9f0b0d2208bfe0c4b2d9dc3fa2490",
"assets/assets/images/img_cut.svg": "743230ae40cc093c4bc1672704e2292e",
"assets/assets/images/img_settings_onprimary_25x29.svg": "41385b82dc03adc447a8ba654c4a2643",
"assets/assets/images/img_nav_projects_blue_500.svg": "cf18da4f9dddbf2fb3a795b883584d5c",
"assets/assets/images/img_upload.svg": "1f991b0bbb061a877ff27443fdff7300",
"assets/assets/images/shower.svg": "a69ba1995b84ab4cd6157b8a1272755c",
"assets/assets/images/img_carpentry_house.svg": "d4f73600201c29736fbaceb6a6ba18e8",
"assets/assets/images/img_linkedin.svg": "2de657684fb88980c8b175d28b083e52",
"assets/assets/images/img_antenna_1.svg": "d2b0499acb3524bf84eceffbf2dd604b",
"assets/assets/images/img_checklist_questionmark.png": "5eb1eedf729ef6610a321ef69724c5bd",
"assets/assets/images/img_antenna_0_onprimary.svg": "ef5a2eb18ca36483334de9249b7d46bb",
"assets/assets/images/img_settings.svg": "a7b7b5c37a1a19b8656f458d342cdb2f",
"assets/assets/images/img_headlights.svg": "f7f36350a890883daa192cbff4d37172",
"assets/assets/images/img_stool.svg": "bb44b8cce3b3aff721ec8ebfca641fb2",
"assets/assets/images/img_audi.svg": "191a8b56ed85a330c137b97f24f44d1e",
"assets/assets/images/img_uploadfile_vector.svg": "873afd1bb7c089a14891c0df825108fe",
"assets/assets/images/img_opel.svg": "55f61405781ae5bf52c8010a7837cbb1",
"assets/assets/images/img_arrow_right.svg": "f30803b916aa53f1902f7ed6188e0355",
"assets/assets/images/img_construction_house.svg": "1329105eaabfce5be7c0116bb38f3ec7",
"assets/assets/images/img_geyserrightleg_vector.svg": "2218f3d2c50f68df24cf30e830b72c19",
"assets/assets/images/img_dishwashing.svg": "eb83f24b846752716cd7ca406c8e2fca",
"assets/assets/images/img_welding.svg": "234e7e2daadc6eafd740f6d15826fac8",
"assets/assets/images/img_oilchange.svg": "18352db0878755f4beec2ae47398e99d",
"assets/assets/images/barterly-logo-blue-final.png": "a66f993e77879aa2513774d1b3b1a4a6",
"assets/assets/images/img_fountain_vector.svg": "08e807cebcda4803df267c1990aa174b",
"assets/assets/images/img_alerts_vector.svg": "d19154c168a77201ea5278d35fe8196c",
"assets/assets/images/img_tap.svg": "71d7d04b1a70dabf44b44ef33143ffad",
"assets/assets/images/img_trophy.svg": "a7c162157318718b3270932e980e105d",
"assets/assets/images/img_money.svg": "8d088233a278f090dfc92d57ad39fb37",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/img_user_onprimary_13x7.svg": "a27d96a20f3d19edb302c844e0cc5c09",
"assets/assets/images/img_electrichazardtriangle_vector.svg": "25acf1569b08dacac64d7b8bdc569c73",
"assets/assets/images/img_organize_items.svg": "edac59b176fe25c5f73f67147a1c02da",
"assets/assets/images/img_linkedin_blue_500_01.svg": "7f90ec5f23dab71248ab54518184458c",
"assets/assets/images/img_waste_house.svg": "2c97fab12f51f1f3db72ceb4940120f7",
"assets/assets/images/img_lightswitch_vector.svg": "aa8be399d5e8a9bbb37f584e35e8af25",
"assets/assets/images/icon_fountain_small.svg": "1ed6bdeb6a4ac47542b6a30ee5dc3b68",
"assets/assets/images/img_bucket.svg": "f4ff46acf85c4f5a151830d29f4ded50",
"assets/assets/images/img_sofa.svg": "8e91bc92d466cd3b4a36fe51fb8a0779",
"assets/assets/images/img_calendar_indigo_300_01.svg": "9a66079d3f972d29b77d46d06515ea3d",
"assets/assets/images/img_settings_primary_45x45.svg": "626e64a9b06f270e04fad8848d001e1b",
"assets/assets/images/img_user_onprimary.svg": "f8a8cde8378507d0f7457de6d9e427b4",
"assets/assets/images/img_camera.svg": "e5cd99dea5dc8bb8c6b58ab87f8ee181",
"assets/assets/images/img_lightflicker.svg": "3a8084db138da8dc9849768f0a48bd6a",
"assets/assets/images/img_hyundai.svg": "75e939a65cafe5a77e21d09064b15199",
"assets/assets/images/img_peugeot.svg": "fb0d00da2936811bfab771e831e26933",
"assets/assets/images/img_megaphone_black_900.svg": "48f4def1acf1acf4fb95ca6627e7c38c",
"assets/assets/images/img_drainage.svg": "8e1735d4ac9379ea6c605c2710fa0857",
"assets/assets/images/img_oven.svg": "cd116f9fd4f6b2619440628658407ef5",
"assets/assets/images/img_grid.svg": "fb55432106e2486b589c31274e65119c",
"assets/assets/images/img_kitchen.svg": "8c75be54f756891f3ba203da7cd763ad",
"assets/assets/images/img_renault.svg": "2193304dd66f818bf8b346549ad9d6e1",
"assets/assets/images/img_couch.svg": "73c6bb2271f6e6fad9fd59a2753e8374",
"assets/assets/images/img_room_house.svg": "41a43ef53ac6d5a31def07058815a835",
"assets/assets/images/img_antenna_0_onprimary_4x4.svg": "c237f6b63861ad1c9ad701cb516b8615",
"assets/assets/images/img_kia.svg": "54a96f40437e0634cc988cb9bc20e05d",
"assets/assets/images/icon_home_cleaning.svg": "820a89964bc5b2e8e00619e24e8a3c52",
"assets/assets/images/img_toyota.svg": "7e5dbf8273c99fe7a93c478d8dc7a35d",
"assets/assets/images/img_settings_blue_900.svg": "91547c8a9981225ecb1b77bedcb62f6e",
"assets/assets/images/img_settings_onprimary_17x16.svg": "64889f87e187739e45fe6061fa4fa3b4",
"assets/assets/images/img_carradio.svg": "313fb60ad704d40e1014c67d422f5813",
"assets/assets/images/img_thumbs_up_onprimary_42x35.svg": "51aa01f6baac640c4eeb795448579035",
"assets/assets/images/img_settings_primary_69x66.svg": "93a06811c4056cdbcc12060ae9db49d1",
"assets/assets/images/icon_plug_small.svg": "b054c05dafdaf53cd0d650d3fd718f2c",
"assets/assets/images/img_television.svg": "0729e7ec4af5a8bcdea417024d08e8fa",
"assets/assets/images/img_add_tasks.svg": "437192a0deb769e1c6cfc55cdcd2cd03",
"assets/assets/images/img_curtain.svg": "34e30d2c39c96a75dcc20085dcb58594",
"assets/assets/images/img_wiper.svg": "9f18d54c36b0f6c6b0c6afcfd405a120",
"assets/assets/images/img_play.svg": "845eaa0fb8ce43d99ab98878f725eee9",
"assets/assets/images/img_maximize.svg": "e116f30afe6427929be224e9599d9215",
"assets/assets/images/img_clock_indigo_300_01_21x20.svg": "1ddb54a34319f97ddb92ceb79f761da7",
"assets/assets/images/img_lightfixture_vector.svg": "8e5519d5c0453338d92bf2c4e36b09df",
"assets/assets/images/img_grid_onprimary.svg": "c1753c38406c1ffdf977e1ca7f13e7f6",
"assets/assets/images/icon_stove_small.svg": "495a682011a68fee5940581dddb53c13",
"assets/assets/images/img_gas_stove.svg": "5cf127df4f84a66401875d87b68ee23c",
"assets/assets/images/icon_alerts.svg": "26dd5d38b6276ee22d69e3c19d249968",
"assets/assets/images/img_user_onprimary_70x50.svg": "5bd216e1e19e7cc6547504334d7ab754",
"assets/assets/images/img_arrow_right_primary.svg": "0cdfc711a082d5b481d570efa5fdddfa",
"assets/assets/images/img_istockphoto_499033455_612x612.png": "29782407e939f57a0e3baea4ba51f057",
"assets/assets/images/pvsystem-vector.svg": "0fcad79c56ff4aa4c281a3f25a249288",
"assets/assets/images/img_vw.svg": "aa3b4fad60b194d0f6c00e6e89290e28",
"assets/assets/images/img_bulbbase1_vector.svg": "e835bb18459127894ca7ee1d0b4cef87",
"assets/assets/images/img_rewind.svg": "809be1416f36398b82bce14743dc916b",
"assets/assets/images/img_garage_door.svg": "597d433c07c115686997673dd24e41ce",
"assets/assets/images/img_floating_icon.svg": "a1224219341153ff579897610115a52f",
"assets/assets/images/img_bulbglass_vector.svg": "4714aed4783d182f5c12414fd42fe3a9",
"assets/assets/images/img_contrast.svg": "52538aa402ccf9f69d6195d212bf6df5",
"assets/assets/images/img_bankcard.svg": "f6b5121f6eb3051624e1ffb6723942ad",
"assets/assets/images/img_thumbs_up_onprimary.svg": "057690eba16f97b8a6d036e3a23b6623",
"assets/assets/images/icon_suggestionlist.svg": "48f4def1acf1acf4fb95ca6627e7c38c",
"assets/assets/images/img_logo_appbar.svg": "04e7dce3dad0fc665f6060e7c39a217a",
"assets/assets/images/img_carpain.svg": "7c26f3f1860053d6448d31954d313f12",
"assets/assets/images/img_stove.svg": "1137f31d9840e0c3fb7189aa546efaa5",
"assets/assets/images/img_svg.svg": "bbe2e8c3155a7424c6ee2355fd046362",
"assets/assets/images/img_nav_projects_blue_500_01.svg": "50d9bd2e70cb5025cad6455241845ddf",
"assets/assets/images/img_clock.svg": "87ecbbcf115b9b4eb0a51583861244f5",
"assets/assets/images/img_rewind_indigo_300_01.svg": "a3b289ed5df86df14af4635766ee0a56",
"assets/assets/images/img_upservplus.svg": "8ed151be21966f18ead3825baa4a55fe",
"assets/assets/images/img_arrow_up.svg": "e2d389b2064e19e6746b4a1472e3fc7e",
"assets/assets/images/icon_gate_small.svg": "6515a9cffce3281a38c2eb7789cf50e4",
"assets/assets/images/img_nav_projects_primary.svg": "2175514f14b44c107549a68fa79373c6",
"assets/assets/images/img_wallpaint.svg": "aef0c66464fd6b3da7261cb65c37e29c",
"assets/assets/images/img_ellipse_1_blue_500_01.svg": "b10e1d4efb0bea3276875273860c9e28",
"assets/assets/images/img_bookmark.svg": "25a8e812845d13766cc089be7e06ff0e",
"assets/assets/images/img_clock_primary.svg": "ab0cb90893b83a06b07c3942c1cb8710",
"assets/assets/images/img_signal.svg": "05cf9c47499274b7d3ed27f60e6f78e0",
"assets/assets/images/img_gas_house.svg": "63ac8c858b1dd0db07d19db52724e488",
"assets/assets/images/img_nav_projects_blue_500_01_20x19.svg": "fe981d4a996e1c4e8ea507f1a6ad96ec",
"assets/assets/images/img_location.svg": "c678618d8dadcb0a66923db106c2028c",
"assets/assets/images/img_fireplace.svg": "da82a586deadfedb32e96a377fe03396",
"assets/assets/images/img_searchvector.svg": "76dc3c9b83840fe4c06667d5d3f69364",
"assets/assets/images/img_settings_onprimary_44x44.svg": "0108cc58281fae079df81fd77c45ccc3",
"assets/assets/images/img_fridge.svg": "973bc5b81ab9e1526acb2d451c788c6c",
"assets/assets/images/img_woodfloor.svg": "816384ac910b765d4b93c908928052fe",
"assets/assets/images/img_close_blue_400.svg": "820a89964bc5b2e8e00619e24e8a3c52",
"assets/assets/images/img_honda.svg": "a80cad6b782fc5e1b894a75001e0c963",
"assets/assets/images/img_megaphone.svg": "06b56c4ce28af1fc169f03e867cb9fa5",
"assets/assets/images/img_clock_blue_500.svg": "81530939d87cb8d45021681510ff86d7",
"assets/assets/images/img_electrical_vector.svg": "e29851eb43c795f65390e5cbe4ce876f",
"assets/assets/images/img_group_158.svg": "384ad60951b5f3b8bb780df31e940ef2",
"assets/assets/images/img_account_arch.svg": "24fb5d3ecd26b04c011910f67d486bca",
"assets/assets/images/img_mopping.svg": "c5314f15f40f46c9dbabda294d36a9e3",
"assets/assets/images/img_floating_icon_onprimary.svg": "770cbfc23a8c40ece8a4b9746511511b",
"assets/assets/images/img_bmw.svg": "e5d83606e6a9dcb9d0cf6e4e0127d10e",
"assets/assets/images/img_nav_alerts_blue_500.svg": "6a0bbdb12941980abc790f92ae03edb4",
"assets/assets/images/img_vehicle_house.svg": "4abdba4328f3b605e5f5a8b012b64815",
"assets/assets/images/icon_lighting_small.svg": "9f1704144f3749150a63adcb6dcfb93b",
"assets/assets/images/icon_wifi_small.svg": "114c893ed00212d1bfa10107524414d8",
"assets/assets/images/img_car.svg": "1b12d7615037d0581ebf6eac393fcda5",
"assets/assets/images/img_dish_machine.svg": "7fe0aae848148eb96da8d66d3732a63b",
"assets/assets/images/img_clock_onprimary_24x24.svg": "bb71edee53bdba22037c86c89810fb9e",
"assets/assets/images/img_menu_onprimary.svg": "3250ea24aac2bedd37cc43f6155b651f",
"assets/assets/images/img_electrichazardelec_vector.svg": "86e6c8f0c85ab61473bea02901d42342",
"assets/assets/images/img_bag.svg": "db3d995e067348834a21ae23ceece940",
"assets/assets/images/img_jaguar.svg": "7ba11441fb8e880b1fea7d350dbb9df7",
"assets/assets/images/img_clock_onprimary_32x30.svg": "456b5cfbc09ffa272fbcaeb47ee60a75",
"assets/assets/images/img_woodarchitecture.svg": "66f1c54c25db91b5d52a8c765e25eb89",
"assets/assets/images/img_clock_24x24.svg": "13aabbed963e2dfcde793d3b2cee1062",
"assets/assets/images/img_dbmain.svg": "ea9c50377282d454a85b371c3e16782a",
"assets/assets/images/img_alerts_vector_blue_400.svg": "3b31ffb20a2c65adad67cc1e68fa1db9",
"assets/assets/images/img_toilet.svg": "13df1ebd686af43b8a2fc56f068914bc",
"assets/assets/images/img_television_light_blue_900.svg": "4dfad9418b1d04b5b2723e9ac1a2400a",
"assets/assets/images/icon_services.svg": "c8263493a25951b333f26e0219257e3e",
"assets/assets/images/img_thumbs_up_blue_500_01.svg": "bda8cf6b6e5a2c65795f9b04e606540c",
"assets/assets/images/img_laundry_house.svg": "160059b01870bb5345902184069ae487",
"assets/assets/images/icon_home_maintenance.svg": "8d727d3a4ec354867bab47ab0ab6c54b",
"assets/assets/images/img_thumbs_up_1.svg": "a7b38aa7f7602b756ee3467dd37b3cfc",
"assets/assets/images/img_thumbs_up_49x51.svg": "24e776576d9e0a61f8faf1595060661f",
"assets/assets/images/img_contrast_blue_500_01.svg": "bb779a4d6cd89e9c9badbd797b6b2f4e",
"assets/assets/images/img_lock.svg": "82c5c20732cfdd1d254f9bb100a03a39",
"assets/assets/images/img_kitchen_cupboard.svg": "74ea2e027d93c58233111823e482bb66",
"assets/assets/images/img_arrow_up_blue_500_01.svg": "59c267ec5e0f0b843c2642cb6ce323e2",
"assets/assets/images/img_cabinets.svg": "8923730ee2e1e5cbb792fe0b9507c44d",
"assets/assets/images/img_thumbs_up_primary_21x18.svg": "49c8a2878982b5850b9cbb0f66269c73",
"assets/assets/images/img_geyser.svg": "ce5e8917f5b5bc17a1501a7dff49fd97",
"assets/assets/images/img_user.svg": "69423e9f4df52f51aab87fb501443f2c",
"assets/assets/images/settings-svgrepo-com.svg": "d5492ec2ff4825c5fa5a2779e414da90",
"assets/assets/images/img_clock_blue_500_21x20.svg": "61e5c4131d110a0acda3f29ba9ee3335",
"assets/assets/images/img_irrigation.svg": "5099974a77d6c717d97777890fba956c",
"assets/assets/services.json": "5d034ceecba01ca795db26c2e5d7a38c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c5bb4458dbb878784e126d493b84e6cc",
"assets/AssetManifest.json": "880d33b4f7cb174a179a8cb675059556",
"favicon.png": "1996ba4abd979e244338cc111fb2fd39",
"main.dart.js": "1997e5b12488639029c618c0c0f4909e",
"manifest.json": "be75d3332ba08eb207558280191b52e2",
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
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "c99c72231acb89eb1ca7c493040cdb3f"};
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
