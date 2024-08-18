import formatNumberWithSeparator from './change-format-number-with-separator'
import toPersianDigit from './to-persian-digit'

export default function toFormatBalance(balance) {
  return toPersianDigit(formatNumberWithSeparator(balance?.toString()))
}
