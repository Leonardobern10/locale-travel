import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

function App() {
     return (
          <div className="flex flex-col items-center justify-between">
               <Home />
               <Footer />
               <ToastContainer />
          </div>
     );
}

export default App;
