// DUNGEON
import adrianPalace from '../../../public/images/dungeons/adrian-palace.png'
import altarOfDedication from '../../../public/images/dungeons/altar-of-dedication.png'
import alteraCore from '../../../public/images/dungeons/altera-core.png'
import alteraPlains from '../../../public/images/dungeons/altera-plains.png'
import ancientWaterway from '../../../public/images/dungeons/ancient-waterway.png'
import ashCoveredVillage from '../../../public/images/dungeons/ash-covered-village.png'
import atlasCity from '../../../public/images/dungeons/atlas-city.png'
import banthusCave from '../../../public/images/dungeons/banthus-cave.png'
import barrenSander from '../../../public/images/dungeons/barren-sander.png'
import bethmaLake from '../../../public/images/dungeons/bethma-lake.png'
import bethmaLakeNight from '../../../public/images/dungeons/bethma-lake-night.png'
import burningHopeBridge from '../../../public/images/dungeons/burning-hope-bridge.png'
import burntForest from '../../../public/images/dungeons/burnt-forest.png'
import callusoTribalVillage from '../../../public/images/dungeons/calluso-tribal-village.png'
import cargoAirship from '../../../public/images/dungeons/cargo-airship.png'
import celestialCrossroad from '../../../public/images/dungeons/celestial-crossroad.png'
import collapsingTempleOfFire from '../../../public/images/dungeons/collapsing-temple-of-fire.png'
import commercialArea1 from '../../../public/images/dungeons/commercial-area-1.png'
import crimsonCradleOfFlames from '../../../public/images/dungeons/crimson-cradle-of-flames.png'
import crimsonTowerOfHowlingFlames from '../../../public/images/dungeons/crimson-tower-of-howling-flames.png'
import darkElvesOutpost from '../../../public/images/dungeons/dark-elves-outpost.png'
import debrianLaboratory from '../../../public/images/dungeons/debrian-laboratory.png'
import diceonMines from '../../../public/images/dungeons/diceon-mines.png'
import dragonNest from '../../../public/images/dungeons/dragon-nest.png'
import dragonRoad from '../../../public/images/dungeons/dragon-road.png'
import elrianodeCity from '../../../public/images/dungeons/elrianode-city.png'
import elTowerDefense from '../../../public/images/dungeons/el-tower-defense.png'
import elysionTower from '../../../public/images/dungeons/elysion-tower.png'
import forestRuins from '../../../public/images/dungeons/forest-ruins.png'
import forgottenElrianSanctum from '../../../public/images/dungeons/forgotten-elrian-sanctum.png'
import forsakenSpiritAsylum from '../../../public/images/dungeons/forsaken-spirit-asylum.png'
import garpaiRock from '../../../public/images/dungeons/garpai-rock.png'
import guardianForest from '../../../public/images/dungeons/guardian-forest.png'
import hallOfEl from '../../../public/images/dungeons/hall-of-el.png'
import hallsOfWater from '../../../public/images/dungeons/halls-of-water.png'
import haltedSunMemory from '../../../public/images/dungeons/halted-sun-memory.png'
import heartOfBehemoth from '../../../public/images/dungeons/heart-of-behemoth.png'
import heartOfSpire from '../../../public/images/dungeons/heart-of-spire.png'
import heartOfTheAncientWaterway from '../../../public/images/dungeons/heart-of-the-ancient-waterway.png'
import hopeBridge from '../../../public/images/dungeons/hope-bridge.png'
import labyrinthOfRuin from '../../../public/images/dungeons/labyrinth-of-ruin.png'
import magmantaCave from '../../../public/images/dungeons/magmanta-cave.png'
import nasodFoundry from '../../../public/images/dungeons/nasod-foundry.png'
import neverEndingDarkness from '../../../public/images/dungeons/never-ending-darkness.png'
import oathOfRuin from '../../../public/images/dungeons/oath-of-ruin.png'
import palaceEntrance from '../../../public/images/dungeons/palace-entrance.png'
import phantasmalGeyser from '../../../public/images/dungeons/phantasmal-geyser.png'
import resiamOutskirt from '../../../public/images/dungeons/resiam-outskirt.png'
import residentialArea3 from '../../../public/images/dungeons/residential-area-3.png'
import returnPlains from '../../../public/images/dungeons/return-plains.png'
import richieMines from '../../../public/images/dungeons/richie-mines.png'
import sandtilus from '../../../public/images/dungeons/sandtilus.png'
import shadowForest from '../../../public/images/dungeons/shadow-forest.png'
import shadowVein from '../../../public/images/dungeons/shadow-vein.png'
import shrineOfDedication from '../../../public/images/dungeons/shrine-of-dedication.png'
import solaceFortress from '../../../public/images/dungeons/solace-fortress.png'
import southernGate from '../../../public/images/dungeons/southern-gate.png'
import spiralCorridor from '../../../public/images/dungeons/spiral-corridor.png'
import suburbsOfWallyCastle from '../../../public/images/dungeons/suburbs-of-wally-castle.png'
import sunkenResiam from '../../../public/images/dungeons/sunken-resiam.png'
import templeOfFrozenWater from '../../../public/images/dungeons/temple-of-frozen-water.png'
import theBlackCrow from '../../../public/images/dungeons/the-black-crow.png'
import transportingTunnel from '../../../public/images/dungeons/transporting-tunnel.png'
import treeOfLife from '../../../public/images/dungeons/tree-of-life.png'
import trockLair from '../../../public/images/dungeons/trock-lair.png'
import undergroundChappel from '../../../public/images/dungeons/underground-chappel.png'
import undergroundGarden from '../../../public/images/dungeons/underground-garden.png'
import undergroundWaterway from '../../../public/images/dungeons/underground-waterway.png'
import volcanicFlameEntrance from '../../../public/images/dungeons/volcanic-flame-entrance.png'
import wallyCastle from '../../../public/images/dungeons/wally-castle.png'
import waterDragonSanctum from '../../../public/images/dungeons/water-dragon-sanctum.png'
import whiteMistSwamp from '../../../public/images/dungeons/white-mist-swamp.png'

