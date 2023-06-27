import type Location from '../types/Location';
import type { Work } from '../types/Work';
import getWorksForLocation from './GetWorkForLocation';

export default function getLatestWork(location: Location, works: Work[]): Work {
  return getWorksForLocation(location, works)
    .sort((a, b) => (b.id >= a.id ? 1 : -1))
    .find(() => true);
}
