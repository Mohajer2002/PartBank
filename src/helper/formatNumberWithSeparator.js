export default function formatNumberWithSeparator(numberString, separator = "'") {
  const number = parseInt(numberString, numberString.length)
  const formattedNumber = number.toLocaleString().replace(/,/g, separator)

  return formattedNumber
}
