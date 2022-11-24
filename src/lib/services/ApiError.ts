export default function apiError(response: Response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
