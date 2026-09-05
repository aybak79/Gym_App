import { mono, colors } from "../theme";

const items = [
  { key: "HOUSE", label: "HOUSE WORKOUT", color: colors.cyan },
  { key: "GYM", label: "QUICK WORKOUTS", color: colors.green },
  { key: "SIXMONTH", label: "6 MONTH PROGRAM", color: colors.purple },
  { key: "CARDIO", label: "CARDIO", color: colors.amber },
];

export default function TopNav({ active, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 6,
        marginBottom: 24,
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            style={{
              background: isActive ? `${item.color}1f` : "transparent",
              border: `1px solid ${isActive ? item.color : colors.border}`,
              borderRadius: 5,
              padding: "7px 16px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              color: isActive ? item.color : colors.textMuted,
              cursor: "pointer",
              fontFamily: mono,
              transition: "all 0.15s",
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
