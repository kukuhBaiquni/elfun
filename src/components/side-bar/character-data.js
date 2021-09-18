import swordKnight from '../../../public/images/avatar/elsword/sword-knight.png'
import lordKnight from '../../../public/images/avatar/elsword/lord-knight.png'
import lordKnightTrans from '../../../public/images/avatar/elsword/lord-knight-trans.png'
import knightEmperor from '../../../public/images/avatar/elsword/knight-emperor.png'
import magicKnight from '../../../public/images/avatar/elsword/magic-knight.png'
import runeSlayer from '../../../public/images/avatar/elsword/rune-slayer.png'
import runeSlayerTrans from '../../../public/images/avatar/elsword/rune-slayer-trans.png'
import runeMaster from '../../../public/images/avatar/elsword/rune-master.png'
import sheathKnight from '../../../public/images/avatar/elsword/sheath-knight.png'
import infinitySword from '../../../public/images/avatar/elsword/infinity-sword.png'
import infinitySwordTrans from '../../../public/images/avatar/elsword/infinity-sword-trans.png'
import immortal from '../../../public/images/avatar/elsword/immortal.png'
import rootKnight from '../../../public/images/avatar/elsword/root-knight.png'
import sacredTemplar from '../../../public/images/avatar/elsword/sacred-templar.png'
import sacredTemplarTrans from '../../../public/images/avatar/elsword/sacred-templar-trans.png'
import genesis from '../../../public/images/avatar/elsword/genesis.png'

import highMagician from '../../../public/images/avatar/aisha/high-magician.png'
import elementalMaster from '../../../public/images/avatar/aisha/elemental-master.png'
import elementalMasterTrans from '../../../public/images/avatar/aisha/elemental-master-trans.png'
import aetherSage from '../../../public/images/avatar/aisha/aether-sage.png'
import darkMagician from '../../../public/images/avatar/aisha/dark-magician.png'
import voidPrincess from '../../../public/images/avatar/aisha/void-princess.png'
import voidPrincessTrans from '../../../public/images/avatar/aisha/void-princess-trans.png'
import ozSorcerer from '../../../public/images/avatar/aisha/oz-sorcerer.png'
import battleMagician from '../../../public/images/avatar/aisha/battle-magician.png'
import dimensionWitch from '../../../public/images/avatar/aisha/dimension-witch.png'
import dimensionWitchTrans from '../../../public/images/avatar/aisha/dimension-witch-trans.png'
import metamorphy from '../../../public/images/avatar/aisha/metamorphy.png'

