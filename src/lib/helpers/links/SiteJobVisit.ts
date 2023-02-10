import type Job from "../../types/Job";
import type JobVisit from "../../types/params/JobVisit";

export function getLatest(job: Job): string {

  const visitId = job.visits.find((visit: JobVisit) => visit.completedAt === null && visit.cancelledAt === null).id

  return `site/${job.siteId}/job/${job.id}/visit/${visitId}`;
}
