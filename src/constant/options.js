export const INPUT_TYPE = [
  { label: 'Fixed', value: 'FIXED' },
  { label: 'Range', value: 'RANGE' },
]

export const SKILL_CATEGORIES = [
  { label: 'Passive', value: '0P' },
  { label: 'Active', value: '0A' },
  { label: '[Special Active:Tenacity]', value: '0T' },
  { label: '[Special Active:Strength]', value: '0S' },
  { label: '[Special Active:Bravery]', value: '0B' },
  { label: 'Hyperactive', value: '0H' },
]

export const VALUE_SUFFIX = [
  { label: 'none', value: '' },
  { label: '%', value: '%' },
  { label: 'Seconds', value: 's' },
  { label: 'MP', value: 'MP' },
  { label: 'Value of current Hp', value: '% of current HP' },
  { label: 'Value of Hp', value: '% of HP' },
  { label: 'Value of Skill Damage', value: '% of skill Damage' },
]

export const SKILL_ATTRIBUTES = [
  { label: 'none', value: '' },
  { label: 'Damage', value: 'DMG' },
  { label: 'Defense Increase', value: 'DEF+' },
  { label: 'Physical Defense Increase', value: 'PDEF+' },
  { label: 'Magical Defense Increase', value: 'MDEF+' },
  { label: 'Max Hits', value: 'MH' },
  { label: 'Duration', value: 'DUR' },
  { label: 'Cooldown', value: 'CD' },
  { label: 'Mana Cost', value: 'MP' },
  { label: 'Resistance Increase', value: 'RES+' },
  { label: 'Attack Speed Increase', value: 'AS+' },
  { label: 'Move Speed Increase', value: 'MS+' },
  { label: 'Move and Jump Speed Increase', value: 'MJS+' },
  { label: 'Speed Increase', value: 'SPD+' },
]

export const DAMAGE_TYPE = [
  { label: 'Physical', value: 'PHY' },
  { label: 'Magical', value: 'MAG' },
]

export const YES_NO = [
  { label: 'No', value: false },
  { label: 'Yes', value: true },
]

export const PERCENTAGE_OR_FLAT = [
  { label: 'Flat', value: 'FLAT' },
  { label: 'Percentage', value: 'PERCENT' },
]

export const STATISTIC = {
  speed: [
    { label: 'Slow', value: 'SLOW' },
    { label: 'Average', value: 'AVERAGE' },
    { label: 'Fast', value: 'FAST' },
  ],
  attackRange: [
    { label: 'Short', value: 'SHORT' },
    { label: 'Medium', value: 'MEDIUM' },
    { label: 'Long', value: 'LONG' },
  ],
  difficulty: [
    { label: 'Easy', value: 'EASY' },
    { label: 'Normal', value: 'NORMAL' },
    { label: 'Hard', value: 'HARD' },
  ],
}

export const SKILL_LEVEL = {
  0: [
    { label: '1', value: 1 },
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
  ],
  1: [
    { label: '15', value: 15 },
    { label: '25', value: 25 },
    { label: '30', value: 30 },
    { label: '35', value: 35 },
    { label: '40', value: 40 },
  ],
  2: [
    { label: '35', value: 35 },
    { label: '45', value: 45 },
    { label: '50', value: 50 },
    { label: '55', value: 55 },
    { label: '60', value: 60 },
    { label: '65', value: 65 },
  ],
  3: [
    { label: '70', value: 70 },
    { label: '80', value: 80 },
    { label: '90', value: 90 },
    { label: '95', value: 95 },
  ],
  4: [
    { label: '99', value: 99 },
  ],
}
