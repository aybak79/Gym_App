import { mono, colors } from "../theme";

export default function ModeSelect({ onSelect }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
      }}
    >
      <div style={{ width: "100%", maxWidth: 480 }}>
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
          GYM APP
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: 11,
            letterSpacing: 2.5,
            color: colors.textMuted,
            margin: "0 0 36px",
          }}
        >
          CHOOSE YOUR SESSION
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <button
            onClick={() => onSelect("GYM")}
            style={{
              background: colors.panel,
              border: `1px solid ${colors.border}`,
              borderLeft: `3px solid ${colors.green}`,
              borderRadius: 6,
              padding: "22px 20px",
              textAlign: "left",
              cursor: "pointer",
              fontFamily: mono,
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 800, color: colors.green, letterSpacing: 2 }}>
              GYM
            </div>
            <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 6 }}>
              Full machine split · Upper/Lower A & B
            </div>
          </button>

          <button
            onClick={() => onSelect("HOUSE")}
            style={{
              background: colors.panel,
              border: `1px solid ${colors.border}`,
              borderLeft: `3px solid ${colors.cyan}`,
              borderRadius: 6,
              padding: "22px 20px",
              textAlign: "left",
              cursor: "pointer",
              fontFamily: mono,
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 800, color: colors.cyan, letterSpacing: 2 }}>
              HOUSE
            </div>
            <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 6 }}>
              Bodyweight — 100 push-ups · 100 squats · 10 min walk
            </div>
          </button>

          <button
            onClick={() => onSelect("CARDIO")}
            style={{
              background: colors.panel,
              border: `1px solid ${colors.border}`,
              borderLeft: `3px solid ${colors.amber}`,
              borderRadius: 6,
              padding: "22px 20px",
              textAlign: "left",
              cursor: "pointer",
              fontFamily: mono,
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 800, color: colors.amber, letterSpacing: 2 }}>
              CARDIO
            </div>
            <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 6 }}>
              LISS · HIIT · Brisk Walking protocols
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
