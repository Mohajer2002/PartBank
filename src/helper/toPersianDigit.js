export default function toPersianDigit(englishDigit) {
  return englishDigit.toString().replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[digit])
}
