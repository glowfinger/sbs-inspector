import type Location from "../types/Location";
import type {Work} from "../types/Work";

export default function getWorksForLocation(location: Location, works: Work[]): Work[] {
  return works.filter((w) => w.locationId === location.id)
    .sort((a, b) => b.id >= a.id ? 1 : -1)
}
