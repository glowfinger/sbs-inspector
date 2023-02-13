import type WorkResult from "./WorkResult";

export interface Work {
  id?: number;
  locationId: number,
  visitId: number,
  status?: string,
  comment?: string,
  remedied?: boolean,
  latest?: boolean, // TODO do I need this, it think it can be removed due to the visits
  startedAt?: Date,
  inaccessibleAt?: Date,
  orderedAt?: Date
  replacedAt?: Date,
  servicedAt?: Date,
  completedAt?: Date,
  submittedAt?: Date,
  results?: WorkResult[]
}
