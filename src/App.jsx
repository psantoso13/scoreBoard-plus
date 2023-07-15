import ScoreBoard from "./Container/ScoreBoard"
import CountdownTimer from "./Container/Countdown"
import AirHorn from "./Container/AirHorn"


function App() {
  return (
    <div className="w-screen md:w-fit md:h-fit m-auto mt-2 mb-2 bg-slate-800 rounded-lg">
      <CountdownTimer />
      <ScoreBoard />
      <AirHorn />
    </div>
  )
}

export default App