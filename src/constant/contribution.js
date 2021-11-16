import dungeon from '../../public/images/categories/dungeon.png'
import equipment from '../../public/images/categories/equipment.png'
import character from '../../public/images/categories/rena-head.png'
import title from '../../public/images/categories/title.png'
import town from '../../public/images/categories/town.png'
import npc from '../../public/images/categories/npc.png'
import skill from '../../public/images/categories/skill.png'
import combo from '../../public/images/categories/combo.png'
import gallery from '../../public/images/categories/gallery.png'

const CONTRIBUTION = [{
  name: 'Characters',
  path: '/contribution/character',
  img: character,
  list: [
    'Add/Edit Character data (with permission)',
    'Add picture to gallery (with permission)',
    'Submit suggestion/repair for broken link or image',
  ],
}, {
  name: 'Skills',
  path: '/contribution/skill',
  img: skill,
  list: [
    'Add/Edit Skill data (with permission)',
    'Add picture to gallery (with permission)',
    'Submit suggestion/repair for broken link or image',
  ],
}, {
  name: 'Combos',
  path: '/contribution/combo',
  img: combo,
  list: [
    'Add/Edit Combo data (with permission)',
    'Add picture to gallery (with permission)',
    'Submit suggestion/repair for broken link or image',
  ],
}, {
  name: 'Galleries',
  path: '/contribution/gallery',
  img: gallery,
  list: [
    'Add/Edit Gallery data (with permission)',
    'Submit suggestion/repair for broken link or image',
  ],
}, {
  name: 'Towns',
  path: '/contribution/town',
  img: town,
  list: [
    'Add/Edit Town data (with permission)',
    'Add picture to gallery (with permission)',
    'Submit suggestion/repair for broken link or image',
  ],
}, {
  name: 'Dungeons',
  path: '/contribution/dungeon',
  img: dungeon,
  list: [
    'Add/Edit Dungeon data (with permission)',
    'Add picture to gallery (with permission)',
    'Submit suggestion/repair for broken link or image',
  ],
}, {
  name: 'NPC\'s',
  path: '/contribution/npc',
  img: npc,
  list: [
    'Add/Edit NPC data (with permission)',
    'Add picture to gallery (with permission)',
    'Submit suggestion/repair for broken link or image',
  ],
}, {
  name: 'Titles',
  path: '/contribution/title',
  img: title,
  list: [
    'Add/Edit Character data (with permission)',
    'Submit suggestion/repair for broken link or image',
  ],
}, {
  name: 'Equipments',
  path: '/contribution/equipment',
  img: equipment,
  list: [
    'Add/Edit Equipment data (with permission)',
    'Add picture to gallery (with permission)',
    'Submit suggestion/repair for broken link or image',
  ],
}]

export default CONTRIBUTION
