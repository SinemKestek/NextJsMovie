"use client"

import {HiSearch} from 'react-icons/hi'
import MenuItem from './MenuItem'
import ThemeCom from './ThemeCom'
import { useState } from 'react'
import { useRouter } from 'next/navigation'



const Header = () => {
    const [search,setSearch]=useState('')
    const router=useRouter();

 const menu=[
    {
        name:"About",
        url:"/about"
    },
    {
        name:"Sign In",
        url:"/login"
    }
 ]


 

 const searchFunc=(e)=>{
    if(e.key==="Enter" && search.length >=3){
        router.push(`/search/${search}`)
        setSearch('')
    }

 }

  return (
    <div className='flex items-center gap-7   h-20 p-5'>
      <div className='bg-gray-800 p-3 text-2xl rounded-lg font-bold text-white '>Movie</div>
       
        <div className='flex flex-1  items-center gap-2  rounded-lg  border p-3 '>
            <input value={search} onKeyDown={searchFunc} onChange={e=>setSearch(e.target.value)}  className='outline-none bg-transparent  flex-1' type="text" placeholder='Search..' />
        <HiSearch size={22}></HiSearch>
        </div>
        <ThemeCom/>
        <div  className='flex justify-around w-[150px]'>
        {
            menu.map((mn,i)=>(
            <MenuItem mn={mn} key={i} />
            ) )
        }
        </div>
    
    </div>
  )
}

export default Header