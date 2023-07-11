// @ts-nocheck


import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function ReturnPage() {
  const params = useParams() 
  console.log(params)



  useEffect(() => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({ title: 'React PUT Request Example' })
  };
    fetch(`/api/NOTbook2user/${params.id}/aa12`, requestOptions).then(
      response => console.log(response)
    )
  },[])


  return (
    <div>Return a book page</div>
  )
}
