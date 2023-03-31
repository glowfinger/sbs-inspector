import { DateTime } from "luxon";
function localDate(dateString: string): string {
  if (dateString === null) {
    return "-";
  }
  const luxonObject = DateTime.fromISO(dateString);
  const formattedString = luxonObject.toLocaleString(DateTime.DATETIME_SHORT);
  return formattedString;
}
function shortDate(dateString: string): string {
  if (dateString === null) {
    return "-";
  }
  const luxonObject = DateTime.fromISO(dateString);
  const formattedString = luxonObject.toRelative();
  return formattedString;
}

export { localDate, shortDate };
