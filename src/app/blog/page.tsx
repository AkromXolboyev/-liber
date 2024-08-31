import React from 'react'
import Link from 'next/link'
const Blog = () => {
  return (
    <div>
       <div className='flex gap-5 p-5 w-[1440px] container'>
            <Link href={"/about"} className='p-5 bg-slate-200'>bosh sahifa</Link>
            <h1 className='bg-slate-200 p-5'>audio kitoblar</h1>
        </div>
    </div>
  )
}

export default Blog