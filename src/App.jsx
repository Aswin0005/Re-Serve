import './App.css';
import NavBar from './Home/NavBar';
import ViewPage from './Home/ViewPage';
import HowItWorks from './HowItWorks/HowitWorks';
import NearbyFood from './NearbyPlaces/NearbyFood';

function App() {
  return (
    <div>
      <NavBar />
      <ViewPage />
      <HowItWorks />
      <NearbyFood />
    </div>
  );
}

export default App;
