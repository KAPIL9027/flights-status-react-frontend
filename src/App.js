import {useState,useEffect} from 'react'
import './App.css';
import FlightCard from './components/FlightCard';
import Modal from './components/Modal';
function App() {

  const [flights,setFlights] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [selectedFlightNumber,setSelectedFlightNumber] = useState("");
  const flightsApiUrl = process.env.REACT_APP_FLIGHTS_API_URL;
  useEffect(()=>{
    getFlights();
  },[])

  const getFlights = async ()=>{
    
    const response = await fetch(flightsApiUrl);
    const flightsData = await response.json();
    setFlights(flightsData)
  }
  return (
    <div className="App container">
      <h1 className="header"> Flight Status System</h1>
      {
        flights && flights?.map((flight,idx)=>{
          return <FlightCard key={`${flight?.number}-${idx}`} flight={flight} setSelectedFlightNumber={setSelectedFlightNumber} setIsModalVisible={setIsModalVisible}/>
        })
      }
      {isModalVisible && <Modal flightNumber={selectedFlightNumber} setIsModalVisible={setIsModalVisible}/>}
      
    </div>
  );
}

export default App;
