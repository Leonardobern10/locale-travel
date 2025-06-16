import LocaleWay from "./components/LocaleWay/LocaleWay";
import OurValues from "./components/OurValue/OurValues";
import Presentation from "./components/Presentation/Presentation";

import WeOffer from "./components/WeOffer/WeOffer";

function App() {
  return (
    <div className="flex flex-col items-center justify-between">
      <Presentation />
      <LocaleWay />
      <OurValues />
      <WeOffer />
    </div>
  );
}

export default App;
