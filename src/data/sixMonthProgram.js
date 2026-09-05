// Source: README.md "Your 5-Day Training Program (24 Weeks)" draft.
// All 3 phases reuse the same 25 exercises (5 per day) — only
// sets/reps/rest/tempo/rir/tut change per phase (progressive overload).

const phase1Days = {
  "DAY 1": {
    label: "Chest & Core",
    exercises: [
      { name: "Dumbbell Bench Press", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "30° Incline DB Bench Press", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Weighted Chest Dip", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Mountain Climbers", sets: "3–5", reps: "20/side", rest: "75–120 sec", tempo: "—", rir: "—", tut: "—" },
      { name: "Crunches", sets: "3–5", reps: "20", rest: "75–120 sec", tempo: "—", rir: "—", tut: "—" },
    ],
  },
  "DAY 2": {
    label: "Back & Traps",
    exercises: [
      { name: "Chest-Supported T-Bar Row", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Lat Pulldown", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Single-Arm Dumbbell Row", sets: "3–5", reps: "6–8/side", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Machine Row (Single Arm)", sets: "3–5", reps: "6–8/side", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Dumbbell Shrugs (Seated)", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
    ],
  },
  "DAY 3": {
    label: "Legs",
    exercises: [
      { name: "Leg Press", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Bulgarian Split Squat", sets: "3–5", reps: "6–8/side", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Lying Leg Curl", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Standing Calf Raise (Smith)", sets: "3–5", reps: "20", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "—" },
      { name: "Cable Crunch", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
    ],
  },
  "DAY 4": {
    label: "Shoulders & Core",
    exercises: [
      { name: "Seated Dumbbell Shoulder Press", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Dumbbell Lateral Raise", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Cable Face Pull", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Hollow Holds", sets: "3–5", reps: "20 sec hold", rest: "75–120 sec", tempo: "—", rir: "—", tut: "—" },
      { name: "Russian Twists", sets: "3–5", reps: "20/side", rest: "75–120 sec", tempo: "—", rir: "—", tut: "—" },
    ],
  },
  "DAY 5": {
    label: "Arms",
    exercises: [
      { name: "Reverse-Grip Barbell Curl", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Hammer Curl", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Rope Pushdown", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Cable Crunch", sets: "3–5", reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
      { name: "Cable Woodchopper", sets: "3–5", reps: "6–8/side", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
    ],
  },
};

const phase2Days = {
  "DAY 1": {
    label: "Chest & Core",
    exercises: [
      { name: "Dumbbell Bench Press", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "30° Incline DB Bench Press", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Weighted Chest Dip", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Mountain Climbers", sets: "3–5", reps: "30/side", rest: "60–90 sec", tempo: "—", rir: "—", tut: "—" },
      { name: "Crunches", sets: "3–5", reps: "30", rest: "60–90 sec", tempo: "—", rir: "—", tut: "—" },
    ],
  },
  "DAY 2": {
    label: "Back & Traps",
    exercises: [
      { name: "Chest-Supported T-Bar Row", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Lat Pulldown", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Single-Arm Dumbbell Row", sets: "3–5", reps: "8–10/side", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Machine Row (Single Arm)", sets: "3–5", reps: "8–10/side", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Dumbbell Shrugs (Seated)", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
    ],
  },
  "DAY 3": {
    label: "Legs",
    exercises: [
      { name: "Leg Press", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Bulgarian Split Squat", sets: "3–5", reps: "8–10/side", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Lying Leg Curl", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Standing Calf Raise (Smith)", sets: "3–5", reps: "30", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "—" },
      { name: "Cable Crunch", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
    ],
  },
  "DAY 4": {
    label: "Shoulders & Core",
    exercises: [
      { name: "Seated Dumbbell Shoulder Press", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Dumbbell Lateral Raise", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Cable Face Pull", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Hollow Holds", sets: "3–5", reps: "30 sec hold", rest: "60–90 sec", tempo: "—", rir: "—", tut: "—" },
      { name: "Russian Twists", sets: "3–5", reps: "30/side", rest: "60–90 sec", tempo: "—", rir: "—", tut: "—" },
    ],
  },
  "DAY 5": {
    label: "Arms",
    exercises: [
      { name: "Reverse-Grip Barbell Curl", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Hammer Curl", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Rope Pushdown", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Cable Crunch", sets: "3–5", reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
      { name: "Cable Woodchopper", sets: "3–5", reps: "8–10/side", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
    ],
  },
};

const phase3Days = {
  "DAY 1": {
    label: "Chest & Core",
    exercises: [
      { name: "Dumbbell Bench Press", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~48–60 sec" },
      { name: "30° Incline DB Bench Press", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~48–60 sec" },
      { name: "Weighted Chest Dip", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~48–60 sec" },
      { name: "Mountain Climbers", sets: "3–5", reps: "40/side", rest: "45–75 sec", tempo: "—", rir: "—", tut: "—" },
      { name: "Crunches", sets: "3–5", reps: "40", rest: "45–75 sec", tempo: "—", rir: "—", tut: "—" },
    ],
  },
  "DAY 2": {
    label: "Back & Traps",
    exercises: [
      { name: "Chest-Supported T-Bar Row", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Lat Pulldown", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Single-Arm Dumbbell Row", sets: "3–5", reps: "10–12/side", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Machine Row (Single Arm)", sets: "3–5", reps: "10–12/side", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Dumbbell Shrugs (Seated)", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
    ],
  },
  "DAY 3": {
    label: "Legs",
    exercises: [
      { name: "Leg Press", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Bulgarian Split Squat", sets: "3–5", reps: "10–12/side", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Lying Leg Curl", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Standing Calf Raise (Smith)", sets: "3–5", reps: "40", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "—" },
      { name: "Cable Crunch", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
    ],
  },
  "DAY 4": {
    label: "Shoulders & Core",
    exercises: [
      { name: "Seated Dumbbell Shoulder Press", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Dumbbell Lateral Raise", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Cable Face Pull", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Hollow Holds", sets: "3–5", reps: "40 sec hold", rest: "45–75 sec", tempo: "—", rir: "—", tut: "—" },
      { name: "Russian Twists", sets: "3–5", reps: "40/side", rest: "45–75 sec", tempo: "—", rir: "—", tut: "—" },
    ],
  },
  "DAY 5": {
    label: "Arms",
    exercises: [
      { name: "Reverse-Grip Barbell Curl", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Hammer Curl", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Rope Pushdown", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Cable Crunch", sets: "3–5", reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
      { name: "Cable Woodchopper", sets: "3–5", reps: "10–12/side", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
    ],
  },
};

export const sixMonthProgram = {
  "PHASE 1": {
    label: "Control & Foundation",
    weeks: "Weeks 1–7",
    params: { reps: "6–8", rest: "75–120 sec", tempo: "4-1-2", rir: "2–3", tut: "~42–56 sec" },
    deload: {
      week: "Week 8",
      sets: "3",
      load: "~50% of normal load",
      tempo: "2-1-4",
      rir: "4–5",
      note: "Reset joints and nervous system before Phase 2.",
    },
    days: phase1Days,
  },
  "PHASE 2": {
    label: "Overload & Growth",
    weeks: "Weeks 9–15",
    params: { reps: "8–10", rest: "60–90 sec", tempo: "3-1-2-0", rir: "1–2", tut: "~48–60 sec" },
    deload: {
      week: "Week 16",
      sets: "3",
      load: "~50% load",
      tempo: "2-1-3-0",
      rir: "4–5",
      note: "Reset joints, improve posture, stay mobile.",
    },
    days: phase2Days,
  },
  "PHASE 3": {
    label: "Volume & Density",
    weeks: "Weeks 17–23",
    params: { reps: "10–12", rest: "45–75 sec", tempo: "2-0-2-0", rir: "0–1", tut: "~40–48 sec" },
    deload: {
      week: "Week 24 (Final)",
      sets: "3",
      load: "~50% load",
      tempo: "reverse tempo",
      rir: "4–5",
      note: "Final recovery week — refresh, restore energy, improve mobility, and reflect before a new cycle.",
    },
    days: phase3Days,
  },
};
