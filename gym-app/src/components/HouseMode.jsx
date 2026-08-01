import { mono, colors } from "../theme";
import { useLocalStorage, todayKey } from "../hooks/useLocalStorage";

const TASKS = [
  { id: "pushups", name: "PUSH-UPS", target: 100, unit: "reps", step: 10, color: colors.green },
  { id: "squats", name: "SQUATS", target: 100, unit: "reps", step: 10, color: colors.cyan },
  { id: "walk", name: "WALKING", target: 10, unit: "min", step: 5, color: colors.purple },
];

function emptyProgress() {
  return TASKS.reduce((acc, t) => ({ ...acc, [t.id]: 0 }), {});
}

export default function HouseMode() {
  const [state, setState] = useLocalStorage("house-progress", {
    date: todayKey(),
    progress: emptyProgress(),
  });

  // Auto-reset the checklist on a new day.
  const today = todayKey();
  const progress = state.date === today ? state.progress : emptyProgress();
  if (state.date !== today) {
    setState({ date: today, progress: emptyProgress() });
  }

  const setAmount = (id, value) => {
    const task = TASKS.find((t) => t.id === id);
    const clamped = Math.max(0, Math.min(task.target, value));
    setState({ date: today, progress: { ...progress, [id]: clamped } });
  };

  const bump = (id, delta) => {
    setAmount(id, (progress[id] || 0) + delta);
  };

  const toggleComplete = (id) => {
    const task = TASKS.find((t) => t.id === id);
    setAmount(id, progress[id] >= task.target ? 0 : task.target);
  };

  const completedCount = TASKS.filter((t) => progress[t.id] >= t.target).length;

  return (
    <div style={{ width: "100%", maxWidth: 560, margin: "0 auto" }}>
      <h1
        style={{
          fontSize: 26,
          fontWeight: 800,
          color: colors.cyan,
          textAlign: "center",
          margin: "0 0 6px",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        HOUSE DAY
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: 11,
          letterSpacing: 2.5,
          color: colors.textMuted,
          margin: "0 0 28px",
        }}
      >
        NO EQUIPMENT · RESETS DAILY
      </p>

      {/* Progress summary */}
      <div
        style={{
          background: colors.panel,
          border: `1px solid ${colors.border}`,
          borderRadius: 6,
          padding: "18px 12px",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        <div style={{ fontSize: 10, letterSpacing: 2.5, color: colors.textMuted, marginBottom: 8 }}>
          COMPLETED
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: colors.cyan, lineHeight: 1 }}>
          {completedCount} / {TASKS.length}
        </div>
      </div>

      {/* Task cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {TASKS.map((task) => {
          const value = progress[task.id] || 0;
          const done = value >= task.target;
          const pct = Math.round((value / task.target) * 100);

          return (
            <div
              key={task.id}
              style={{
                background: colors.panel,
                border: `1px solid ${colors.border}`,
                borderLeft: `3px solid ${task.color}`,
                borderRadius: 6,
                padding: "16px 18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleComplete(task.id)}
                    style={{ width: 18, height: 18, accentColor: task.color, cursor: "pointer" }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      color: done ? task.color : colors.textMain,
                      textDecoration: done ? "line-through" : "none",
                    }}
                  >
                    {task.name}
                  </span>
                </label>
                <span style={{ fontSize: 13, fontWeight: 700, color: task.color }}>
                  {value} / {task.target} {task.unit}
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: 6,
                  background: colors.divider,
                  borderRadius: 3,
                  overflow: "hidden",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${pct}%`,
                    background: task.color,
                    transition: "width 0.2s",
                  }}
                />
              </div>

              {/* Increment controls */}
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => bump(task.id, -task.step)}
                  style={btnStyle(colors.textMuted)}
                >
                  −{task.step}
                </button>
                <button onClick={() => bump(task.id, task.step)} style={btnStyle(task.color)}>
                  +{task.step}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 28,
          textAlign: "center",
          fontSize: 9,
          letterSpacing: 2,
          color: colors.textFaint,
          textTransform: "uppercase",
        }}
      >
        Break reps into sets throughout the day if needed
      </div>
    </div>
  );
}

function btnStyle(color) {
  return {
    flex: 1,
    background: "transparent",
    border: `1px solid ${color}`,
    borderRadius: 5,
    padding: "8px 0",
    fontSize: 12,
    fontWeight: 700,
    color,
    cursor: "pointer",
    fontFamily: mono,
  };
}
