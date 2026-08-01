import { useState } from "react";
import { mono, colors } from "../theme";
import { workouts, schedule } from "../data/workouts";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function GymMode() {
  const [activeTab, setActiveTab] = useState("UPPER A");
  const current = workouts[activeTab];

  // Checked exercises are tracked per split, keyed by exercise name.
  const [checkedMap, setCheckedMap] = useLocalStorage("gym-checked", {});
  const checked = checkedMap[activeTab] || {};

  const toggle = (name) => {
    setCheckedMap({
      ...checkedMap,
      [activeTab]: { ...checked, [name]: !checked[name] },
    });
  };

  const resetSplit = () => {
    setCheckedMap({ ...checkedMap, [activeTab]: {} });
  };

  const totalSets = current.exercises.reduce((s, e) => s + e.sets, 0);
  const totalExercises = current.exercises.length;
  const doneCount = current.exercises.filter((e) => checked[e.name]).length;

  return (
    <div style={{ width: "100%", maxWidth: 920, margin: "0 auto" }}>
      <h1
        style={{
          fontSize: 26,
          fontWeight: 800,
          color: colors.green,
          textAlign: "center",
          margin: "0 0 6px",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        GYM DAY
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
        REP RANGES · 1 MONTH · THEN BACK TO TUT
      </p>

      {/* Weekly Schedule */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 8,
          marginBottom: 28,
        }}
      >
        {schedule.map((d) => (
          <div
            key={d.day}
            style={{
              background: colors.panel,
              border: `1px solid ${d.active ? d.color : colors.border}`,
              borderRadius: 6,
              padding: "10px 4px",
              textAlign: "center",
              cursor: d.active ? "pointer" : "default",
            }}
            onClick={() => d.active && setActiveTab(d.label)}
          >
            <div style={{ fontSize: 10, letterSpacing: 1.5, color: colors.textMuted, marginBottom: 4 }}>
              {d.day}
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: d.active ? d.color : colors.textMuted }}>
              {d.label}
            </div>
            {d.sub && (
              <div style={{ fontSize: 8, letterSpacing: 1, color: colors.textFaint, marginTop: 3 }}>
                {d.sub}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: `1px solid ${colors.border}`,
          marginBottom: 24,
          flexWrap: "wrap",
        }}
      >
        {Object.keys(workouts).map((tab) => {
          const isActive = tab === activeTab;
          const tabColor = workouts[tab].color;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: isActive ? `2px solid ${tabColor}` : "2px solid transparent",
                padding: "10px 20px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                color: isActive ? tabColor : colors.textMuted,
                cursor: "pointer",
                fontFamily: mono,
                transition: "all 0.15s",
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* KPI Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          marginBottom: 24,
        }}
      >
        {[
          { label: "EXERCISES", value: totalExercises },
          { label: "TOTAL SETS", value: totalSets },
          { label: "DONE", value: `${doneCount}/${totalExercises}` },
        ].map((kpi) => (
          <div
            key={kpi.label}
            style={{
              background: colors.panel,
              border: `1px solid ${colors.border}`,
              borderRadius: 6,
              padding: "18px 12px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: 2.5,
                color: colors.textMuted,
                marginBottom: 8,
                textTransform: "uppercase",
              }}
            >
              {kpi.label}
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: current.color, lineHeight: 1 }}>
              {kpi.value}
            </div>
          </div>
        ))}
      </div>

      {/* Exercise Checklist */}
      <div
        style={{
          background: colors.panel,
          border: `1px solid ${colors.border}`,
          borderLeft: `3px solid ${current.color}`,
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        {current.exercises.map((ex, i) => {
          const done = !!checked[ex.name];
          return (
            <label
              key={ex.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                borderBottom: i < current.exercises.length - 1 ? `1px solid ${colors.divider}` : "none",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => toggle(ex.name)}
                  style={{ width: 18, height: 18, accentColor: current.color, cursor: "pointer", flexShrink: 0 }}
                />
                <span style={{ fontSize: 12, fontWeight: 700, color: current.color, minWidth: 24 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: done ? colors.textMuted : colors.textMain,
                    textDecoration: done ? "line-through" : "none",
                  }}
                >
                  {ex.name}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: current.color }}>
                  {ex.sets}×{ex.reps}
                </span>
              </div>
            </label>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <button
          onClick={resetSplit}
          style={{
            background: "transparent",
            border: `1px solid ${colors.border}`,
            borderRadius: 5,
            padding: "8px 20px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.5,
            color: colors.textMuted,
            cursor: "pointer",
            fontFamily: mono,
          }}
        >
          RESET {activeTab} CHECKLIST
        </button>
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
        Consult a qualified professional before modifying training protocols
      </div>
    </div>
  );
}
