export default interface WorkResult {
  id: number;
  type: string;
  temperature: number;
  value: string;
  issue: boolean;
}
