# My Night Ride: Portfolio

This package contains the current portfolio page, bilingual language switching, portrait gameplay-media styling, and four focused UML diagrams.

## Replace / copy
- `index.html`
- `css/style.css`
- `js/main.js`
- `assets/images/uml-scene-lifecycle.png`
- `assets/images/uml-persistence.png`
- `assets/images/uml-upgrades.png`
- `assets/images/uml-async-level-flow.png`

## Gameplay media expected by index.html
All gameplay media is now GIF-based. Put these in `assets/images/`:

- `edited_gameplay.gif`
- `transition.gif`
- `uninterrupted_gameplay.gif`
- `ball-gameplay.gif`
- `opponent-vehicles.gif`
- `overworld.gif`
- `dialogue.gif`

Architecture diagrams intentionally remain PNG files. The opponent-vehicle media reference is named `opponent-vehicles.gif` to match the reader-facing terminology.

## UML diagrams
- Scene Lifecycle: `GameplaySceneInitializer`, selected runtime services, `GameServices`
- Structured Persistence: `SaveService`, `SaveData`, `MapBestScoreData`, `JsonUtility`, `PlayerPrefs`
- Data-Driven Upgrades: `UpgradeDatabase`, `UpgradeDefinition`, `UpgradeService`, `UpgradeLevelData`
- Async Level Flow: final-wave completion and concurrent dialogue / `DriveAway()` flow

SVG source versions are in `uml-source/`.

## Notes
The diagrams only show members and relationships supported by the project information supplied for this portfolio. Where a source definition was not available, details were intentionally left out rather than invented.

## Publish
```bash
git add .
git commit -m "Update My Night Ride portfolio"
git push
```
