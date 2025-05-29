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
      <div className="container-fluid px-0">
        <main className="min-vh-100">
          <section className="py-5">
            <Banner darkMode={darkMode} />
          </section>
          <section className="py-5">
            <Carousel darkMode={darkMode} />
          </section>
          <section className="py-5">
            <div className="container">
              <ScheduleForm darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </section>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App
