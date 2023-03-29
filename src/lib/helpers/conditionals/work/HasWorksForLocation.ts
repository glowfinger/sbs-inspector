import type Location from "../../../types/Location";
import type {Work} from "../../../types/Work";

export default function hasWorksForLocation(location: Location[], works: Work[]): Location[] {
  return location.filter((location: Location) => works.some((work: Work) => work.locationId !== location.id ))
}

