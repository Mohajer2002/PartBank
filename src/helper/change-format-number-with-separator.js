export default function formatNumberWithSeparator(numberString, separator = '٬') {
  return numberString?.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}
