export default function toShamsi(
  miladiDate,
  format = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }
) {
  return new Date(
    Date.UTC(
      Number(miladiDate?.substring(0, 4)),
      Number(miladiDate?.substring(4, 6)),
      Number(miladiDate?.substring(6, 8)),
      3,
      0,
      0
    )
  ).toLocaleDateString('fa-IR', format)
}