const character = [{
  name: 'Elsword',
  color: 'elsword',
  child: [{
    name: 'Sword Knight',
    img: swordKnight,
    child: [{
      name: 'Lord Knight',
      img: lordKnight,
      child: [],
    }, {
      name: 'Lord Knight Transcendent',
      img: lordKnightTrans,
      child: [],
    }, {
      name: 'Knight Emperor',
      img: knightEmperor,
      child: [],
    }],
  }, {
    name: 'Magic Knight',
    img: magicKnight,
    child: [{
      name: 'Rune Slayer',
      img: runeSlayer,
      child: [],
    }, {
      name: 'Rune Slayer Transcendent',
      img: runeSlayerTrans,
      child: [],
    }, {
      name: 'Rune Master',
      img: runeMaster,
      child: [],
    }],
  }, {
    name: 'Sheath Knight',
    img: sheathKnight,
    child: [{
      name: 'Infinity Sword',
      img: infinitySword,
      child: [],
    }, {
      name: 'Infinity Sword Transcendent',
      img: infinitySwordTrans,
      child: [],
    }, {
      name: 'Immortal',
      img: immortal,
      child: [],
    }],
  }, {
    name: 'Root Knight',
    img: rootKnight,
    child: [{
      name: 'Sacred Templar',
      img: sacredTemplar,
      child: [],
    }, {
      name: 'Sacred Templar Transcendent',
      img: sacredTemplarTrans,
      child: [],
    }, {
      name: 'Genesis',
      img: genesis,
      child: [],
    }],
  }],
}, {
  name: 'Aisha',
  color: 'aisha',
  child: [{
    name: 'High Magician',
    img: highMagician,
    child: [{
      name: 'Elemental Master',
      img: elementalMaster,
      child: [],
    }, {
      name: 'Elemental Master Transcendent',
      img: elementalMasterTrans,
      child: [],
    }, {
      name: 'Aether Sage',
      img: aetherSage,
      child: [],
    }],
  }, {
    name: 'Dark Magician',
    img: darkMagician,
    child: [{
      name: 'Void Princess',
      img: voidPrincess,
      child: [],
    }, {
      name: 'Void Princess Transcendent',
      img: voidPrincessTrans,
      child: [],
    }, {
      name: 'Oz Sorcerer',
      img: ozSorcerer,
      child: [],
    }],
  }, {
    name: 'Battle Magician',
    img: battleMagician,
    child: [{
      name: 'Dimension Witch',
      img: dimensionWitch,
      child: [],
    }, {
      name: 'Dimension Witch Transcendent',
      img: dimensionWitchTrans,
      child: [],
    }, {
      name: 'Metamorphy',
      img: metamorphy,
      child: [],
    }],
  }],
}, {
  name: 'Rena',
  child: [{
    name: 'Combat Ranger',
    child: [{
      name: 'Wind Sneaker',
      child: [],
    }, {
      name: 'Anemos',
      child: [],
    }],
  }, {
    name: 'Sniping Ranger',
    child: [{
      name: 'Grand Archer',
      child: [],
    }, {
      name: 'Day Breaker',
      child: [],
    }],
  }, {
    name: 'Trapping Ranger',
    child: [{
      name: 'Night Watcher',
      child: [],
    }, {
      name: 'Twilight',
      child: [],
    }],
  }],
}, {
  name: 'Raven',
  child: [{
    name: 'Sword Taker',
    child: [{
      name: 'Blade Master',
      child: [],
    }, {
      name: 'Furious Blade',
      child: [],
    }],
  }, {
    name: 'Over Taker',
    child: [{
      name: 'Reckless Fist',
      child: [],
    }, {
      name: 'Rage Hearts',
      child: [],
    }],
  }, {
    name: 'Weapon Taker',
    child: [{
      name: 'Veteran Commander',
      child: [],
    }, {
      name: 'Nova Imperator',
      child: [],
    }],
  }],
}, {
  name: 'Eve',
  child: [{
    name: 'Code: Exotic',
    child: [{
      name: 'Code: Nemesis',
      child: [],
    }, {
      name: 'Code: Ultimate',
      child: [],
    }],
  }, {
    name: 'Code: Architecture',
    child: [{
      name: 'Code: Empress',
      child: [],
    }, {
      name: 'Code: Essencia',
      child: [],
    }],
  }, {
    name: 'Code: Electra',
    child: [{
      name: 'Code: Battle Seraph',
      child: [],
    }, {
      name: 'Code: Sariel',
      child: [],
    }],
  }, {
    name: 'Code: Unknown',
    child: [{
      name: 'Code: Failess',
      child: [],
    }, {
      name: 'Code: Antithese',
      child: [],
    }],
  }],
}, {
  name: 'Chung',
  child: [{
    name: 'Fury Guardian',
    child: [{
      name: 'Iron Paladin',
      child: [],
    }, {
      name: 'Comet Crushader',
      child: [],
    }],
  }, {
    name: 'Shooting Guardian',
    child: [{
      name: 'Deadly Chaser',
      child: [],
    }, {
      name: 'Fatal Phantom',
      child: [],
    }],
  }, {
    name: 'Shelling Guardian',
    child: [{
      name: 'Tactical Trooper',
      child: [],
    }, {
      name: 'Centurion',
      child: [],
    }],
  }],
}, {
  name: 'Ara',
  child: [{
    name: 'Little Hsien',
    child: [{
      name: 'Sakra Devanam',
      child: [],
    }, {
      name: 'Apsara',
      child: [],
    }],
  }, {
    name: 'Little Devil',
    child: [{
      name: 'Yama Raja',
      child: [],
    }, {
      name: 'Devi',
      child: [],
    }],
  }, {
    name: 'Little Specter',
    child: [{
      name: 'Asura',
      child: [],
    }, {
      name: 'Shakti',
      child: [],
    }],
  }],
}, {
  name: 'Elesis',
  child: [{
    name: 'Saber Knight',
    child: [{
      name: 'Grand Master',
      child: [],
    }, {
      name: 'Empire Sword',
      child: [],
    }],
  }, {
    name: 'Pyro Knight',
    child: [{
      name: 'Blazing Heart',
      child: [],
    }, {
      name: 'Fire Lord',
      child: [],
    }],
  }, {
    name: 'Dark Knight',
    child: [{
      name: 'Crimson Avenger',
      child: [],
    }, {
      name: 'Blood Queen',
      child: [],
    }],
  }],
}, {
  name: 'Add',
  child: [{
    name: 'Physic Tracer',
    child: [{
      name: 'Lunatic Psyker',
      child: [],
    }, {
      name: 'Doom Bringer',
      child: [],
    }],
  }, {
    name: 'Arc Tracer',
    child: [{
      name: 'Master Mind',
      child: [],
    }, {
      name: 'Dominator',
      child: [],
    }],
  }, {
    name: 'Time Tracer',
    child: [{
      name: 'Diabolic Esper',
      child: [],
    }, {
      name: 'Mad Paradox',
      child: [],
    }],
  }],
}, {
  name: 'Lu/Ciel',
  child: [{
    name: 'Chiliarch',
    child: [{
      name: 'Dread Lord',
      child: [],
    }, {
      name: 'Catastrophe',
      child: [],
    }],
  }, {
    name: 'Royal Guard',
    child: [{
      name: 'Noblesse',
      child: [],
    }, {
      name: 'Innocent',
      child: [],
    }],
  }, {
    name: 'Diabla',
    child: [{
      name: 'Demonio',
      child: [],
    }, {
      name: 'Diangelion',
      child: [],
    }],
  }],
}, {
  name: 'Rose',
  child: [{
    name: 'Heavy Barrel',
    child: [{
      name: 'Storm Trooper',
      child: [],
    }, {
      name: 'Tempest Burster',
      child: [],
    }],
  }, {
    name: 'Bloodia',
    child: [{
      name: 'Crimson Rose',
      child: [],
    }, {
      name: 'Black Massacre',
      child: [],
    }],
  }, {
    name: 'Valkyrie',
    child: [{
      name: 'Freyja',
      child: [],
    }, {
      name: 'Minerva',
      child: [],
    }],
  }, {
    name: 'Metal Heart',
    child: [{
      name: 'Optimus',
      child: [],
    }, {
      name: 'Prime Operator',
      child: [],
    }],
  }],
}, {
  name: 'Ain',
  child: [{
    name: 'Lofty: Executor',
    child: [{
      name: 'Arme Thaumaturgy',
      child: [],
    }, {
      name: 'Ritcher',
      child: [],
    }],
  }, {
    name: 'Lofty: Anpassen',
    child: [{
      name: 'Erbluhen Emotion',
      child: [],
    }, {
      name: 'Bluhen',
      child: [],
    }],
  }, {
    name: 'Lofty: Wanderer',
    child: [{
      name: 'Apostasia',
      child: [],
    }, {
      name: 'Herrscher',
      child: [],
    }],
  }],
}, {
  name: 'Laby',
  child: [{
    name: 'Sparky Child',
    child: [{
      name: 'Rumble Pumn',
      child: [],
    }, {
      name: 'Eternity Winter',
      child: [],
    }],
  }, {
    name: 'Twinkle Child',
    child: [{
      name: 'Shinning Romantica',
      child: [],
    }, {
      name: 'Radiant Soul',
      child: [],
    }],
  }, {
    name: 'Rusty Child',
    child: [{
      name: 'Daydreamer',
      child: [],
    }, {
      name: 'Nisha Labyrinth',
      child: [],
    }],
  }],
}, {
  name: 'Noah',
  child: [{
    name: 'Second Revenger',
    child: [{
      name: 'Silent Shadow',
      child: [],
    }, {
      name: 'Liberator',
      child: [],
    }],
  }, {
    name: 'Second Selection',
    child: [{
      name: 'Stellar Caster',
      child: [],
    }, {
      name: 'Celestia',
      child: [],
    }],
  }, {
    name: 'Second Grief',
    child: [{
      name: 'Pale Pilgrim',
      child: [],
    }, {
      name: 'Nyx Pieta',
      child: [],
    }],
  }],
}]

export default character
