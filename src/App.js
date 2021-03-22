import './App.css'
import {useState, useEffect} from "react"
import LoadingMask from "./components/LoadingMask"
import Hotel from "./components/Hotel"

const App = () => {

  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const response = await fetch("api/hotels")
    const data = await response.json()
    setHotels(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Hotels</h1>
      {
        loading
        ? <LoadingMask />
        : hotels.map((hotel, index) =>
                    <Hotel hotel={hotel}
                           key={index}               
                    />)
      }      
    </div>
  )
}

export default App
