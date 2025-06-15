import LocaleWay from "./components/LocaleWay/LocaleWay";
import OurValues from "./components/OurValue/OurValues";
import Presentation from "./components/Presentation/Presentation";
import { ImAirplane } from "react-icons/im";

function App() {
  const cursor = ImAirplane;
  return (
    <div
      style={{ cursor: `${cursor}` }}
      className="flex flex-col items-center justify-between"
    >
      <Presentation />
      <LocaleWay />
      <OurValues />
    </div>
  );
}

export default App;
