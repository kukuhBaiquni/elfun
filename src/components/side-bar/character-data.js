import swordKnight from '../../../public/images/avatar/sword-knight.png'
import lordKnight from '../../../public/images/avatar/lord-knight.png'
import lordKnightTrans from '../../../public/images/avatar/lord-knight-trans.png'
import knightEmperor from '../../../public/images/avatar/knight-emperor.png'
import magicKnight from '../../../public/images/avatar/magic-knight.png'
import runeSlayer from '../../../public/images/avatar/rune-slayer.png'
import runeSlayerTrans from '../../../public/images/avatar/rune-slayer-trans.png'
import runeMaster from '../../../public/images/avatar/rune-master.png'
import sheathKnight from '../../../public/images/avatar/sheath-knight.png'
import infinitySword from '../../../public/images/avatar/infinity-sword.png'
import infinitySwordTrans from '../../../public/images/avatar/infinity-sword-trans.png'
import immortal from '../../../public/images/avatar/immortal.png'
import rootKnight from '../../../public/images/avatar/root-knight.png'
import sacredTemplar from '../../../public/images/avatar/sacred-templar.png'
import sacredTemplarTrans from '../../../public/images/avatar/sacred-templar-trans.png'
import genesis from '../../../public/images/avatar/genesis.png'

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
  child: [{
    name: 'High Magician',
    child: [{
      name: 'Elemental Master',
      child: [],
    }, {
      name: 'Aether Sage',
      child: [],
    }],
  }, {
    name: 'Dark Magician',
    child: [{
      name: 'Void Princess',
      child: [],
    }, {
      name: 'Oz Sorcerer',
      child: [],
    }],
  }, {
    name: 'Battle Magician',
    child: [{
      name: 'Dimension Witch',
      child: [],
    }, {
      name: 'Metamorphy',
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
