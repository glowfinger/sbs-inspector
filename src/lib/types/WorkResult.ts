export default interface WorkResult {
  id: number;
  workId:	number;
  type: string,
  temperature: number,
  value: string,
  issue: boolean,
}
