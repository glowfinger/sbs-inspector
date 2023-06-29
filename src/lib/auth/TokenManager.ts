const TOKEN_KEY: string = 'token';

export function getToken(): string {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}


export function hasToken() {
  return getToken() !== null
}
