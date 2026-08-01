import { useState } from "react";
import { mono, colors } from "../theme";
import { approaches, hrZones } from "../data/cardio";

export default function CardioMode() {
  const [activeTab, setActiveTab] = useState("BRISK WALKING");
  const tabs = Object.keys(approaches);
  const current = approaches[activeTab];

  return (
    <div style={{ width: "100%", maxWidth: 920, margin: "0 auto" }}>
      <div style={{ marginBottom: 8, textAlign: "center" }}>
        <span
          style={{
            fontSize: 10,
            letterSpacing: 2.5,
            color: colors.bg,
            background: colors.green,
            padding: "3px 10px",
            borderRadius: 3,
            fontWeight: 700,
          }}
        >
          PROTOCOL
        </span>
      </div>
      <h1
        style={{
          fontSize: 26,
          fontWeight: 800,
          color: colors.green,
          textAlign: "center",
          margin: "12px 0 4px",
          letterSpacing: 3,
        }}
      >
        CARDIO PROGRAMMING
      </h1>
      <p style={{ textAlign: "center", fontSize: 11, letterSpacing: 2, color: colors.textMuted, margin: "0 0 28px" }}>
        LISS · HIIT · BRISK WALKING · MIXED APPROACH
      </p>

      {/* Scheduling Rule Callout */}
      <div
        style={{
          background: colors.panel,
          border: `1px solid ${colors.border}`,
          borderLeft: `3px solid ${colors.red}`,
          borderRadius: 6,
          padding: "14px 18px",
          marginBottom: 20,
        }}
      >
        <div style={{ fontSize: 10, letterSpacing: 1.5, color: colors.red, fontWeight: 700, marginBottom: 6 }}>
          ⚠ SCHEDULING RULE
        </div>
        <div style={{ fontSize: 11, color: colors.textMuted, lineHeight: 1.8 }}>
          Rest days are the ideal slot for all cardio. If rest days are full, do cardio post-workout. Never do
          cardio directly before resistance training without a full meal in between — glycogen depletion and CNS
          fatigue will compromise training quality. Post-workout cardio or a separate session later in the day are
          both viable alternatives.
        </div>
      </div>

      {/* HR Zone Reference */}
      <div
        style={{
          background: colors.panel,
          border: `1px solid ${colors.border}`,
          borderRadius: 6,
          padding: "16px 20px",
          marginBottom: 20,
        }}
      >
        <div style={{ fontSize: 10, letterSpacing: 2, color: colors.textMuted, marginBottom: 10, fontWeight: 700 }}>
          TARGET HEART RATE ZONES — MHR = 220 - AGE
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {hrZones.map((z) => (
            <div
              key={z.zone}
              style={{
                display: "grid",
                gridTemplateColumns: "70px 70px 1fr",
                gap: 10,
                alignItems: "center",
                padding: "5px 0",
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, color: z.color }}>{z.zone}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: colors.textMain }}>{z.range}</span>
              <span style={{ fontSize: 10, color: colors.textFaint }}>{z.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", borderBottom: `1px solid ${colors.border}`, marginBottom: 24 }}>
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          const c = approaches[tab].color;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: isActive ? `2px solid ${c}` : "2px solid transparent",
                padding: "10px 16px",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1.5,
                color: isActive ? c : colors.textMuted,
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 24 }}>
        {[
          { label: "HR ZONE", value: current.zone },
          { label: "TARGET HR", value: current.hrRange },
          { label: "DURATION", value: current.duration },
          { label: "FREQUENCY", value: current.frequency },
        ].map((kpi) => (
          <div
            key={kpi.label}
            style={{
              background: colors.panel,
              border: `1px solid ${colors.border}`,
              borderRadius: 6,
              padding: "14px 10px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 9, letterSpacing: 2, color: colors.textMuted, marginBottom: 6 }}>{kpi.label}</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: current.color, lineHeight: 1.2 }}>{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div
        style={{
          background: colors.panel,
          border: `1px solid ${colors.border}`,
          borderLeft: `3px solid ${current.color}`,
          borderRadius: 6,
          padding: "14px 18px",
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 10, letterSpacing: 1.5, color: current.color, fontWeight: 700, marginBottom: 6 }}>
          {current.icon} {activeTab}
        </div>
        <div style={{ fontSize: 11, color: colors.textMuted, lineHeight: 1.7 }}>{current.description}</div>
        <div style={{ fontSize: 10, color: colors.textFaint, marginTop: 8 }}>EQUIPMENT: {current.equipment}</div>
      </div>

      {/* HIIT Protocols Table */}
      {current.protocols && (
        <div
          style={{
            background: colors.panel,
            border: `1px solid ${colors.border}`,
            borderRadius: 6,
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          <div style={{ padding: "12px 18px", borderBottom: `1px solid ${colors.border}` }}>
            <span style={{ fontSize: 10, letterSpacing: 2, color: colors.red, fontWeight: 700 }}>
              INTERVAL PROTOCOLS
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 70px 70px 70px 80px 1fr",
              gap: 8,
              padding: "8px 18px",
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            <span style={{ fontSize: 8, color: colors.textFaint, letterSpacing: 1 }}>PROTOCOL</span>
            <span style={{ fontSize: 8, color: colors.textFaint, letterSpacing: 1 }}>WORK</span>
            <span style={{ fontSize: 8, color: colors.textFaint, letterSpacing: 1 }}>REST</span>
            <span style={{ fontSize: 8, color: colors.textFaint, letterSpacing: 1 }}>ROUNDS</span>
            <span style={{ fontSize: 8, color: colors.textFaint, letterSpacing: 1 }}>TOTAL</span>
            <span style={{ fontSize: 8, color: colors.textFaint, letterSpacing: 1, textAlign: "right" }}>LEVEL</span>
          </div>
          {current.protocols.map((p, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 70px 70px 70px 80px 1fr",
                gap: 8,
                alignItems: "center",
                padding: "10px 18px",
                borderBottom: i < current.protocols.length - 1 ? `1px solid ${colors.divider}` : "none",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: colors.textMain }}>{p.name}</span>
              <span style={{ fontSize: 11, color: colors.green }}>{p.work}</span>
              <span style={{ fontSize: 11, color: colors.textMuted }}>{p.rest}</span>
              <span style={{ fontSize: 11, color: colors.textMain }}>{p.rounds}</span>
              <span style={{ fontSize: 11, color: colors.cyan }}>{p.total}</span>
              <span
                style={{
                  fontSize: 9,
                  letterSpacing: 1,
                  fontWeight: 700,
                  color:
                    p.level === "ADVANCED" ? colors.red : p.level === "INTERMEDIATE" ? colors.amber : colors.green,
                  background:
                    p.level === "ADVANCED"
                      ? "rgba(248,113,113,0.12)"
                      : p.level === "INTERMEDIATE"
                      ? "rgba(251,191,36,0.12)"
                      : "rgba(0,230,138,0.12)",
                  padding: "2px 8px",
                  borderRadius: 3,
                  textAlign: "center",
                  justifySelf: "end",
                }}
              >
                {p.level}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Mixed Protocol Week Sample */}
      {current.weekSample && (
        <div
          style={{
            background: colors.panel,
            border: `1px solid ${colors.border}`,
            borderRadius: 6,
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          <div style={{ padding: "12px 18px", borderBottom: `1px solid ${colors.border}` }}>
            <span style={{ fontSize: 10, letterSpacing: 2, color: colors.amber, fontWeight: 700 }}>SAMPLE WEEK</span>
          </div>
          {current.weekSample.map((d, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 18px",
                borderBottom: i < current.weekSample.length - 1 ? `1px solid ${colors.divider}` : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: colors.textMuted, minWidth: 32 }}>{d.day}</span>
                <span style={{ fontSize: 12, color: colors.textMain }}>{d.session}</span>
              </div>
              <span
                style={{
                  fontSize: 9,
                  letterSpacing: 1,
                  fontWeight: 700,
                  color: d.color,
                  background: `${d.color}1f`,
                  padding: "2px 8px",
                  borderRadius: 3,
                }}
              >
                {d.type.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Cues & Notes */}
      {current.notes && (
        <div
          style={{
            background: colors.panel,
            border: `1px solid ${colors.border}`,
            borderLeft: `3px solid ${current.color}`,
            borderRadius: 6,
            padding: "14px 18px",
            marginBottom: 16,
          }}
        >
          <div style={{ fontSize: 10, letterSpacing: 1.5, color: current.color, fontWeight: 700, marginBottom: 8 }}>
            EXECUTION CUES
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {current.notes.map((note, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: current.color, fontSize: 10, marginTop: 2, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 11, color: colors.textMuted, lineHeight: 1.6 }}>{note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

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
