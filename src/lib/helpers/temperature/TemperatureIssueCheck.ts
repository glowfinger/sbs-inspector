export default function temperatureIssueCheck(temperature, range): boolean {
  temperature = Number(parseFloat(temperature).toFixed(1))
  return temperature < range.low || temperature > range.high;
}
