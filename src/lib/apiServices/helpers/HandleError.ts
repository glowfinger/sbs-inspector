export default function handleErrors(response: Response) {
  if (!response.ok) {
    throw Error('error');
  }
  return response;
}
