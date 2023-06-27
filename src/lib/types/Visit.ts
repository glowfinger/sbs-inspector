import type { Work } from './Work';

export default interface Visit {
  id: number;
  jobId: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  reminderAt: string;
  overdueAt: string;
  bookedAt: string;
  startedAt: string;
  completedAt: string;
  cancelledAt: string;
  works: Array<Work>;
}
