import React from "react";

const FlightCard = ({flight,setIsModalVisible,setSelectedFlightNumber}) => {
  return (
    <div className="card-container">
      <div className="card-media">
        <img className="card-image" src="/static/images/logo.png" alt={"1"} />
      </div>
      <div className="card-content">
        <div className="col1">
        <div className="detail">
          <p className="content-heading">Flight Number:</p>
          <p id="number" className="content-value">{flight?.flightNumber}</p>
        </div>
        <div className="detail">
          <p className="content-heading">Flight Status:</p>
          <p className={`content-value ${flight?.flight_status === 'on time' ? 'green' : 'red'} `}>{flight?.flight_status}</p>
        </div>
        <button className="get-updates-btn" onClick={()=>{
          setIsModalVisible(true);
          setSelectedFlightNumber(flight?.flightNumber);
        }}>
          Get Updates
        </button>
        </div>
        <div className="col2">
        <div className="detail">
          <p className="content-heading">Gate:</p>
          <p className="content-value">{flight?.gate}</p>
        </div>
        <div className="detail">
          <p className="content-heading">Departure Time:</p>
          <p className="content-value">{flight?.departure_time}</p>
        </div>
        <div className="detail">
          <p className="content-heading">Arrival Time:</p>
          <p className="content-value">{flight?.arrival_time}</p>
        </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default FlightCard;
