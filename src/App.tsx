import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Invite from './components/Invite/Invite';
import LocaleWay from './components/LocaleWay/LocaleWay';
import OurValues from './components/OurValue/OurValues';
import Presentation from './components/Presentation/Presentation';
import ReadAbout from './components/ReadAbout/ReadAbout';
import WeDo from './components/WeDo/WeDo';

import WeOffer from './components/WeOffer/WeOffer';

function App() {
     return (
          <div className="flex flex-col items-center justify-between">
               <Presentation />
               <LocaleWay />
               <OurValues />
               <WeOffer />
               <WeDo />
               <ReadAbout />
               <ContactUs />
               <Invite />
               <Footer />
          </div>
     );
}

export default App;
