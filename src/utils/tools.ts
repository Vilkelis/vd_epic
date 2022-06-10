import moment from 'moment'

/** Форматирует число number как строку
 * formatNumberToMoneyStr(number, n, x, s, c)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
export function formatNumberToMoneyStr(
  number: number,
  n: number,
  x: number,
  s: string,
  c: string,
): string {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\D' : '$'})`
  const num = Number(number).toFixed(Math.max(0, ~~n))
  return (c ? num.replace('.', c) : num).replace(
    new RegExp(re, 'g'),
    `$&${s || ','}`,
  )
}

// Форматирование денег в отчете
export function formatReportMoney(
  number: number,
  zeroSymbol: string = '-',
  emptySymbol: string = '-',
) {
  if (number) {
    if (number !== 0) {
      return formatNumberToMoneyStr(number, 2, 3, ' ', '.')
    }
    return zeroSymbol
  }
  return emptySymbol
}

// Форматирование денег в отчете без копеек
export function formatReportMoneyInt(
  number: number,
  zeroSymbol: string = '-',
  emptySymbol: string = '-',
) {
  if (number) {
    if (number !== 0) {
      return formatNumberToMoneyStr(Math.round(number), 2, 3, ' ', '.').slice(
        0,
        -3,
      )
    }
    return zeroSymbol
  }
  return emptySymbol
}

// Форматирование даты в отчете
export function formatReportDate(date: Date, emptySymbol: string = '...') {
  if (date) {
    return moment(date).format('DD.MM.YYYY')
  }
  return emptySymbol
}

// Возвращает дату - 7 дней
export function weekOffsetFromToday(): Date {
  const date = new Date()
  date.setDate(date.getDate() - 7)
  return date
}

export function formatDateToParam(
  date: Date | undefined,
  emptySymbol: string = '',
): string {
  if (date) {
    return moment(date).format('YYYY-MM-DD')
  }
  return emptySymbol
}
