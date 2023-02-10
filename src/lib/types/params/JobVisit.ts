export default interface JobVisit {
  id:	number;
  visitId:	number;
  createdAt: string;
  updatedAt: string;
  reminderAt: string;
  overdueAt: string;
  bookedAt: string;
  completedAt: string;
  cancelledAt: string;
}
