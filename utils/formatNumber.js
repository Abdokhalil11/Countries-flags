export function formatNumber(number) {
  const str = number.toString().split("");
  for (let i = str.length - 3; i > 0; i -= 3) {
    str.splice(i, 0, ",");
  }
  return str.join("");
}
