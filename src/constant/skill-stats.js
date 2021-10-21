const SKILL_STATS = {
  name: 'G-0 Battleroid',
  description: 'Summon a [G-0 Battleroid] to annihilate enemies. When G-0 Battleroid is summoned, it will auto-lock on enemies and fire missiles consecutively then shoots laser beams.',
  skillId: '11.402.35.0S.N.U',
  img: '../../../../public/images/example/skill/battle-roid.png',
  type: {
    label: '[Special Active:Bravery]',
    value: '0B',
  },
  requirements: {
    class: '11.402',
    level: 35,
  },
  basicAttributes: [
    {
      id: 'cd',
      name: 'Cooldown',
      value: 0,
    },
    {
      id: 'mp-cost',
      name: 'MP cost',
      value: 0,
    },
    {
      id: 'hp-cost',
      name: 'HP cost',
      value: 0,
    },
  ],
  attributes: [
    {
      damageType: [
        {
          value: 0,
          label: 'Physical',
        },
        {
          value: 1,
          label: 'Magical',
        },
      ],
    },
  ],
}

export default SKILL_STATS
