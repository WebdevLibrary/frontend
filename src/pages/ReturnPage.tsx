// @ts-nocheck


import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


export default function BorrowPage() {
  const [userName, setUserName] = useState("")
  const [userID, setUserID] = useState()
 
  //const [bookQR, setBookQR] = useState("")
  const [isBooked, setIsBooked] = useState(false)
  const params = useParams() 
  //console.log("params= ", params.qr)

  const qrr = params.qr


 
  
  async function handleSubmit(e)  {
    e.preventDefault()
    console.log("USERNAME: ",userName)

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React PUT Request Example' })
    };
    const requestOptions2 = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({ title: 'React PUT Request Example' })
    };
    //console.log(userName)

    const res = await fetch(`/users/byname/${userName}`, requestOptions2)
    const data = await res.json()
    console.log('fetched data is 1: ', data[0].id)

    const res1 = await fetch(`/api/NOTbook2user/${data[0].id}/${qrr}`, requestOptions)
    const data1 = await res1.json()
    console.log('fetched data is 2: ', data1)

    setIsBooked(true)

  }


  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen border border-sky-500 p-1 text-[30px] bg-cyan-900'>
      Enter your name:

      
      <form onSubmit={handleSubmit}>

        <input 
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
          placeholder="Input your name..." 
          type="text" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)}         
        />
        <button 
          className='border-2 bg-green-500 rounded-xl mt-2'            
          > 
          Zurückgeben 
        </button>

      </form>     
      
      { isBooked && (  
        <div className=''>The user "{userName}" has returned the book with the QR code "{qrr}"</div>
      )}

    </div>
  )
}

