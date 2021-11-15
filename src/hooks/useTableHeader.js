function useTableHeader(data) {
  const headerLevel1 = data.map(
    (item) => ({
      fieldName: item.fieldName,
      colSpan: item.attributes.reduce((prev, cur) => {
        if (cur.hasAwakeningEffect) {
          return prev + 2
        }
        return prev + 1
      }, 0),
      rowSpan: item.attributes.some((attr) => attr.skipAttributeName) ? (
        item.attributes.some((attr) => attr.hasAwakeningEffect) ? 2 : 3
      ) : 1,
    }),
  )
  const headerLevel2 = data.map((item) => item.attributes).map(
    (item) => item.map((attr) => ({
      fieldName: attr.attributeName + (attr.isDealingDamage ? ` (${attr.damageType.label})` : ''),
      colSpan: attr.hasAwakeningEffect ? 2 : 1,
      rowSpan: attr.hasAwakeningEffect ? 1 : 2,
    })),
  )
  const headerLevel3 = data.map((item) => item.attributes).map(
    (item) => item.map((attr) => {
      if (attr.hasAwakeningEffect) {
        return [
          { fieldName: 'Normal', rowSpan: 1, colSpan: 1 },
          { fieldName: 'Awaken', rowSpan: 1, colSpan: 1 },
        ]
      }
      return []
    }),
  )

  return {
    headerLevel1,
    headerLevel2,
    headerLevel3,
  }
}

export default useTableHeader
