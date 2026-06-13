import React, { createContext, useMemo, useState } from "react";
import {
  readSession,
  readUsers,
  writeUsers,
  writeSession,
  clearSession,
  makeId,
  type AuthSession,
  type StoredUser,
} from "./storage";

type AuthContextValue = {
  session: AuthSession | null;
  register: (username: string, password: string) => { ok: true } | { ok: false; error: string };
  login: (username: string, password: string) => { ok: true } | { ok: false; error: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(() => readSession());

  const value = useMemo<AuthContextValue>(() => {
    return {
      session,

      register(username, password) {
        const cleanUsername = username.trim();
        if (!cleanUsername) return { ok: false, error: "Användarnamn krävs." };
        if (password.length < 6) return { ok: false, error: "Lösenord måste vara minst 6 tecken." };

        const users = readUsers();
        if (users.some(u => u.username.toLowerCase() === cleanUsername.toLowerCase())) {
          return { ok: false, error: "Användarnamn finns redan." };
        }

        const newUser: StoredUser = {
          id: makeId(),
          username: cleanUsername,
          password,
          createdAt: new Date().toISOString(),
        };

        writeUsers([...users, newUser]);
        return { ok: true };
      },

      login(username, password) {
        const cleanUsername = username.trim();
        const users = readUsers();
        const user = users.find(u => u.username.toLowerCase() === cleanUsername.toLowerCase());

        if (!user || user.password !== password) {
          return { ok: false, error: "Fel användarnamn eller lösenord." };
        }

        const nextSession: AuthSession = {
          userId: user.id,
          username: user.username,
          loggedInAt: new Date().toISOString(),
        };

        writeSession(nextSession);
        setSession(nextSession);
        return { ok: true };
      },

      logout() {
        clearSession();
        setSession(null);
      },
    };
  }, [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };