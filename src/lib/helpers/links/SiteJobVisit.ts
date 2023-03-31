import type Job from "../../types/Job";

export function getLatest(job: Job): string {
  const visitId = job.visits.sort((a, b) => (b.id >= a.id ? 1 : -1))[0].id;

  return `site/${job.siteId}/job/${job.id}/visit/${visitId}`;
}
