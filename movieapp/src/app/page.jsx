import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({searchParams}) => {
  const res=await fetch(`https://api.themoviedb.org/3/${searchParams.genre? "movie/" + searchParams.genre : "trending/all/day"}?api_key=2b9b1b9f1c0919c4530fe2f420485043&language=en-US&page=1`,
  {next:{revalidate:10000}}
  )
  const data=await res.json();
  // console.log(data,"data")

  return (
    <div className='flex flex-wrap items-center gap-2 justify-center'>
            {
              data?.results?.map((dt,i)=>(
                <Movies dt={dt} key={i} />
              ))
            }

    </div>
  )
}

export default Page