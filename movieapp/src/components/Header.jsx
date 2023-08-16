

import {HiSearch} from 'react-icons/hi'
import MenuItem from './MenuItem'
import ThemeCom from './ThemeCom'

const Header = () => {


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
    if(e.key==="Enter" && search.lenght >=3){
        router.push(`/search/${search}`)
    }

 }

  return (
    <div className='flex items-center gap-7   h-20 p-5'>
        <div className='bg-gray-800 p-3 text-2xl rounded-lg font-bold text-white '>Movie</div>
        <div className='flex flex-1  items-center gap-2  rounded-lg  border p-3 '>
            <input  className='outline-none bg-transparent  flex-1' type="text" placeholder='Search..' />
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