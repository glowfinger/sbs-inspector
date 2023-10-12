import type { SiteAddress } from './SiteAddress';
import type SiteLocation from './SiteLocation';
import type { Work } from './Work';

export default interface Site {
  id: Number;
  name: String;
  code: String;
  createdAt: String;
  updatedAt: String;
  address: SiteAddress;
  locations: SiteLocation[];
  works: Work[];
  jobs: any[];
}
