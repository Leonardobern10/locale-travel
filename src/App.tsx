import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
     return (
          <div className="flex flex-col items-center justify-between">
               <Header />
               <Outlet />
               <Footer />
          </div>
     );
}

export default App;
