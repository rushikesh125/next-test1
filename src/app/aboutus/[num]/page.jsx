"use client"
import React from 'react'
import { useParams } from 'next/navigation'
const Page = () => {
    const {num} = useParams();
  return (
    <div>Page no : {num}</div>
  )
}

export default Page