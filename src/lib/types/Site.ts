import type { SiteAddress } from "./SiteAddress";
import type { SiteLocation } from "./SiteLocation";
import type { Work } from "./Work";

export interface Site {
  id: Number;
  name: String;
  slug: String;
  code: String;
  createdAt: String;
  updatedAt: String;
  address: SiteAddress;
  locations: SiteLocation[];
  works: Work[];
  jobs: any[];
}
