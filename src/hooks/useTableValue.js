import numberFormat from 'utils/number-format'

export default function useTableValue(data) {
  const tempData = []
  // eslint-disable-next-line max-len
  data.map((item) => item.attributes).forEach((attr) => attr.forEach((value) => {
    if (value.hasAwakeningEffect) {
      if (value.inputType.value === 'FIXED') {
        value?.value.forEach((vl, index) => {
          const finalValue = []
          Object.entries(vl.fixed).forEach(([key, val]) => {
            if (value.awakeningModifier?.value === 'PERCENT' && key === 'awaken') {
              finalValue.push(`${numberFormat(calculateFixedPercent(vl.fixed))}${value.suffix.value}`)
            } else {
              finalValue.push(`${numberFormat(val)}${value.suffix.value}`)
            }
          })
          tempData[index] = [...(tempData[index] || []), finalValue]
        })
      } else {
        value?.value.forEach((vl, index) => {
          const finalValue = []
          Object.entries(vl.range).forEach(([key, val]) => {
            if (value.awakeningModifier?.value === 'PERCENT' && key === 'awaken') {
              finalValue.push(`${numberFormat(calculateRangePercent(vl.range, vl.fixed.awaken, 0))}${value.suffix.value} →
              ${numberFormat(calculateRangePercent(vl.range, vl.fixed.awaken, 1))}${value.suffix.value}`)
            } else {
              finalValue.push(`${numberFormat(val[0])}${value.suffix.value} → ${numberFormat(val[1])}${value.suffix.value}`)
            }
          })
          tempData[index] = [...(tempData[index] || []), finalValue]
        })
      }
    } else {
      value?.value.forEach((vl, index) => {
        let finalValue = ''
        if (value.inputType.value === 'FIXED') {
          finalValue = `${numberFormat(vl.fixed.normal)}${value.suffix.value}`
        } else {
          finalValue = `${numberFormat(vl.range.normal[0])}${value.suffix.value} →
                        ${numberFormat(vl.range.normal[1])}${value.suffix.value}`
        }
        tempData[index] = [...(tempData[index] || []), finalValue]
      })
    }
  }))
  return tempData
}

const calculateFixedPercent = (val) => {
  const base = +val.normal
  const percent = +val.awaken / 100
  return base + (base * percent)
}

const calculateRangePercent = (val, percent, index) => {
  const base = +val.normal[index]
  return base + (base * (+percent / 100))
}
