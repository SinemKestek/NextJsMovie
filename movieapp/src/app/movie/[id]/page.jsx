import React from 'react'
import Image from 'next/image'

const getMovie= async(id)=>{
    const res=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2b9b1b9f1c0919c4530fe2f420485043
    `)
    return await res.json()
}


const Page = async ({params}) => {
    const id=params.id;
   const movieDetail=await getMovie(id)
  
  return (
    <div className='relative p-7 min-h-screen'>
        <Image style={{objectFit:'cover'}} className='p-2' fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail.poster_path } `}></Image>
       <div className="absolute ">
        <div className='d-flex flex-col overflow-auto '>
            <div className=' text-4xl  font-bold  '>{movieDetail.title}</div>
            <div className='w-1/2'>{movieDetail.overview}</div>
            <div className='my-2 border w-32 hover:bg-slate-00 hover:text-black p-2 rounded-md text-center text-lg'>Watch Movie</div>
        </div>
     </div>
   
    </div>
  )
}

export default Page