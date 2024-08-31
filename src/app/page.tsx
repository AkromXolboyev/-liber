import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
        <div className='w-[500px] bg-cyan-300 justify-between p-5 '>
            <Link href={"/about"}>about</Link>
            <Link href={"/blog"}>blog</Link>
            <Link href={"/news"}>news</Link>
        </div>
       
    </div>
  );
}
