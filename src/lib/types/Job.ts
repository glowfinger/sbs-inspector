import type Visit from "./Visit";

export default interface Job {
  id: number,
  siteId:	number;
  status: string,
  task: string,
  type: string,
  visits: Array<Visit>;
};

