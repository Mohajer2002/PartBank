import formatNumberWithSeparator from './formatNumberWithSeparator'
import toPersianDigit from './toPersianDigit'

export default function toFormatBalance(balance) {
  console.log(typeof balance)

  return toPersianDigit(formatNumberWithSeparator(balance.toString()))
}
