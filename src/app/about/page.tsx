import React from 'react'
import Link from 'next/link'
const AboutLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='container w-1440px mx-auto'>
        <div className='w-[1450px] p-5 gap-[20px] flex '>
            <Link href={"/about"} className='p-5 bg-slate-200'>Аудиокитоб</Link>
            <Link href={"/blog"} className='p-5 bg-slate-200'>Электрон китоблар</Link>
            <Link href={"/news"} className='p-5 bg-slate-200'>Босма китоблар</Link>
            <Link href={"/audio"} className='p-5 bg-slate-200'>Контакт</Link>
            <Link href={"/contact"} className='p-5 bg-slate-200'>Биз хақимизда</Link>
        </div>
        <div>{children}</div>
    </div>
  )
}

export default AboutLayout