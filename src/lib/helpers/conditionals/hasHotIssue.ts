import {cold, hot, mixed} from "../../TemperatureRanges";

export function hasHotIssue(temperature: number) {
  if (!temperature) {
    return true;
  }
  return isValid(temperature, hot.low, hot.high);
}

export function hasColdIssue(temperature: number) {
  if (!temperature) {
    return true;
  }

  return isValid(temperature, cold.low, cold.high);
}

export function hasMixedIssue(temperature) {
  if (!temperature) {
    return true;
  }
  return isValid(temperature, mixed.low, mixed.high);
}

export function hasFailSafeIssue(value: string) {
  if (!value) {
    return true;
  }

  return value !== 'yes';
}

function isValid(temperature: number | null, low: number, high: number) {
  return temperature < low || temperature > high
}
