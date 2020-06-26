const digitsRE = /(\d{3})(?=\d)/g
// console.log('digitsRE: ', digitsRE);

export function currency (value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2

  // Values
  var stringified = Math.abs(value).toFixed(decimals)
  var theInt = decimals ? stringified.slice(0, -1 - decimals) : stringified
  var index = theInt.length % 3
  var head = index > 0 ? (theInt.slice(0, index) + (theInt.length > 3 ? ',' : '')) : ''
  var theFloat = decimals ? stringified.slice(-1 - decimals) : ''
  var sign = value < 0 ? '-' : ''
  
  return sign + currency + head + theInt.slice(index).replace(digitsRE, '$1,') + theFloat
}
