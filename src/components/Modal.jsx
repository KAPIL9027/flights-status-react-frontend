import {useEffect, useState} from 'react'
import Toast from './Toast'

const Modal = ({flightNumber,setIsModalVisible}) => {
  const [email,setEmail] = useState("")
  const [toastVisible,setToastVisible] = useState(false)
  const [success,setSuccess] = useState(false)
  const subscribe = async ()=>{
    const requestBody = {
     email: email,
     flightNumber: flightNumber
 };
 const response = await fetch(`${process.env.REACT_APP_FLIGHTS_API_URL}/subscribe`,{
   method: 'POST',
   headers:{
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(requestBody)
 });

 const data = await response.json();
  if(data.id){
    setSuccess(true)
  }
  else
  {
    setSuccess(false)
  }
  setToastVisible(true)
 }
 useEffect(()=>{
  setTimeout(()=>{
    setToastVisible(false)
  },50000)
 },[toastVisible])

  return (
    <div className="modal">
      { toastVisible && <Toast success={success} flightNumber={flightNumber}/>}
      <span className="close-btn" onClick={(event)=>{
      setIsModalVisible(false)
    }}>X</span>
      <div className="box">
        <div className="form-group">
        <label htmlFor="email" className="box-text">Enter your email to get updates for {flightNumber} flight.</label>
        <input placeholder={"test@example.com"} type="email" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        
        <button className="get-updates-btn" onClick={subscribe}>Submit</button>
      </div>
    </div>
  )
}

export default Modal
