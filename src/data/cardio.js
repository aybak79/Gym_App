export const approaches = {
  "BRISK WALKING": {
    color: "#00e68a",
    icon: "🚶",
    zone: "Zone 2",
    hrRange: "60–70% MHR",
    duration: "30–60 min",
    frequency: "Daily or near-daily",
    equipment: "Treadmill incline / Outdoor",
    description:
      "Lowest barrier, highest compliance. Ideal for rest days, fasted mornings, or post-workout cooldown. Incline treadmill walking at 5–10% grade elevates HR into Zone 2 without joint stress.",
    notes: [
      "Keep pace conversational — if you can't hold a sentence, slow down",
      "Incline walking on treadmill is underrated for Zone 2 compliance",
      "Best fasted or post-workout — minimal interference with training",
    ],
  },
  LISS: {
    color: "#22d3ee",
    icon: "◎",
    zone: "Zone 2",
    hrRange: "60–70% MHR",
    duration: "30–45 min",
    frequency: "3–5× per week",
    equipment: "Stairmaster / Crosstrainer / Rower / Assault Bike",
    description:
      "Sustained steady-state in Zone 2. The foundation of cardiovascular health and mitochondrial density. Pick any equipment — consistency matters more than modality.",
    notes: [
      "Nose-breathing test: if you have to mouth-breathe, you're above Zone 2",
      "Stairmaster: squeeze your glutes after every single step — turns cardio into a posterior chain primer",
      "Rower: keep stroke rate 18–24 SPM for true LISS, focus on the drive phase",
      "Assault Bike: maintain RPM, don't chase watts — keep it boring",
    ],
  },
  HIIT: {
    color: "#f87171",
    icon: "⚡",
    zone: "Zone 4–5",
    hrRange: "85–95% MHR",
    duration: "15–25 min total",
    frequency: "1–3× per week",
    equipment: "Assault Bike / Rower / Stairmaster / Crosstrainer",
    description:
      "Short maximal-effort intervals with rest periods. Drives VO2max adaptation, insulin sensitivity, and EPOC. Do not exceed 3 sessions per week — recovery cost is real.",
    protocols: [
      { name: "30/30", work: "30 sec", rest: "30 sec", rounds: "8–12", total: "8–12 min", level: "BEGINNER" },
      { name: "20/40", work: "20 sec", rest: "40 sec", rounds: "10–15", total: "10–15 min", level: "BEGINNER" },
      { name: "30/60", work: "30 sec", rest: "60 sec", rounds: "8–10", total: "12–15 min", level: "INTERMEDIATE" },
      { name: "40/20", work: "40 sec", rest: "20 sec", rounds: "8–12", total: "8–12 min", level: "ADVANCED" },
      { name: "TABATA", work: "20 sec", rest: "10 sec", rounds: "8", total: "4 min", level: "ADVANCED" },
    ],
    notes: [
      "Stairmaster HIIT: squeeze your glutes after every step — even during max effort intervals",
      "Assault Bike is king for full-body HIIT — arms and legs both contribute",
      "Rower: explode on the drive, control the recovery — don't just yank",
      "True HIIT means genuinely maximal effort in work intervals. If you can talk, you're not there",
    ],
  },
  "MIXED PROTOCOL": {
    color: "#fbbf24",
    icon: "⟐",
    zone: "Zone 2–5",
    hrRange: "60–95% MHR",
    duration: "Varies",
    frequency: "5–6× per week",
    equipment: "All modalities",
    description:
      "The practical approach. 3–4 LISS or walking sessions as base, 1–2 HIIT sessions layered in. Rotate equipment to distribute mechanical stress and prevent boredom-induced dropout.",
    weekSample: [
      { day: "MON", session: "REST — Brisk Walk 30 min", type: "walk", color: "#00e68a" },
      { day: "TUE", session: "POST-WORKOUT: LISS 30 min", type: "liss", color: "#22d3ee" },
      { day: "WED", session: "REST — LISS 40 min", type: "liss", color: "#22d3ee" },
      { day: "THU", session: "POST-WORKOUT: HIIT 15 min", type: "hiit", color: "#f87171" },
      { day: "FRI", session: "REST — Brisk Walk 30 min", type: "walk", color: "#00e68a" },
      { day: "SAT", session: "POST-WORKOUT: LISS 30 min", type: "liss", color: "#22d3ee" },
      { day: "SUN", session: "REST — HIIT 20 min", type: "hiit", color: "#f87171" },
    ],
    notes: [
      "Prioritize LISS volume over HIIT frequency — the base matters most",
      "Rotate equipment weekly or per session to distribute stress",
      "This sample is a template — adjust days to your training split",
    ],
  },
};

export const hrZones = [
  { zone: "Zone 1", range: "50–60%", label: "Recovery", color: "#4a5568" },
  { zone: "Zone 2", range: "60–70%", label: "Aerobic base / fat oxidation", color: "#00e68a" },
  { zone: "Zone 3", range: "70–80%", label: "Tempo / threshold", color: "#fbbf24" },
  { zone: "Zone 4", range: "80–90%", label: "VO2max intervals", color: "#f472b6" },
  { zone: "Zone 5", range: "90–100%", label: "Max effort / anaerobic", color: "#f87171" },
];
