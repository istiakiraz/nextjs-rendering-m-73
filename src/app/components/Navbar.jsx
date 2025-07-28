"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navbar() {

  const pathname = usePathname();
  console.log(pathname);
if(!pathname.includes("dashboard"))
{
  return (
    <div><nav >
          <ul className='flex justify-center gap-20 bg-gray-700 py-5'>
            <Link href='/'>         
            <li>
            Home
          </li>
            </Link>

          <Link href='/posts'>
          <li>
            Posts
          </li>
          </Link>
          <Link href='/meals'>
          <li>
            Meals
          </li>
          </Link>

          </ul>
        </nav></div>
  )
}
else{
  return <></>
}
  
}