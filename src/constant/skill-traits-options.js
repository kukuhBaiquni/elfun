const SKILL_TRAITS_OPTIONS = [
  {
    name: 'Empowered',
    id: 'T-1.0',
    effect: [
      {
        description: 'Damage increased',
        id: 'T-1.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Gigantic',
    id: 'T-2.0',
    effect: [
      {
        description: 'Skill radius/size increased',
        id: 'T-2.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Light',
    id: 'T-3.0',
    effect: [
      {
        description: 'MP cost reduced',
        id: 'T-3.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Heavy',
    id: 'T-4.0',
    effect: [
      {
        description: 'Damage increased by 44%',
        id: 'T-4.1',
        dynamic: false,
        amount: 0.4,
      },
      {
        description: 'Cooldown time increased to 120%',
        id: 'T-4.2',
        dynamic: false,
        amount: 1.2,
      },
    ],
  },
  {
    name: 'Useful',
    id: 'T-5.0',
    effect: [
      {
        description: 'Damage reduced',
        id: 'T-5.1',
        dynamic: true,
        amount: 0,
      },
      {
        description: 'Hit count increased',
        id: 'T-5.2',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Enhanced',
    id: 'T-6.0',
    effect: [
      {
        description: 'Critical rate increased to 100%',
        id: 'T-6.1',
        dynamic: false,
        amount: 1,
      },
      {
        description: 'Damage reduced',
        id: 'T-6.2',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Reversed',
    id: 'T-7.0',
    effect: [
      {
        description: 'Cooldown increased',
        id: 'T-7.1',
        dynamic: true,
        amount: 0,
      },
      {
        description: 'MP cost reduced',
        id: 'T-7.2',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Critical',
    id: 'T-8.0',
    effect: [
      {
        description: 'MP cost increased',
        id: 'T-8.1',
        dynamic: true,
        amount: 0,
      },
      {
        description: 'Skill will ignore 50% defense',
        id: 'T-8.2',
        dynamic: false,
        amount: 0.5,
      },
    ],
  },
  {
    name: 'Haste',
    id: 'T-9.0',
    effect: [
      {
        description: 'Cooldown reduced',
        id: 'T-9.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Regenerating 1',
    id: 'T-10.0',
    effect: [
      {
        description: 'At certain chance of regaining some of the MP used',
        id: 'T-10.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Regenerating 2',
    id: 'T-11.0',
    effect: [
      {
        description: '50% chance of reducing cooldown time to 60%',
        id: 'T-11.1',
        dynamic: false,
        amount: 0.6,
      },
    ],
  },
  {
    name: 'Ruthless',
    id: 'T-12.0',
    effect: [
      {
        description: 'Skill will cancel Mana Break',
        id: 'T-12.1',
        dynamic: false,
        amount: 0,
      },
      {
        description: 'Cooldown time is doubled',
        id: 'T-12.2',
        dynamic: false,
        amount: 2,
      },
    ],
  },
  {
    name: 'Evil',
    id: 'T-13.0',
    effect: [
      {
        description: 'Skill will burn MP per hit',
        id: 'T-13.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Powerful',
    id: 'T-14.0',
    effect: [
      {
        description: 'Super Armor state added to the skill',
        id: 'T-14.1',
        dynamic: false,
        amount: 0,
      },
      {
        description: 'Cooldown increased',
        id: 'T-14.2',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Killing Blow 1',
    id: 'T-15.0',
    effect: [
      {
        description: "Skill effect's duration increased",
        id: 'T-15.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Killing Blow 2',
    id: 'T-16.0',
    effect: [
      {
        description: "Skill effect's effectiveness increased",
        id: 'T-16.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Absorbing',
    id: 'T-17.0',
    effect: [
      {
        description: "Skill's Mana gain increased",
        id: 'T-17.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Persistent',
    id: 'T-18.0',
    effect: [
      {
        description: 'Skill will reduce KD per hit',
        id: 'T-18.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
]

export default SKILL_TRAITS_OPTIONS
