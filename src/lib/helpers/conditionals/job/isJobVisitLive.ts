import type Visit from '../../../types/Visit';

export default function isJobVisitLive(visit: Visit): boolean {
  return visit.completedAt === null && visit.cancelledAt === null;
}
