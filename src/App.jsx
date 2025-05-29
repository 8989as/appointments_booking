import Navbar from "./components/navbar/Navbar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Carousel from "./components/Carousel/Carousel"
import Banner from "./components/Banner/Banner"
import ScheduleForm from "./components/ScheduleForm/ScheduleForm"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Carousel />
      <ScheduleForm />
    </div>
  )
}

export default App
