"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'

const Tabs = () => {
 const searchParams=useSearchParams()
 const genre= searchParams.get('genre')
//  console.log(genre,"genre")

const tabs=[
    {
        name:"Most Popular",
        url:"popular"
    },
 

    {
        name:"Coming Soon",
        url:"upcoming"
    },
]





  return (
    <div className='p-5 m-5 bg-gray-100 dark:bg-gray-600 flex items-center gap-7 justify-center' >
     {
        tabs.map((tab,i)=>(
            <Link className={`cursor:pointer hover:opacity-70 transition-opacity ${tab.url ===genre ? "text-green-400 underline font-size-lg underline-offset-1" : "" } `} href={`/?genre=${tab.url}`}>{tab.name} </Link>
        ))
     }


    </div>
  )
}

export default Tabs