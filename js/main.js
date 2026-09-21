const translations = {
  "en": {
    "pageTitle": "My Night Ride",
    "pageDescription": "My Night Ride : a portrait mobile action game built in Unity and C#, combining brick-breaking mechanics, vehicle control, multi-wave levels and persistent progression.",
    "nav.about": "About",
    "nav.systems": "Systems",
    "nav.testing": "Testing",
    "nav.coverage": "Test Coverage",
    "nav.architecture": "Architecture",
    "intro.eyebrow": "GAME PROJECT SHOWCASE",
    "intro.summary": "A mobile arkanoid game built around touch-controlled driving, ball-based obstacle clearing, timed levels, and persistent progression.",
    "meta.engine": "Engine",
    "meta.language": "Language",
    "meta.platform": "Platform",
    "meta.status": "Status",
    "meta.development": "In Development",
    "intro.period": "Solo project • 2026 – Present",
    "intro.button": "Explore the Project",
    "media.preview1Alt": "Core gameplay preview from My Night Ride",
    "media.preview2Alt": "Multi-wave and opponent vehicle gameplay preview from My Night Ride",
    "media.preview1Caption": "Core gameplay.",
    "media.preview2Caption": "Level and opponent vehicle gameplay.",
    "media.waveCaption": "Wave transition.",
    "media.waveAlt": "Wave transition gameplay in My Night Ride",
    "media.ballCaption": "Ball and brick gameplay.",
    "media.rivalAlt": "Opponent vehicle gameplay in My Night Ride",
    "media.rivalCaption": "Opponent vehicle gameplay.",
    "media.overworldCaption": "Overworld progression.",
    "media.dialogueCaption": "Dialogue sequence.",
    "about.eyebrow": "ABOUT THE PROJECT",
    "about.title": "What is My Night Ride?",
    "about.lead": "Each level is a timed sequence of waves where the player steers horizontally, launches balls to clear obstacles, and manages a limited number of lives. Power-ups, scoring, opponent vehicles and changing wave layouts add variation throughout a level.",
    "about.body": "Between levels, the player returns to an overworld used for level selection and progression. Currency, upgrades, unlocks, best scores and other progression data persist between sessions.",
    "about.body2": "",
    "about.footer": "The Android version also integrates Unity Ads.",
    "about.ads": "",
    "media.game1Alt": "My Night Ride core gameplay",
    "media.game2Alt": "My Night Ride overworld progression",
    "media.game1Caption": "In-level gameplay.",
    "media.game2Caption": "Overworld progression.",
    "tech.eyebrow": "TECHNOLOGIES USED",
    "tech.title": "Tools & technologies",
    "tech.physics": "Rigidbody2D / 2D Physics",
    "tech.androidBuild": "Android Build Pipeline",
    "tech.stack": "Unity Console / Stack Traces",
    "tech.events": "Event-Driven Architecture",
    "tech.services": "Service-Based Architecture",
    "tech.persistence": "Persistent Save / Progression (JsonUtility + PlayerPrefs)",
    "tech.note": "UniTask handles asynchronous gameplay flows, ScriptableObjects define configurable gameplay data, and persistent progression is serialized to JSON with Unity JsonUtility and stored through PlayerPrefs.",
    "systems.eyebrow": "GAMEPLAY & SYSTEMS",
    "systems.title": "Core systems",
    "systems.waveTitle": "Wave-Based Level Flow",
    "systems.waveBody": "Levels are built from multiple waves. Clearing the current wave starts a transition into the next section; clearing the final wave moves into the level-ending flow and then back to overworld progression.",
    "systems.ballTitle": "Ball & Brick Gameplay",
    "systems.ballBody": "Touch input controls the car and launches balls used to clear destructible obstacles. Ball lifecycle, shooting, wave state and related gameplay behaviour are handled by dedicated systems.",
    "systems.rivalTitle": "Opponent Vehicles",
    "systems.rivalBody": "Opponent vehicles introduce an additional hazard during levels. They can interact directly with the player through collisions and are integrated with wave progression and level state.",
    "systems.overworldTitle": "Overworld & Progression",
    "systems.overworldBody1": "The overworld handles level selection and unlock progression. Persistent data includes currency, upgrades, unlock state, regenerating overworld lives, settings, statistics and map best scores.",
    "systems.overworldBody2": "Upgrade definitions are configured separately from the player's saved upgrade levels, allowing gameplay systems to request the resulting values without depending on shop or save-data details.",
    "systems.dialogueTitle": "Dialogue & Async Sequences",
    "systems.dialogueBody": "UniTask is used for multi-step gameplay flows such as dialogue, wave transitions, car movement and the level outro. The final level flow can run dialogue and the player's drive-away sequence in parallel and continue only after both have finished.",
    "media.ballAlt": "Ball-based gameplay in My Night Ride",
    "media.overworldAlt": "My Night Ride overworld progression",
    "media.dialogueAlt": "Dialogue sequence in My Night Ride",
    "testing.eyebrow": "TESTING APPROACH",
    "testing.title": "Testing during development",
    "testing.lead": "Testing and debugging new features in isolation and again in the wider gameplay flow, with extra attention to mobile input and Android-specific behaviour.",
    "testing.functionalTitle": "Functional Testing",
    "testing.functionalBody": "Core behaviours such as input, ball lifecycle, wave completion, upgrades, failure states and progression are checked against their intended behaviour.",
    "testing.integrationTitle": "Integration Testing",
    "testing.integrationBody": "Interacting systems are tested together. Especially where input, pausing, async sequences and scene state affect each another.",
    "testing.regressionTitle": "Regression Testing",
    "testing.regressionBody": "Changes are retested against previously working flows, including pause/resume, retry behaviour, wave transitions, progression and Android lifecycle events.",
    "testing.runtimeTitle": "Runtime Debugging",
    "testing.runtimeBody": "Unity Console, stack traces and Android Logcat are used to trace runtime failures and platform-specific problems.",
    "coverage.eyebrow": "REPRESENTATIVE TEST COVERAGE",
    "coverage.title": "Selected test cases",
    "coverage.lead": "A small selection of real cases from development, including normal behaviour and integration cases.",
    "coverage.inputTitle": "Mobile Input & Application State",
    "coverage.flowTitle": "Wave & Level Flow",
    "coverage.progressionTitle": "Progression & Upgrades",
    "table.test": "Test",
    "table.expected": "Expected Result",
    "table.status": "Status",
    "status.passed": "Passed",
    "status.retest": "Needs Retest",
    "status.retestAndroid": "Needs Retest on Android",
    "test.input1": "Touch and hold the left movement zone without dragging",
    "expected.input1": "Car moves left continuously while the touch is held",
    "test.input4": "Release the active movement touch",
    "expected.input4": "Ball is fired when the movement touch is released",
    "test.input5": "Touch UI while gameplay input is active",
    "expected.input5": "UI touch is ignored by gameplay movement input",
    "test.app1": "Send the game to the background during gameplay",
    "expected.app1": "Pause menu opens automatically and gameplay stops",
    "test.input9": "Run an Android build after progression or upgrade changes",
    "expected.input9": "Car still responds to touch input with a valid movement speed",
    "test.flow1": "Clear all bricks in a normal wave",
    "expected.flow1": "Current wave completes and the next wave transition starts",
    "test.flow3": "Enter a wave transition",
    "expected.flow3": "A new shootable ball is not available before the transition finishes",
    "test.flow4": "Complete the final wave",
    "expected.flow4": "Race timer stops, score and stars are calculated, and the level outro begins",
    "test.flow5": "Complete the final wave with zero stars",
    "expected.flow5": "Level is reported as failed instead of completed",
    "test.flow9": "Finish the level-end dialogue and car drive-away",
    "expected.flow9": "Level completes only after both asynchronous sequences finish",
    "test.prog1": "Purchase an upgrade in the shop",
    "expected.prog1": "Upgrade level increases and its configured cost is deducted",
    "test.prog2": "Restart or reload after purchasing an upgrade",
    "expected.prog2": "Purchased upgrade level is restored from save data",
    "test.prog4": "Upgrade car speed",
    "expected.prog4": "Player movement uses the new CarSpeed value",
    "test.prog6": "Start a level with zero overworld lives",
    "expected.prog6": "The level cannot be started",
    "test.prog9": "Start game with saved upgrade levels ",
    "expected.prog9": "Upgrades levels correctly load from database",
    "architecture.eyebrow": "TECHNICAL ARCHITECTURE",
    "architecture.title": "Project Architecture",
    "architecture.lead": "My Night Ride is split into focused gameplay and progression systems rather than concentrating behaviour in large MonoBehaviours. <code>GameServices</code> provides a central access point for shared systems, while <code>GameplaySceneInitializer</code> constructs, connects and tears down gameplay-scoped services.",
    "architecture.lifecycleTitle": "Scene Lifecycle",
    "architecture.lifecycleBody": "<code>GameplaySceneInitializer</code> creates and connects gameplay services during scene setup, then explicitly unregisters observers, unbinds events, disposes the race timer and clears gameplay service references during teardown.",
    "architecture.persistenceTitle": "Structured Persistence",
    "architecture.persistenceBody": "Runtime progression is held in a serializable <code>SaveData</code> model. <code>SaveService</code> converts it to JSON with <code>JsonUtility</code> and stores it through <code>PlayerPrefs</code>.",
    "architecture.upgradesTitle": "Data-Driven Upgrades",
    "architecture.upgradesBody": "<code>UpgradeDefinition</code> ScriptableObjects hold configurable costs, values and maximum levels. <code>UpgradeService</code> combines those definitions with the player's saved upgrade levels and exposes the resulting values to gameplay.",
    "architecture.asyncTitle": "Async Level Flow",
    "architecture.asyncBody": "<code>LevelStateController</code> handles the final-wave branch, scoring and star calculation. When the level succeeds, dialogue and the player's drive-away run concurrently through <code>UniTask.WhenAll</code> before the <code>LevelCompleted</code> event is raised.",
    "architecture.servicesTitle": "Services & Lifecycle",
    "architecture.servicesBody1": "<code>GameplaySceneInitializer</code> acts as the gameplay scene's setup point, constructing and connecting systems such as ball handling, pausing, scoring, opponent vehicles, dialogue and race timing.",
    "architecture.servicesBody2": "Selected systems are exposed through <code>GameServices</code>. Gameplay-scoped observers and event subscriptions are explicitly removed when the scene is destroyed, keeping scene-specific state from carrying into later scenes.",
    "architecture.servicesCaption": "Selected gameplay services and their initialization lifecycle.",
    "architecture.updateTitle": "Centralized Update Dispatch",
    "architecture.updateBody1": "Systems that need frame or physics updates can implement <code>IUpdateObserver</code> or <code>IFixedUpdateObserver</code> and register with a shared <code>UpdateManager</code>.",
    "architecture.updateBody2": "<code>LevelWaveGroup</code>, for example, registers for fixed updates only while a wave is moving into position and unregisters as soon as that movement finishes.",
    "architecture.updateCaption": "UpdateManager and observer registration during wave movement.",
    "architecture.flowTitle": "Level Completion Flow",
    "architecture.flowBody1": "<code>LevelStateController</code> tracks destructible bricks and decides whether completion advances to another wave or enters the final level flow.",
    "architecture.flowBody2": "On the final wave, the race timer stops, score and stars are calculated, and a zero-star result reports failure. A successful outro coordinates background state, opponent vehicles, dialogue and the player's drive-away; <code>UniTask.WhenAll</code> waits for the parallel outro operations before raising level completion.",
    "architecture.flowCaption": "From final brick destruction to wave progression, failure or successful completion.",
    "architecture.example": "CONCRETE EXAMPLE",
    "architecture.exampleTitle": "Gameplay reads the result, not the storage details",
    "architecture.exampleBody": "The movement controller can use the player's current car-speed value without needing to know how upgrade levels are configured, purchased or persisted.",
    "media.umlServicesAlt": "My Night Ride scene lifecycle UML class diagram",
    "media.umlPersistenceAlt": "My Night Ride structured persistence UML class diagram",
    "media.umlUpgradesAlt": "My Night Ride data-driven upgrades UML class diagram",
    "media.umlAsyncAlt": "My Night Ride async level flow UML sequence diagram",
    "media.umlUpdateAlt": "My Night Ride centralized update dispatch diagram",
    "media.umlFlowAlt": "My Night Ride level completion flow diagram",
    "status.eyebrow": "PROJECT STATUS",
    "status.title": "Currently in Development",
    "footer.name": "Dániel Bőcskei",
    "footer.top": "Back to top ↑",
    "lightbox.close": "Close image viewer",
  },
  "hu": {
    "pageTitle": "My Night Ride",
    "pageDescription": "A My Night Ride egy Unityben és C#-ban készülő arkanoid stílusú mobiljáték, amiben autóból golyókat kilőve kell összetörni a játékosnak az összes téglát a hullámkra osztott pályákon.",
    "nav.about": "Bemutatkozás",
    "nav.systems": "Rendszerek",
    "nav.testing": "Tesztelés",
    "nav.coverage": "Tesztesetek",
    "nav.architecture": "Architektúra",
    "intro.eyebrow": "JÁTÉKPROJEKT BEMUTATÓ",
    "intro.summary": "Mobil arkádjáték érintésvezérelt autóirányítással, labdás akadályrombolással, időre teljesítendő pályákkal és tartós fejlesztési rendszerrel.",
    "meta.engine": "Engine",
    "meta.language": "Nyelv",
    "meta.platform": "Platform",
    "meta.status": "Állapot",
    "meta.development": "Fejlesztés alatt",
    "intro.period": "Egyéni projekt • 2026 – jelenleg",
    "intro.button": "Projekt megtekintése",
    "media.preview1Alt": "A My Night Ride alap játékmenetének előnézete",
    "media.preview2Alt": "A My Night Ride hullámkra osztott játékmenetének és rivális járműveinek előnézete",
    "media.preview1Caption": "Alap játékmenet.",
    "media.preview2Caption": "Pálya hullám átvezetés (Wave transition).",
    "media.waveCaption": "Pálya hullám átvezetés (Wave transition).",
    "media.waveAlt": "Hullám átvezetés játékmenet a My Night Ride-ban",
    "media.ballCaption": "Labdás játékmenet.",
    "media.rivalAlt": "Ellenfél járműves játékmenet a My Night Ride-ban",
    "media.rivalCaption": "Ellenfél járműves játékmenet.",
    "media.overworldCaption": "Világtérképes haladás.",
    "media.dialogueCaption": "Párbeszéd-jelenet.",
    "about.eyebrow": "A PROJEKTRŐL",
    "about.title": "Mi az a My Night Ride?",
    "about.lead": "A My Night Ride egy Unityben és C#-ban készülő arkanoid stílusú mobiljáték, amiben autóból golyókat kilőve kell összetörnie a játékosnak az összes téglát a több hullámól álló pályákon megadott idő alatt. ",
    "about.body": "A power-upok, pontozás, ellenfél járművek és változó hullámelrendezések teszik változatosabbá a pályákat. A pályák között a játékos visszatér a világtérképre, ahol pályát választ és továbbhalad a fejlődési rendszerben. A pénznem, fejlesztések, feloldások, legjobb eredmények és más előrehaladási adatok a játékmenetek között is megmaradnak. ",
    "about.body2": "A pályák között a játékos visszatér a világtérképre, ahol pályát választ és továbbhalad a fejlődési rendszerben. A pénznem, fejlesztések, feloldások, legjobb eredmények és más előrehaladási adatok a játékmenetek között is megmaradnak.",
    "about.footer": "Az Android-verzió Unity Ads integrációt is használ.",
    "about.ads": "",
    "media.game1Alt": "My Night Ride alap játékmenet",
    "media.game2Alt": "My Night Ride világtérképen haladás",
    "media.game1Caption": "Pályán belüli játékmenet.",
    "media.game2Caption": "Világtérképen haladás.",
    "tech.eyebrow": "HASZNÁLT TECHNOLÓGIÁK",
    "tech.title": "Eszközök és technológiák",
    "tech.physics": "Rigidbody2D / 2D fizika",
    "tech.androidBuild": "Android build folyamat",
    "tech.stack": "Unity Console / stack trace-ek",
    "tech.events": "Eseményvezérelt architektúra",
    "tech.services": "Service-alapú architektúra",
    "tech.persistence": "Tartós mentés / fejlődés (JsonUtility + PlayerPrefs)",
    "tech.note": "A UniTask kezeli az aszinkron játékmeneti folyamatokat, a ScriptableObjectek konfigurálható játékmeneti adatokat tárolnak, a tartós fejlődés pedig Unity JsonUtility segítségével JSON-formátumba kerül, majd PlayerPrefsben tárolódik.",
    "systems.eyebrow": "JÁTÉKMENET ÉS RENDSZEREK",
    "systems.title": "Fő rendszerek",
    "systems.waveTitle": "Hullámokra osztott pályák",
    "systems.waveBody": "A pályák több körből / hullámból állnak. Az aktuális hullám teljesítése átmenetet indít a következő szakaszba. Az utolsó hullám teljesítése az outro folyamatba, utána pedig a siker vagy kudarc (success/failure) képernyőhöz vezet.",
    "systems.ballTitle": "Labda- és téglatörő játékmenet",
    "systems.ballBody": "Az érintőképernyős inputtal irányítható az autó és indíthatók a rombolható akadályok összetörésére használható labdák. A labdák életciklusát, a kilövést, a hullámállapotot és a kapcsolódó játékmenetet külön rendszerek kezelik.",
    "systems.rivalTitle": "Rivális versenyzők",
    "systems.rivalBody": "Az ellenfél járművek további veszélyforrást jelentenek a pályákon. Ütközéssel közvetlenül is életvesztést jelentenek a játékosra, működésük pedig kapcsolódik a hullámváltásokhoz és a pálya beállításaihoz.",
    "systems.overworldTitle": "Térkép és fejlődés",
    "systems.overworldBody1": "A világtérkép kezeli a pályaválasztást és a feloldási folyamatot. A tartós adatok között szerepel a pénznem, fejlesztések, feloldási állapot, regenerálódó világtérképes életek, beállítások, statisztikák és pályánkénti legjobb pontszámok.",
    "systems.overworldBody2": "A fejlesztések konfigurációja külön van a játékos mentett fejlesztési szintjeitől, így a játékrendszerek a kész értékeket kérhetik le anélkül, hogy a bolt vagy a mentés részleteit ismernék.",
    "systems.dialogueTitle": "Párbeszéd és aszinkron folyamatok",
    "systems.dialogueBody": "A UniTask kezeli a több lépésből álló folyamatokat, például a párbeszédeket, hullámátmeneteket, autómozgást és az outro-t. Az outro folyamatban a párbeszéd és az autó kihajtása párhuzamosan futhat, a pályabefejezését pedig csak mindkettő befejezése után történik meg.",
    "media.ballAlt": "Labdás játékmenet a My Night Ride-ban",
    "media.overworldAlt": "My Night Ride térképes fejlődés",
    "media.dialogueAlt": "Párbeszéd-jelenet a My Night Ride-ban",
    "testing.eyebrow": "TESZTELÉSI MÓDSZER",
    "testing.title": "Tesztelés fejlesztés közben",
    "testing.lead": "Az új funkciókat önállóan és a teljes játékmeneti folyamat részeként is ellenőrzöm, külön figyelemmel a mobil bevitelre és Android-specifikus viselkedésre.",
    "testing.functionalTitle": "Funkcionális tesztelés",
    "testing.functionalBody": "Az olyan alapműködéseket, mint a bevitel, labda-életciklus, hullámteljesítés, fejlesztések, és fail-state a tervezett működéshez viszonyítva ellenőrzöm.",
    "testing.integrationTitle": "Integrációs tesztelés",
    "testing.integrationBody": "Az egymásra befolyással levő rendszereket együtt is tesztelem, ilyen például ahol az input, pause, riválisok, labdák, dialógusok, időzítők és scene váltások befolyásolják egymást.",
    "testing.regressionTitle": "Regressziós tesztelés",
    "testing.regressionBody": "A módosítások után újratesztelem a korábban működő folyamatokat, többek között a pause/resume, újrapróbálást, hullám váltásokat, fejlesztéseket és Android-életciklus eseményeket.",
    "testing.runtimeTitle": "Runtime Debugolás",
    "testing.runtimeBody": "Unity Console-t, stack trace-eket és Android Logcatet használok futásidejű hibák és platformspecifikus problémákra.",
    "coverage.eyebrow": "TESZTLEFEDETTSÉG",
    "coverage.title": "Tesztesetek",
    "coverage.lead": "Valós fejlesztési tesztek rövid válogatása.",
    "coverage.inputTitle": "Mobil bevitel és alkalmazásállapot",
    "coverage.flowTitle": "Hullám- és pályafolyamat",
    "coverage.progressionTitle": "Fejlődés és fejlesztések",
    "table.test": "Teszt",
    "table.expected": "Elvárt eredmény",
    "table.status": "Állapot",
    "status.passed": "Sikeres",
    "status.retest": "Újratesztelendő",
    "status.retestAndroid": "Androidon újratesztelendő",
    "test.input1": "A bal oldali mozgási zóna érintése és nyomva tartása húzás nélkül",
    "expected.input1": "Az autó folyamatosan balra mozog, amíg az érintés tart",
    "test.input4": "Az aktív mozgási érintés felengedése",
    "expected.input4": "A labda az érintés felengedésekor kilövődik",
    "test.input5": "UI elem megérintése aktív játékmeneti bevitel mellett",
    "expected.input5": "A UI-érintést a játékmeneti mozgásbevitel figyelmen kívül hagyja",
    "test.app1": "Az alkalmazás háttérbe küldése játék közben",
    "expected.app1": "A szünet menü automatikusan megnyílik és a játékmenet megáll",
    "test.input9": "Android build futtatása fejlődési vagy fejlesztési módosítások után",
    "expected.input9": "Az autó továbbra is reagál az érintéses bevitelre helyes mozgási sebességgel",
    "test.flow1": "Minden akadály eltávolítása egy normál hullámban",
    "expected.flow1": "Az aktuális hullám befejeződik és elindul a következő hullám transition-je",
    "test.flow3": "Belépés hullám transition-be",
    "expected.flow3": "Új kilőhető labda nem válik elérhetővé az átmenet befejezéséig",
    "test.flow4": "Az utolsó hullám teljesítése",
    "expected.flow4": "A versenyidő leáll, a pontszám és csillagok kiszámításra kerülnek, majd megjelenik a megfelelő záróképernyő",
    "test.flow5": "Az utolsó hullám teljesítése nulla csillaggal",
    "expected.flow5": "A pálya sikertelen lesz, teljesített helyett",
    "test.flow9": "A pályavégi dialógus és az autó kihajtásának befejezése",
    "expected.flow9": "A pálya csak mindkét aszinkron folyamat befejezése után teljesül",
    "test.flow10": "Egy ellenfél jármű legyőzése és a következő aktiválása ugyanazon a pályán",
    "expected.flow10": "A legyőzött ellenfél távozhat, miközben a következő aktívvá válik",
    "test.prog1": "Fejlesztés vásárlása a boltban",
    "expected.prog1": "A fejlesztési szint nő, és a konfigurált költség levonásra kerül",
    "test.prog2": "Újraindítás vagy újratöltés fejlesztés vásárlása után",
    "expected.prog2": "A megvásárolt fejlesztési szint visszatöltődik a mentésből",
    "test.prog4": "Autósebesség fejlesztése",
    "expected.prog4": "A játékos mozgása az új CarSpeed értéket használja",
    "test.prog6": "Pálya indítása nulla világtérképes élettel",
    "expected.prog6": "A pálya nem indítható el",
    "test.prog9": "Játék indítása a mentett fejlesztési szintekkel",
    "expected.prog9": "A fejlesztési szintek megfelelően betöltődnek az adatbázisból",
    "architecture.eyebrow": "TECHNIKAI ARCHITEKTÚRA",
    "architecture.title": "Projektarchitektúra",
    "architecture.lead": "A My Night Ride a játékmeneti és fejlődési feladatokat fókuszált rendszerekre bontja ahelyett, hogy nagy MonoBehaviour osztályokba sűrítené őket. A <code>GameServices</code> központi hozzáférési pontot ad a megosztott rendszerekhez, míg a <code>GameplaySceneInitializer</code> létrehozza, összeköti és lebontáskor kitakarítja a játékmenethez tartozó szolgáltatásokat.",
    "architecture.lifecycleTitle": "Jelenet életciklusa",
    "architecture.lifecycleBody": "A <code>GameplaySceneInitializer</code> a jelenet felépítése (setup) során létrehozza és összekapcsolja a játékmenet-szolgáltatásokat (gameplay services), majd a lebontás (teardown) során kifejezetten leiratkoztatja a megfigyelőket (observers), leköti az eseményeket (unbinds events), felszabadítja a versenyidőzítőt (disposes the race timer), és törli a játékmenet-szolgáltatások referenciáit.",
    "architecture.persistenceTitle": "Strukturált adattárolás",
    "architecture.persistenceBody": "A futásidejű haladás (runtime progression) egy szerializálható <code>SaveData</code> modellben tárolódik. A <code>SaveService</code> ezt a JsonUtility segítségével JSON formátumba konvertálja, majd a PlayerPrefs-en keresztül menti el.",
    "architecture.lifecycleCaption": "A GameplaySceneInitializer, a kiválasztott szolgáltatások és a GameServices hozzáférés.",
    "architecture.persistenceCaption": "A SaveService, a SaveData és a Unity perzisztencia-folyamata (vagy: tartós adattárolási folyamata)",
    "architecture.upgradesCaption": "Fejlesztési definíciók (upgrade definitions), mentett szintek és futásidejű értékek.",
    "architecture.asyncCaption": "Az utolsó hullám teljesítése és a párhuzamos outró-műveletek.",
    "architecture.upgradesTitle": "Adatvezérelt fejlesztések",
    "architecture.upgradesBody": "Az <code>UpgradeDefinition</code> ScriptableObject-ek konfigurálható költségeket, értékeket és maximális szinteket tartalmaznak. Az <code>UpgradeService</code> összesíti ezeket a definíciókat a játékos mentett fejlesztési szintjeivel, és az így kapott értékeket elérhetővé teszi a játékmenet (gameplay) számára.",
    "architecture.asyncTitle": "Aszinkron szintkezelés",
    "architecture.asyncBody": "A <code>LevelStateController</code> kezeli az utolsó hullám (final-wave) elágazást, a pontozást és a csillagok kiszámítását. A szint sikeres teljesítésekor a dialógus és a játékos elvezetése (drive-away) párhuzamosan fut a <code>UniTask.WhenAll</code> segítségével, mielőtt a <code>LevelCompleted</code> esemény kiváltásra kerülne.",
    "architecture.servicesTitle": "Szolgáltatások és életciklus",
    "architecture.servicesBody1": "A <code>GameplaySceneInitializer</code> a játékmeneti jelenet felépítési pontja: létrehozza és összeköti többek között a labdakezelést, szüneteltetést, pontozást, rivális járműveket, párbeszédeket és versenyidőzítést kezelő rendszereket.",
    "architecture.servicesBody2": "A kiválasztott rendszerek a <code>GameServices</code> segítségével érhetők el. A jelenethez kötött observerek és eseményfeliratkozások a jelenet megszűnésekor explicit módon eltávolításra kerülnek, így a játékmeneti állapot nem szivárog át a következő jelenetekbe.",
    "architecture.servicesCaption": "Kiválasztott játékmeneti szolgáltatások és inicializálási életciklusuk.",
    "architecture.updateTitle": "Központosított frissítéskezelés",
    "architecture.updateBody1": "A frame- vagy fizikai frissítést igénylő rendszerek megvalósíthatják az <code>IUpdateObserver</code> vagy <code>IFixedUpdateObserver</code> interfészt, majd regisztrálhatnak a közös <code>UpdateManager</code>-hez.",
    "architecture.updateBody2": "A <code>LevelWaveGroup</code> például csak addig regisztrál fixed update frissítésre, amíg a hullám a helyére mozog, majd a mozgás befejezésekor azonnal leiratkozik.",
    "architecture.updateCaption": "UpdateManager és observer-regisztráció a hullám mozgása közben.",
    "architecture.flowTitle": "Pályabefejezési folyamat",
    "architecture.flowBody1": "A <code>LevelStateController</code> követi a rombolható téglákat, és eldönti, hogy a teljesítés egy következő hullámra lép-e tovább vagy belép a végső pályafolyamatba.",
    "architecture.flowBody2": "Az utolsó hullámnál a versenyidő leáll, a pontszám és csillagok kiszámításra kerülnek, a nulla csillagos eredmény pedig kudarcot jelent. Sikeres záráskor a háttérállapot, rivális járművek, párbeszéd és az autó kihajtása kerül összehangolásra; a <code>UniTask.WhenAll</code> megvárja a párhuzamos műveletek befejezését a pályateljesítés jelzése előtt.",
    "architecture.flowCaption": "Az utolsó tégla megsemmisítésétől a hullámváltásig, kudarcig vagy sikeres teljesítésig.",
    "architecture.example": "KONKRÉT PÉLDA",
    "architecture.exampleTitle": "A játékmenet az eredményt olvassa be, nem a tárolási részleteket",
    "architecture.exampleBody": "A mozgásvezérlő (movement controller) anélkül tudja használni a játékos aktuális autósebesség-értékét, hogy tudnia kellene, hogyan vannak a fejlesztési szintek konfigurálva, megvásárolva vagy perzisztálva (tartósan elmentve).",
    "media.umlServicesAlt": "My Night Ride játékmeneti szolgáltatás-életciklus diagram",
    "media.umlUpdateAlt": "My Night Ride központosított frissítéskezelési diagram",
    "media.umlFlowAlt": "My Night Ride pályabefejezési folyamatábra",
    "status.eyebrow": "PROJEKT ÁLLAPOTA",
    "status.title": "Fejlesztés alatt",
    "footer.name": "Bőcskei Dániel",
    "footer.top": "Vissza az elejére ↑",
    "lightbox.close": "Képnézegető bezárása"
  }
};

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

