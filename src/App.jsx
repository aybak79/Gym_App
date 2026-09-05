import { useLocalStorage } from "./hooks/useLocalStorage";
import { mono, colors } from "./theme";
import ModeSelect from "./components/ModeSelect";
import TopNav from "./components/TopNav";
import HouseMode from "./components/HouseMode";
import GymMode from "./components/GymMode";
import SixMonthMode from "./components/SixMonthMode";
import CardioMode from "./components/CardioMode";

export default function App() {
  const [mode, setMode] = useLocalStorage("active-mode", null);

  return (
    <div
      style={{
        background: colors.bg,
        minHeight: "100vh",
        padding: "32px 16px",
        fontFamily: mono,
        color: colors.textMain,
      }}
    >
      {mode ? (
        <>
          <TopNav active={mode} onChange={setMode} />
          {mode === "HOUSE" && <HouseMode />}
          {mode === "GYM" && <GymMode />}
          {mode === "SIXMONTH" && <SixMonthMode />}
          {mode === "CARDIO" && <CardioMode />}
        </>
      ) : (
        <ModeSelect onSelect={setMode} />
      )}
    </div>
  );
}
