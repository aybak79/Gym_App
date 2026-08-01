export const workouts = {
  "UPPER A": {
    color: "#00e68a",
    day: "TUE",
    exercises: [
      { name: "Clavicular Pecs Machine Press", sets: 3, reps: "5–10" },
      { name: "Chest Supported T-Bar Rows · Pronated", sets: 3, reps: "5–10" },
      { name: "Seated Pec Flys", sets: 2, reps: "5–10" },
      { name: "Single Arm Lat Pull-Down", sets: 2, reps: "5–10" },
      { name: "Seated BTB Cable Curls", sets: 3, reps: "5–10" },
      { name: "Cable Triceps / Dip Machine", sets: 2, reps: "5–10" },
    ],
  },
  "LOWER A": {
    color: "#22d3ee",
    day: "THU",
    exercises: [
      { name: "Seated Leg Curls", sets: 3, reps: "5–10" },
      { name: "Leg Extensions", sets: 3, reps: "5–10" },
      { name: "45° Extensions", sets: 2, reps: "5–10" },
      { name: "Calf Press", sets: 2, reps: "5–10" },
      { name: "Split Squats", sets: 2, reps: "5–10" },
      { name: "Adduction Machine", sets: 3, reps: "5–10" },
      { name: "Ab Crunch Machine", sets: 2, reps: "5–10" },
    ],
  },
  "UPPER B": {
    color: "#a78bfa",
    day: "SAT",
    exercises: [
      { name: "Seated (Vertical) Pin Loaded Chest Press Machine", sets: 2, reps: "5–10" },
      { name: "Chest Supported Seated Cable Rows · Elbows Tucked", sets: 2, reps: "5–10" },
      { name: "Pin Loaded Incline Machine Press", sets: 2, reps: "5–10" },
      { name: "Wide Grip Lat Pull-Down", sets: 2, reps: "5–10" },
      { name: "Single Arm Preacher Cable Curls", sets: 1, reps: "5–10" },
      { name: "Seated Dumbbell Hammer Curls · Upper Arm Support", sets: 1, reps: "5–10" },
      { name: "Dip Machine", sets: 2, reps: "5–10" },
    ],
  },
  "LOWER B": {
    color: "#fbbf24",
    day: "SUN",
    exercises: [
      { name: "Leg Extensions", sets: 3, reps: "5–10" },
      { name: "Seated Leg Curls", sets: 3, reps: "5–10" },
      { name: "Pendulum / Hack Squats", sets: 2, reps: "5–10" },
      { name: "SLDLs", sets: 2, reps: "5–10" },
      { name: "Calf Press", sets: 2, reps: "5–10" },
      { name: "Glute Bridge Machine", sets: 2, reps: "5–10" },
      { name: "Ab Crunch Machine", sets: 2, reps: "5–10" },
    ],
  },
};

export const schedule = [
  { day: "MON", label: "OFF", sub: "ZONE 2 CARDIO", active: false },
  { day: "TUE", label: "UPPER A", active: true, color: "#00e68a" },
  { day: "WED", label: "OFF", sub: "ZONE 2 CARDIO", active: false },
  { day: "THU", label: "LOWER A", active: true, color: "#22d3ee" },
  { day: "FRI", label: "OFF", sub: "ZONE 2 CARDIO", active: false },
  { day: "SAT", label: "UPPER B", active: true, color: "#a78bfa" },
  { day: "SUN", label: "LOWER B", active: true, color: "#fbbf24" },
];