function normalizeLanguage(value) {
  if (!value) return null;
  const normalized = String(value).toLowerCase();
  if (normalized === "en" || normalized.startsWith("en-")) return "en";
  if (normalized === "hu" || normalized.startsWith("hu-")) return "hu";
  return null;
}

function detectBrowserLanguage() {
  const languages = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const language of languages) {
    const normalized = normalizeLanguage(language);
    if (normalized) return normalized;
  }

  return "en";
}

function getUrlLanguage() {
  try {
    return normalizeLanguage(new URLSearchParams(window.location.search).get("lang"));
  } catch (_) {
    return null;
  }
}

function getStoredLanguage() {
  try {
    return normalizeLanguage(localStorage.getItem("mnr-language"));
  } catch (_) {
    return null;
  }
}

function updateLanguageUrl(lang) {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  } catch (_) {}
}

function setLanguage(language, updateUrl = true) {
  const lang = normalizeLanguage(language) || "en";
  const dictionary = translations[lang];

  document.documentElement.lang = lang;
  document.title = dictionary.pageTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", dictionary.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key && Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");
    if (key && Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.getAttribute("data-i18n-alt");
    if (key && Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    if (key && Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    const active = button.dataset.language === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try { localStorage.setItem("mnr-language", lang); } catch (_) {}
  if (updateUrl) updateLanguageUrl(lang);
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const initialLanguage = getUrlLanguage() || getStoredLanguage() || detectBrowserLanguage();
setLanguage(initialLanguage, false);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.querySelector(".lightbox-close");

document.querySelectorAll("[data-lightbox]").forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeButton.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && lightbox.classList.contains("open")) closeLightbox(); });
