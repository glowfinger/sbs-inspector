export default interface WorkResult {
  id: number| null;
  type: string;
  temperature: number | null;
  value: string | null;
  issue: boolean| null;
}
