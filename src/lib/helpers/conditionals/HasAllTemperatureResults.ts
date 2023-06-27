import type WorkResult from '../../types/WorkResult';

export default function hasAllTemperatureResults(
  results: WorkResult[]
): boolean {
  return results.length === 4;
}
