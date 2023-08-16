"use client"
import React from 'react'
import { useState,useEffect} from 'react'
import { useTheme } from 'next-themes'
import {SiDarkreader} from 'react-icons/Si'
import {MdOutlineLightMode} from 'react-icons/md'

const ThemeCom = () => {
  const [mounted, setMounted] = useState(false)
  const {systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  const themeMode=theme==="system" ? systemTheme: theme
console.log(themeMode,"themeMode")
  return (
    <div>
      {mounted &&(
        themeMode==="dark" ?
        <SiDarkreader onClick={()=>setTheme('light')} className='cursor-pointer' size={30}></SiDarkreader>:
      <MdOutlineLightMode onClick={()=>setTheme('dark')} className='cursor-pointer' size={30}></MdOutlineLightMode>
      )
      
      }
      </div>
      
  )
}

export default ThemeCom