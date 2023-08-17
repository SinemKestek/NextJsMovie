import React from 'react'
import Movies from '@/components/Movies';
const page = async({params}) => {
    const search=params.search;
    const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2b9b1b9f1c0919c4530fe2f420485043&query=${search}&language=en-US&include_adult=false`)
    const data=await res.json();
    // console.log(search,"search")
    console.log(data?.results,"data")
  return (
    <div>
   {
    !data?.results ? 
    <div>Sorry we didnt found it..</div> :
       <div className='flex items-center flex-wrap gap-2 '>{
        data?.results?.map((dt,i)=>(
            <Movies dt={dt} key={i} />
          ))}</div>
       
   
    
    }
    </div>
  )
}

export default page