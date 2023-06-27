import { getVisitById } from "../apiServices/VisitApiService";
import { getJobById } from "../apiServices/job/JobApiService";
import { getSiteById } from "../apiServices/SiteApiService";

function loadWorkData(siteId: number, jobId: number, visitId: number) {
  return Promise.all([
    getVisitById(visitId),
    getJobById(jobId),
    getSiteById(siteId)
  ]);
}

export default loadWorkData;
