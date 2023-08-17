"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Movies = ({dt}) => {
    const router=useRouter();
    // console.log(dt,"dt")
  return (
    <div onClick={()=>router.push(`/movie/${dt?.id}`)} className='w-[460px] img-container relative cursor-pointer mb-3'>
       <Image width={450} height={300}  src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt.poster_path } `} />
     <div className="absolute bottom-0 p-3 bg-slate-50/40 w-full opacity-0 hover:opacity-100  ">
        <div className='text-xl font-bold'> {dt?.title}</div>
        <div>{dt?.vote_average}</div>
       
     </div>
    </div>
  )
}

export default Movies