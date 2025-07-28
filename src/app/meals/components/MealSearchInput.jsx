"use client"
import { usePathname, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'

export default function MealSearchInput() {

    //  const [meals, setMeals] = useState([])
    const [search , setSearch] = useState('')
    const router = useRouter()
    const pathname = usePathname()

     useEffect (()=>{
     const searchQuery = {search}
     const urlQueryParam = new URLSearchParams(searchQuery)
     const url = `${pathname}?${urlQueryParam}`
     router.push(url)
    },[search])


  return (
    <div>

         <div  className='my-10 flex justify-center  '>
        <input className='bg-white text-black mx-20 px-5 h-15' placeholder='search meal' value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

    </div>
  )
}
