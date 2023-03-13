import type WorkResult from "./WorkResult";

export  interface Work {
  id?: number;
  locationId: number;
  visitId: number;
  status?: string;
  outcome?: string;
  comment?: string;
  remediedAt?: Date;
  resolvedAt?: Date;
  startedAt?: Date;
  inaccessibleAt?: Date;
  orderedAt?: Date;
  replacedAt?: Date;
  servicedAt?: Date;
  completedAt?: Date;
  submittedAt?: Date;
  results: WorkResult[];
}
