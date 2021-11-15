import numberFormat from 'utils/number-format'
import useTableHeader from './useTableHeader'

export default function useTableValue(data) {
  console.log('data', data)
  const tempData = []
  const { headerLevel3 } = useTableHeader(data)
  console.log('header levxel 3', headerLevel3)

  // eslint-disable-next-line max-len
  const tableValue = data.map((item) => item.attributes).map((attr) => attr.map((value) => {
    if (value.hasAwakeningEffect) {
      if (value.inputType.value === 'FIXED') {
        value?.value.map((vl, index) => {
          const finalValue = []
          Object.entries(vl.fixed).map(([key, val]) => {
            if (value.awakeningModifier?.value === 'PERCENT' && key === 'awaken') {
              finalValue.push(`${numberFormat(calculateFixedPercent(vl.fixed))}${value.suffix.value}`)
            } else {
              finalValue.push(`${numberFormat(val)}${value.suffix.value}`)
            }
          })
          // console.log('vl', vl)
          // console.log('ix', index)
          tempData[index] = [...(tempData[index] || []), finalValue]
        })
      } else {
        value?.value.map((vl, index) => {
          const finalValue = []
          Object.entries(vl.range).forEach(([key, val]) => {
            if (value.awakeningModifier?.value === 'PERCENT' && key === 'awaken') {
              finalValue.push(`${numberFormat(calculateRangePercent(vl.range, val.awaken, 0))}${value.suffix.value} →
              ${numberFormat(calculateRangePercent(vl.range, val.awaken, 1))}${value.suffix.value}`)
            } else {
              finalValue.push(`${numberFormat(val.normal[0])}${value.suffix.value} → ${numberFormat(val.normal[1])}${value.suffix.value}`)
            }
          })
          console.log('finalValue', finalValue)
          // tempData[index] = [...(tempData[index] || []), finalValue]
        })
      }
    }
    return value?.value.map((vl, index) => {
      // console.log('vl2', vl)
      // console.log('ix', index)
      tempData[index] = [...(tempData[index] || []), vl]
      return vl
    })
  }))
  console.log(tableValue)
  console.log('tempdata', tempData)
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
