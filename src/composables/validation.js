export const checkObjectIsEmpty = (customObject) => {
  return Object.keys(customObject).every((key) => {
    const objectValue = customObject[key]
    return objectValue !== null && objectValue !== ''
  })
}