const towns = [{
  name: 'Ruben',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fruben.png?alt=media&token=d3b2870f-4dc0-49fc-8e5d-640284cd72b9',
  bgColor: 'bg-ruben',
  textColor: 'text-ruben dark:text-ruben-dark',
  hoverBgColor: 'hover:bg-ruben',
  child: [{
    name: 'Tree of Life',
    img: treeOfLife,
  }, {
    name: 'Forest Ruins',
    img: forestRuins,
  }, {
    name: 'White Mist Swamp',
    img: whiteMistSwamp,
  }],
}, {
  name: 'Elder',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Felder.png?alt=media&token=274c5e82-6cca-4b4b-a8e1-d140a9c1af7f',
  bgColor: 'bg-elder',
  textColor: 'text-elder dark:text-elder-dark',
  hoverBgColor: 'hover:bg-elder',
  child: [{
    name: 'Shadow Forest',
    img: shadowForest,
  }, {
    name: 'Banthus Cave',
    img: banthusCave,
  }, {
    name: 'Underground Waterway',
    img: undergroundWaterway,
  }, {
    name: 'Suburbs of Wally Castle',
    img: suburbsOfWallyCastle,
  }, {
    name: 'Wally Castle',
    img: wallyCastle,
  }],
}, {
  name: 'Bethma',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fbethma.png?alt=media&token=391ab771-2c8c-4b8c-a5db-465691750929',
  bgColor: 'bg-bethma',
  textColor: 'text-bethma dark:text-bethma-dark',
  hoverBgColor: 'hover:bg-bethma',
  child: [{
    name: 'Dragon Road',
    img: dragonRoad,
  }, {
    name: 'Bethma Lake',
    img: bethmaLake,
  }, {
    name: 'Bethma Lake Night',
    img: bethmaLakeNight,
  }, {
    name: 'Dragon Nest',
    img: dragonNest,
  }, {
    name: 'Richie Mines',
    img: richieMines,
  }, {
    name: 'Cargo Airship',
    img: cargoAirship,
  }],
}, {
  name: 'Altera',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Faltera.png?alt=media&token=8642c231-ec9a-4154-b59e-184490c22a82',
  bgColor: 'bg-altera',
  textColor: 'text-altera dark:text-altera-dark',
  hoverBgColor: 'hover:bg-altera',
  child: [{
    name: 'The Black Crow',
    img: theBlackCrow,
  }, {
    name: 'Return Plains',
    img: returnPlains,
  }, {
    name: 'Transporting Tunnel B4-1',
    img: transportingTunnel,
  }, {
    name: 'Altera Plains',
    img: alteraPlains,
  }, {
    name: 'Nasod Foundry',
    img: nasodFoundry,
  }, {
    name: 'Altera Core',
    img: alteraCore,
  }],
}, {
  name: 'Feita',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Ffeita.png?alt=media&token=39d61809-b0e5-47fd-9d4d-332ed7ff5714',
  bgColor: 'bg-feita',
  textColor: 'text-feita dark:text-feita-dark',
  hoverBgColor: 'hover:bg-feita',
  child: [{
    name: 'Shrine of Dedication',
    img: shrineOfDedication,
  }, {
    name: 'Spiral Corridor',
    img: spiralCorridor,
  }, {
    name: 'Underground Chappel',
    img: undergroundChappel,
  }, {
    name: 'Underground Garden',
    img: undergroundGarden,
  }, {
    name: 'Heart of Spire',
    img: heartOfSpire,
  }, {
    name: 'Altar of Dedication',
    img: altarOfDedication,
  }],
}, {
  name: 'Velder',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fvelder.png?alt=media&token=4d36a19c-a2dd-426b-b03b-d778689106fd',
  bgColor: 'bg-velder',
  textColor: 'text-velder dark:text-velder-dark',
  hoverBgColor: 'hover:bg-velder',
  child: [{
    name: 'Residential Area 3',
    img: residentialArea3,
  }, {
    name: 'Hope Bridge',
    img: hopeBridge,
  }, {
    name: 'Palace Entrance',
    img: palaceEntrance,
  }, {
    name: 'Burning Hope Bridge',
    img: burningHopeBridge,
  }, {
    name: 'Commercial Area 1',
    img: commercialArea1,
  }, {
    name: 'Southern Gate',
    img: southernGate,
  }],
}, {
  name: 'Hamel',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fhamel.png?alt=media&token=9cd26e68-5fd8-40b6-a47b-6b600ba22d83',
  bgColor: 'bg-hamel',
  textColor: 'text-hamel dark:text-hamel-dark',
  hoverBgColor: 'hover:bg-hamel',
  child: [{
    name: 'Resiam Outskirt',
    img: resiamOutskirt,
  }, {
    name: 'Sunken Resiam',
    img: sunkenResiam,
  }, {
    name: 'Ancient Waterway',
    img: ancientWaterway,
  }, {
    name: 'Heart of the Ancient Waterway',
    img: heartOfTheAncientWaterway,
  }, {
    name: 'Magmanta Cave',
    img: magmantaCave,
  }, {
    name: 'Temple of Frozen Water',
    img: templeOfFrozenWater,
  }, {
    name: 'Halls of Water',
    img: hallsOfWater,
  }],
}, {
  name: 'Sander',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fsander.png?alt=media&token=0937dda6-8793-48c5-af8e-25eeffc9ba58',
  bgColor: 'bg-sander',
  textColor: 'text-sander-light dark:text-sander-dark',
  hoverBgColor: 'hover:bg-sander-light',
  child: [{
    name: 'Barren Sander',
    img: barrenSander,
  }, {
    name: 'Garpai Rock',
    img: garpaiRock,
  }, {
    name: 'Trock Lair',
    img: trockLair,
  }, {
    name: 'Calluso Tribal Village',
    img: callusoTribalVillage,
  }, {
    name: 'Sandtilus',
    img: sandtilus,
  }, {
    name: 'Heart of Behemoth',
    img: heartOfBehemoth,
  }],
}, {
  name: 'Lanox',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Flanox.png?alt=media&token=afe5ab61-6dd2-4d27-8c51-2327fc9ea0d6',
  bgColor: 'bg-lanox',
  textColor: 'text-lanox dark:text-lanox-dark',
  hoverBgColor: 'hover:bg-lanox',
  child: [{
    name: 'Burnt Forest',
    img: burntForest,
  }, {
    name: 'Ash Covered Village',
    img: ashCoveredVillage,
  }, {
    name: 'Phantasmal Geyser',
    img: phantasmalGeyser,
  }, {
    name: 'Volcanic Flame Entrance',
    img: volcanicFlameEntrance,
  }, {
    name: 'Collapsing Temple of Fire',
    img: collapsingTempleOfFire,
  }, {
    name: 'Grand Cavern Chasm of the Divided Land',
    img: oathOfRuin,
  }],
}, {
  name: 'Atlas',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fatlas.png?alt=media&token=11a9e960-b2c2-489a-a06d-259ef205d043',
  bgColor: 'bg-atlas',
  textColor: 'text-atlas dark:text-atlas-dark',
  hoverBgColor: 'hover:bg-atlas',
  child: [{
    name: 'Diceon Mines',
    img: diceonMines,
  }, {
    name: 'Atlas City',
    img: atlasCity,
  }, {
    name: 'Elysion Tower',
    img: elysionTower,
  }],
}, {
  name: 'Elysion',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Felysion.png?alt=media&token=7b3b2019-e678-4cb2-9386-cca1f57cf723',
  bgColor: 'bg-elysion',
  textColor: 'text-elysion dark:text-elysion-dark',
  hoverBgColor: 'hover:bg-elysion',
  child: [{
    name: 'Celestial Crossroad',
    img: celestialCrossroad,
  }, {
    name: 'Adrian Palace',
    img: adrianPalace,
  }, {
    name: 'Solace Fortress',
    img: solaceFortress,
  }, {
    name: 'Halted Sun Memory',
    img: haltedSunMemory,
  }],
}, {
  name: 'Elrianode',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Felrianode.png?alt=media&token=d9a74d9c-7021-4607-a4f0-a4c42bda319f',
  bgColor: 'bg-elrianode',
  textColor: 'text-elrianode dark:text-elrianode-dark',
  hoverBgColor: 'hover:bg-elrianode',
  child: [{
    name: 'Hall of El',
    img: hallOfEl,
  }, {
    name: 'Water Dragon Sanctum',
    img: waterDragonSanctum,
  }, {
    name: 'Elrianode City',
    img: elrianodeCity,
  }, {
    name: 'Debrian Laboratory',
    img: debrianLaboratory,
  }, {
    name: 'El Tower Defense',
    img: elTowerDefense,
  }, {
    name: 'Forgotten Elrian Sanctum',
    img: forgottenElrianSanctum,
  }],
}, {
  name: 'Varnimyr',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fvarnimyr.png?alt=media&token=510cb5a8-ce59-4b1f-8c17-0833ef04d056',
  bgColor: 'bg-varnimyr',
  textColor: 'text-varnimyr dark:text-varnimyr-dark',
  hoverBgColor: 'hover:bg-varnimyr',
  child: [{
    name: 'Labyrinth of Ruin',
    img: labyrinthOfRuin,
  }, {
    name: 'Guardian Forest',
    img: guardianForest,
  }, {
    name: 'Dark Elves Outpost',
    img: darkElvesOutpost,
  }, {
    name: 'Forsaken Spirit Asylum',
    img: forsakenSpiritAsylum,
  }, {
    name: 'Crimson Tower of Howling Flames',
    img: crimsonTowerOfHowlingFlames,
  }, {
    name: 'Never Ending Darkness',
    img: neverEndingDarkness,
  }, {
    name: 'Crimson Cradle of Flames',
    img: crimsonCradleOfFlames,
  }, {
    name: 'Shadow Vein',
    img: shadowVein,
  }],
}, {
  name: 'Rigomor',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fgeneral.png?alt=media&token=7ff1d45d-76d9-403b-9cb0-b04442a9d8d7',
  bgColor: 'bg-rigomor',
  textColor: 'text-rigomor dark:text-rigomor-dark',
  hoverBgColor: 'hover:bg-rigomor',
  child: [],
}, {
  name: 'Master Road',
  bgColor: 'bg-master-road',
  textColor: 'text-master-road dark:text-master-road-dark',
  hoverBgColor: 'hover:bg-master-road',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fgeneral.png?alt=media&token=7ff1d45d-76d9-403b-9cb0-b04442a9d8d7',
  child: [],
}, {
  name: 'Pruinaum',
  bgColor: 'bg-pruinaum',
  textColor: 'text-pruinaum dark:text-pruinaum-dark',
  hoverBgColor: 'hover:bg-pruinaum',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fpruinaum.png?alt=media&token=68a73b33-0e7c-4fa6-8036-d952ab02f467',
  child: [],
}, {
  name: 'Pruinaum Outskirt',
  bgColor: 'bg-pruinaum-outskirt',
  textColor: 'text-pruinaum-outskirt dark:text-pruinaum-outskirt-dark',
  hoverBgColor: 'hover:bg-pruinaum-outskirt',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fgeneral.png?alt=media&token=7ff1d45d-76d9-403b-9cb0-b04442a9d8d7',
  child: [],
}]

export default towns
