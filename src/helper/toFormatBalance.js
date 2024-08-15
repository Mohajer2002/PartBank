import formatNumberWithSeparator from './formatNumberWithSeparator'
import toPersianDigit from './toPersianDigit'

export default function toFormatBalance(balance) {
  return toPersianDigit(formatNumberWithSeparator(balance))
}
