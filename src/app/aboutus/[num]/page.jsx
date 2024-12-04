"use client"
import React from 'react'
import { useParams } from 'next/navigation'
const page = () => {
    const {num} = useParams();
  return (
    <div>page no : {num}</div>
  )
}

export default page