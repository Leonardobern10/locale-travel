import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
     return (
          <div className="flex flex-col items-center justify-between">
               <Header />
               <Home />
               <Footer />
          </div>
     );
}

export default App;
