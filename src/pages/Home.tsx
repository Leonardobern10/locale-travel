import ContactUs from 'src/components/ContactUs/ContactUs';
import Invite from 'src/components/Invite/Invite';
import LocaleWay from 'src/components/LocaleWay/LocaleWay';
import OurValues from 'src/components/OurValue/OurValues';
import Presentation from 'src/components/Presentation/Presentation';
import ReadAbout from 'src/components/ReadAbout/ReadAbout';
import WeDo from 'src/components/WeDo/WeDo';
import WeOffer from 'src/components/WeOffer/WeOffer';

export default function Home() {
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
          </div>
     );
}
