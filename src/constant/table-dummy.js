const tableDummy = [{
  tableName: 'JANCOK',
  tableFields: [
    {
      fieldName: 'Fall',
      attributes: [
        {
          skipAttributeName: false,
          attributeName: 'Damage',
          flag: {
            label: 'Damage',
            value: 'DMG',
          },
          isDealingDamage: true,
          damageType: {
            label: 'Physical',
            value: 'PHY',
          },
          inputType: {
            label: 'Fixed',
            value: 'FIXED',
          },
          hasAwakeningEffect: true,
          awakeningModifier: {
            label: 'Percentage',
            value: 'PERCENT',
          },
          value: [
            {
              fixed: {
                normal: '651',
                awaken: '35',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
            {
              fixed: {
                normal: '726',
                awaken: '35',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
            {
              fixed: {
                normal: '806',
                awaken: '35',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
          ],
          suffix: {
            label: '%',
            value: '%',
          },
          levelCount: 1,
        },
      ],
    },
    {
      fieldName: 'Shockwave',
      attributes: [
        {
          skipAttributeName: false,
          attributeName: 'Damage',
          flag: {
            label: 'Damage',
            value: 'DMG',
          },
          isDealingDamage: true,
          damageType: {
            label: 'Physical',
            value: 'PHY',
          },
          inputType: {
            label: 'Fixed',
            value: 'FIXED',
          },
          hasAwakeningEffect: true,
          awakeningModifier: {
            label: 'Percentage',
            value: 'PERCENT',
          },
          value: [
            {
              fixed: {
                normal: '2661',
                awaken: '35',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
            {
              fixed: {
                normal: '3551',
                awaken: '35',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
            {
              fixed: {
                normal: '4168',
                awaken: '35',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
          ],
          suffix: {
            label: '%',
            value: '%',
          },
          levelCount: 3,
        },
      ],
    },
    {
      fieldName: 'Faint Duration',
      attributes: [
        {
          skipAttributeName: true,
          attributeName: '',
          flag: {
            label: 'Duration',
            value: 'DUR',
          },
          isDealingDamage: false,
          damageType: {
            label: 'Physical',
            value: 'PHY',
          },
          inputType: {
            label: 'Fixed',
            value: 'FIXED',
          },
          hasAwakeningEffect: true,
          awakeningModifier: {
            label: 'Flat',
            value: 'FLAT',
          },
          value: [
            {
              fixed: {
                normal: '2',
                awaken: '3',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
            {
              fixed: {
                normal: '3',
                awaken: '4',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
            {
              fixed: {
                normal: '4',
                awaken: '5',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
          ],
          suffix: {
            label: 'Seconds',
            value: 's',
          },
          levelCount: 3,
        },
      ],
    },
    {
      fieldName: 'Mana Usage',
      attributes: [
        {
          skipAttributeName: true,
          attributeName: '',
          flag: {
            label: 'Mana Cost',
            value: 'MP',
          },
          isDealingDamage: false,
          damageType: {
            label: 'Physical',
            value: 'PHY',
          },
          inputType: {
            label: 'Fixed',
            value: 'FIXED',
          },
          hasAwakeningEffect: false,
          awakeningModifier: {
            label: 'Flat',
            value: 'FLAT',
          },
          value: [
            {
              fixed: {
                normal: '200',
                awaken: '',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
            {
              fixed: {
                normal: '180',
                awaken: '',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
            {
              fixed: {
                normal: '160',
                awaken: '',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
          ],
          suffix: {
            label: 'MP',
            value: 'MP',
          },
          levelCount: 1,
        },
      ],
    },
    {
      fieldName: 'Cooldown',
      attributes: [
        {
          skipAttributeName: true,
          attributeName: '',
          flag: {
            label: 'none',
            value: '',
          },
          isDealingDamage: false,
          damageType: {
            label: 'Physical',
            value: 'PHY',
          },
          inputType: {
            label: 'Fixed',
            value: 'FIXED',
          },
          hasAwakeningEffect: false,
          awakeningModifier: {
            label: 'Flat',
            value: 'FLAT',
          },
          value: [
            {
              fixed: {
                normal: '12',
                awaken: '',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
            {
              fixed: {
                normal: '10',
                awaken: '',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
            {
              fixed: {
                normal: '8',
                awaken: '',
              },
              range: {
                normal: [
                  '',
                  '',
                ],
                awaken: [
                  '',
                  '',
                ],
              },
            },
          ],
          suffix: {
            label: 'Seconds',
            value: 's',
          },
          levelCount: 3,
        },
      ],
    },
  ],
}]

export default tableDummy
