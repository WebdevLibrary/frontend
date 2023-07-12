// @ts-nocheck



import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Html5QrcodeScanner } from 'html5-qrcode'



function getName() {
  console.log("get name worked")
  fetch("/api2").then(
    response => response.json()
  ).then(
    data => {
      console.log(data.users[1])
      return data.users[1]
    }
  )   
} 



export default function App() {
  const [backendData, setBackendData] = useState([{}])
  const [userName, setUserName] = useState("no name")
  const [userID, setUserID] = useState(0)
  const [QR, setQR] = useState("aa12")
  const [scanResult, setScanResult] = useState(false)


 

  // useEffect(() => {
  //   const scanner = new Html5QrcodeScanner('reader', {
  //     qrbox: {
  //       width: 150,
  //       height: 150,
  //       disableFlip: false
  //     },
  //     fps: 5,
  //   },true)
  
  //   scanner.render(success);
  
  //   function success(result){
  //     scanner.clear()
  //     setScanResult(result)
      
  //     setQR(result.replace("http://", ""))
  //     //console.log("fdsfds:", result)
  //   }  
  // },[])
  



  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen border border-sky-500 p-1 text-[30px] bg-cyan-900'>
      
      <div className=' border-2 rounded-md border-white-400 m-3 p-1 min-w-fit min-h-fit w-80 h-96 bg-white'>
        <div className=''>
          { scanResult
            ? <div>Successfully read</div>
            : <div id='reader'></div>
          }
        </div>
     
       {/* <input 
          className='border-2 border-gray-900 w-60 h-10 rounded-xl '
          placeholder='enter qr code'
          type="text" 
          value={QR}    
          onChangeCapture={(e) => setQR(e.target.value)}     
        /> */}
        
      </div>   
      <div>Scanned QR code = {QR}</div>      
      <div>
        <button className='border-2 m-1 rounded-md hover:bg-green-500 border-blue-400 bg-zinc-200 p-1 text-xl' onClick={() => console.log("clicked")}> <Link to={{pathname: `/borrowbook/${QR}`}}>Ausleihen</Link></button>
        <button className='border-2 m-1 rounded-md hover:bg-green-500 border-blue-400 bg-zinc-200 p-1 text-xl' onClick={() => console.log("clicked")}> <Link to={{pathname: `/returnbook/${QR}`}}>Zürückgeben</Link></button>
      </div>  
      {/* <button className='border-2 m-1 rounded-md hover:bg-green-500 border-blue-400 bg-zinc-200 p-1 text-xl' onClick={handleClick}>Name: {userName}</button> */}
     
    </div>
  )
}
  




// { (typeof backendData.users === 'undefined') ? (
//   <p> Loading...</p>
// ): (
//   backendData.users.map((user,i) => 
//   <p key={i} >{user}</p>
//   )
// )}