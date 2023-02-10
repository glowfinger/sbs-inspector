import type Visit from "./Visit";
import type JobVisit from "./params/JobVisit";

export default interface Job {
  id: number,
  siteId:	number;
  status: string,
  task: string,
  type: string,
  visits: Array<JobVisit>;
};

