import cube from '../../public/images/advancement-rewards/cube.png'
import elrianodeDefenseRequest from '../../public/images/advancement-rewards/elrianode-defense-request.png'
import expBoostMedal from '../../public/images/advancement-rewards/exp-boost-medal.png'
import fetchAura from '../../public/images/advancement-rewards/fetch-aura.png'
import petAutoConsume from '../../public/images/advancement-rewards/pet-auto-consume.png'
import ringOfBravery from '../../public/images/advancement-rewards/ring-of-bravery.png'
import ringOfFlexibility from '../../public/images/advancement-rewards/ring-of-flexibility.png'
import ringOfStrength from '../../public/images/advancement-rewards/ring-of-strength.png'
import ringOfTenacity from '../../public/images/advancement-rewards/ring-of-tenacity.png'
import transcendentSkillSlot from '../../public/images/advancement-rewards/transcendent-skill-slot.png'
import costumeCube from '../../public/images/advancement-rewards/costume-cube.png'

const REWARDS = {
  1: [
    {
      name: '1st Class Useful Items Cube',
      img: cube,
      items: [
        {
          name: 'Pet Auto Consume Quick Slot Expansion (15 Days)',
          img: petAutoConsume,
        },
        {
          name: 'Fetch Aura (15 Days)',
          img: fetchAura,
        },
        {
          name: '50% EXP Boost Medal (7 Days)',
          img: expBoostMedal,
        },
      ],
    },
    {
      name: '1st Class Change Promotion Cube x1',
      img: costumeCube,
    },
  ],
  2: [
    {
      name: '2nd Class Useful Items Cube',
      img: cube,
      items: [
        {
          name: 'Pet Auto Consume Quick Slot Expansion (15 Days)',
          img: petAutoConsume,
        },
        {
          name: 'Fetch Aura (15 Days)',
          img: fetchAura,
        },
        {
          name: 'The Ring of Flexibility (II) (15 Days)',
          img: ringOfFlexibility,
        },
        {
          name: 'The Ring of Tenacity (II) (15 Days)',
          img: ringOfTenacity,
        },
        {
          name: 'The Ring of Strength (II) (15 Days)',
          img: ringOfStrength,
        },
        {
          name: 'The Ring of Bravery (II) (15 Days)',
          img: ringOfBravery,
        },
      ],
    },
    {
      name: '2nd Class Change Promotion Cube x1',
      img: costumeCube,
    },
  ],
  3: [
    {
      name: 'Transcendence Useful Items Cube',
      img: cube,
      items: [
        {
          name: 'Pet Auto Consume Quick Slot Expansion (15 Days)',
          img: petAutoConsume,
        },
        {
          name: 'Fetch Aura (15 Days)',
          img: fetchAura,
        },
        {
          name: 'Transcendence Skill Slot Change Medal (15 Days) Cube',
          img: transcendentSkillSlot,
        },
      ],
    },
  ],
  4: [
    {
      name: '3rd Class Useful Items Cube',
      img: cube,
      items: [
        {
          name: 'Pet Auto Consume Quick Slot Expansion (15 Days)',
          img: petAutoConsume,
        },
        {
          name: 'Fetch Aura (30 Days)',
          img: fetchAura,
        },
        {
          name: 'Luriel] Elrianode Defense Request x30',
          img: elrianodeDefenseRequest,
        },
      ],
    },
    {
      name: '3rd Class Change Promotion Cube x1',
      img: costumeCube,
    },
  ],
}

export default REWARDS
