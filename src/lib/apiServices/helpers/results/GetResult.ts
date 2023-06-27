import type WorkResult from '../../../types/WorkResult';

export default function getResult(
  results: WorkResult[],
  type: string
): WorkResult {
  return results.find((w) => w.type === type) ?? null;
}
