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

// Returns the date (YYYY-MM-DD) of the current week's Monday, used to
// auto-reset weekly checklists once a new week starts.
export function weekKey() {
  const now = new Date();
  const diffToMonday = (now.getDay() + 6) % 7; // days since most recent Monday
  const monday = new Date(now);
  monday.setDate(now.getDate() - diffToMonday);
  return monday.toISOString().slice(0, 10);
}
