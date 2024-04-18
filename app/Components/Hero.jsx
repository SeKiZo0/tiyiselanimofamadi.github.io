'use client'
import React from 'react'

function Hero() {

    const myName = "Tiyiselani Mofamadi";
    const splitName = myName.split("");
  return (
    <div className="flex min-h-screen items-center justify-between p-26">
        <div>{splitName.map((letter)=>{
        <h1 className='bg-white'>
{letter}
        </h1>
    })}</div>
        hey hey
    </div>
  )
}

export default Hero