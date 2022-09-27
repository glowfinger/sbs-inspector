import { DateTime } from "luxon";
export default function dateFormatter(dateString: string): string {
  if (dateString === null) {
    return "-";
  }
  const luxonObject = DateTime.fromISO(dateString);
  const formattedString = luxonObject.toLocaleString(DateTime.DATETIME_SHORT)
  return formattedString;
}
