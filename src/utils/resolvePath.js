const resolvePath = (obj, path) => {
  const cleanedPath = path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '')
  const pathArray = cleanedPath.split('.')
  return pathArray.reduce((prev, curr) => prev?.[curr], obj)
}

export default resolvePath
