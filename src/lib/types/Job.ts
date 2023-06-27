import type JobVisit from "./params/JobVisit";

interface Job {
  id: number;
  siteId: number;
  status: string;
  task: string;
  type: string;
  visits: Array<JobVisit>;
}

export default Job;
