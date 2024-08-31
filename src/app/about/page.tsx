import React from 'react';
import Link from 'next/link';

const About = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container mx-auto max-w-screen-xl'>
      <div className='w-full p-5 gap-5 flex flex-wrap bg-slate-100'>
        <Link href="/about" className='p-5 bg-slate-200'>
          Аудиокитоб
        </Link>
        <Link href="/blog" className='p-5 bg-slate-200'>
          Электрон китоблар
        </Link>
        <Link href="/news" className='p-5 bg-slate-200'>
          Босма китоблар
        </Link>
        <Link href="/audio" className='p-5 bg-slate-200'>
          Контакт
        </Link>
        <Link href="/contact" className='p-5 bg-slate-200'>
          Биз хақимизда
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default About;
