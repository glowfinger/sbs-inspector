import type Location from '../../types/Location';

export default function locationsForType(locations: Location[], type: string) {
  return locations.filter((location: Location) => location.type === type);
}
