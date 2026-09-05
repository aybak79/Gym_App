import { useState } from "react";
import { mono, colors } from "../theme";
import { sixMonthProgram } from "../data/sixMonthProgram";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function SixMonthMode() {
  const [activePhase, setActivePhase] = useState("PHASE 1");
  const [activeDay, setActiveDay] = useState("DAY 1");
  const phase = sixMonthProgram[activePhase];
  const currentDay = phase.days[activeDay];

  const [checkedMap, setCheckedMap] = useLocalStorage("sixmonth-checked", {});
  const comboKey = `${activePhase}::${activeDay}`;
  const checked = checkedMap[comboKey] || {};

  const toggle = (name) => {
    setCheckedMap({
      ...checkedMap,
      [comboKey]: { ...checked, [name]: !checked[name] },
    });
  };

  const resetDay = () => {
    setCheckedMap({ ...checkedMap, [comboKey]: {} });
  };

  const phaseKeys = Object.keys(sixMonthProgram);
  const dayKeys = Object.keys(phase.days);
  const totalExercises = currentDay.exercises.length;
  const doneCount = currentDay.exercises.filter((e) => checked[e.name]).length;

  return (
    <div style={{ width: "100%", maxWidth: 920, margin: "0 auto" }}>
      <h1
        style={{
          fontSize: 26,
          fontWeight: 800,
          color: colors.purple,
          textAlign: "center",
          margin: "0 0 6px",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        6 Month Training Program
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
        PROGRESSIVE OVERLOAD · 3 PHASES · 24 WEEKS
      </p>

      {/* Phase Tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: `1px solid ${colors.border}`,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        {phaseKeys.map((p) => {
          const isActive = p === activePhase;
          return (
            <button
              key={p}
              onClick={() => {
                setActivePhase(p);
                setActiveDay("DAY 1");
              }}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: isActive ? `2px solid ${colors.purple}` : "2px solid transparent",
                padding: "10px 20px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                color: isActive ? colors.purple : colors.textMuted,
                cursor: "pointer",
                fontFamily: mono,
                transition: "all 0.15s",
              }}
            >
              {p} — {sixMonthProgram[p].label}
            </button>
          );
        })}
      </div>

      {/* Phase Overview */}
      <div
        style={{
          background: colors.panel,
          border: `1px solid ${colors.border}`,
          borderLeft: `3px solid ${colors.purple}`,
          borderRadius: 6,
          padding: "14px 18px",
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 10, letterSpacing: 1.5, color: colors.purple, fontWeight: 700, marginBottom: 10 }}>
          {phase.weeks}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
          {[
            { label: "REP RANGE", value: phase.params.reps },
            { label: "REST", value: phase.params.rest },
            { label: "TEMPO", value: phase.params.tempo },
            { label: "RIR", value: phase.params.rir },
            { label: "TUT", value: phase.params.tut },
          ].map((kpi) => (
            <div
              key={kpi.label}
              style={{
                background: colors.bg,
                border: `1px solid ${colors.border}`,
                borderRadius: 6,
                padding: "10px 6px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 8, letterSpacing: 1.5, color: colors.textMuted, marginBottom: 6 }}>
                {kpi.label}
              </div>
              <div style={{ fontSize: 12, fontWeight: 800, color: colors.purple, lineHeight: 1.2 }}>{kpi.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Deload Callout */}
      <div
        style={{
          background: colors.panel,
          border: `1px solid ${colors.border}`,
          borderLeft: `3px solid ${colors.red}`,
          borderRadius: 6,
          padding: "14px 18px",
          marginBottom: 24,
        }}
      >
        <div style={{ fontSize: 10, letterSpacing: 1.5, color: colors.red, fontWeight: 700, marginBottom: 6 }}>
          ⚠ NEXT DELOAD — {phase.deload.week}
        </div>
        <div style={{ fontSize: 11, color: colors.textMuted, lineHeight: 1.7 }}>
          {phase.deload.sets} sets · {phase.deload.load} · tempo {phase.deload.tempo} · RIR {phase.deload.rir}
        </div>
        <div style={{ fontSize: 10, color: colors.textFaint, marginTop: 6 }}>{phase.deload.note}</div>
      </div>

      {/* Day Tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", borderBottom: `1px solid ${colors.border}`, marginBottom: 24 }}>
        {dayKeys.map((d) => {
          const isActive = d === activeDay;
          return (
            <button
              key={d}
              onClick={() => setActiveDay(d)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: isActive ? `2px solid ${colors.purple}` : "2px solid transparent",
                padding: "10px 16px",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1.5,
                color: isActive ? colors.purple : colors.textMuted,
                cursor: "pointer",
                fontFamily: mono,
                transition: "all 0.15s",
              }}
            >
              {d} · {phase.days[d].label}
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
          { label: "PHASE", value: `${phaseKeys.indexOf(activePhase) + 1}/${phaseKeys.length}` },
          { label: "EXERCISES", value: totalExercises },
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
            <div style={{ fontSize: 32, fontWeight: 800, color: colors.purple, lineHeight: 1 }}>{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Exercise Checklist */}
      <div
        style={{
          background: colors.panel,
          border: `1px solid ${colors.border}`,
          borderLeft: `3px solid ${colors.purple}`,
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        {currentDay.exercises.map((ex, i) => {
          const done = !!checked[ex.name];
          return (
            <label
              key={ex.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                borderBottom: i < currentDay.exercises.length - 1 ? `1px solid ${colors.divider}` : "none",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => toggle(ex.name)}
                  style={{ width: 18, height: 18, accentColor: colors.purple, cursor: "pointer", flexShrink: 0 }}
                />
                <span style={{ fontSize: 12, fontWeight: 700, color: colors.purple, minWidth: 24 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
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
                  <span style={{ fontSize: 9, color: colors.textFaint, marginTop: 2 }}>
                    {ex.rest} · {ex.tempo} · RIR {ex.rir}
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: colors.purple }}>
                  {ex.sets}×{ex.reps}
                </span>
              </div>
            </label>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <button
          onClick={resetDay}
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
          RESET {activeDay} CHECKLIST
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
