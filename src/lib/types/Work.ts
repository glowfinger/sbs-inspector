export interface Work {
  id: Number;
  siteId: Number,
  status: String,
  'type': String
  createdAt: Date,
  updatedAt: Date,
  reminderAt: Date,
  overdueAt: Date,
  bookedAt: Date,
  startedAt: Date,
  completedAt: Date,
  cancelledAt: Date
}
