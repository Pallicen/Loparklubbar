export type StoredUser = {
  id: string;
  username: string;
  password: string; // demo
  createdAt: string;
};

export type AuthSession = {
  userId: string;
  username: string;
  loggedInAt: string;
};

const USERS_KEY = "loparklubbar:users";
const SESSION_KEY = "loparklubbar:session";

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function readUsers(): StoredUser[] {
  const users = safeParse<StoredUser[]>(localStorage.getItem(USERS_KEY));
  return Array.isArray(users) ? users : [];
}

export function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function readSession(): AuthSession | null {
  return safeParse<AuthSession>(localStorage.getItem(SESSION_KEY));
}

export function writeSession(session: AuthSession) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function makeId() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
}