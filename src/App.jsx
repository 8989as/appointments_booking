import { useState } from 'react';
import Navbar from "./components/navbar/Navbar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Carousel from "./components/Carousel/Carousel"
import Banner from "./components/Banner/Banner"
import ScheduleForm from "./components/ScheduleForm/ScheduleForm"
import Footer from './components/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Banner darkMode={darkMode} />
      <Carousel darkMode={darkMode} />
      <ScheduleForm darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
