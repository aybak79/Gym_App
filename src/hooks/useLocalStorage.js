import { useState, useEffect } from "react";

// Simple persisted state. Reads once on mount, writes on every change.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage unavailable (private browsing, quota, etc) — fail silently
    }
  }, [key, value]);

  return [value, setValue];
}

// Returns today's date as YYYY-MM-DD, used to auto-reset daily checklists.
export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}
