import type {SiteAddress} from "./SiteAddress";
import type {SiteLocation} from "./SiteLocation";

export interface Site {
  id: Number;
  name: String;
  slug: String;
  code: String;
  createdAt: String;
  updatedAt: String;
  address: SiteAddress;
  locations: SiteLocation[];
}
