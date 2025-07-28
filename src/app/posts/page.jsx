import Link from 'next/link';
import React from 'react'

export const getPosts = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    return data ;
}

export default async function Posts() {

    const posts = await getPosts()

  return (
    <div>
        <div className='grid m-5 grid-cols-4 gap-4' >
            {posts.map((post)=><div className='bg-blue-500  p-10 mb-4' key={post.id}>
                <p>{post.id}</p>
               <p> {post.title}</p>
               <Link href={`/posts/${post.id}`} >
               <button className='bg-indigo-500 rounded-2xl mt-2 p-2 cursor-pointer'>
                Details 
               </button>
               </Link>

            </div>)}
        </div>
        </div>
  )
}
