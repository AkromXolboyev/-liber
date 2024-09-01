 import Image from "next/image";
 import Link from "next/link";
 export default function Home() {
   return (
      
      <div>
      <div className="w-[1400px] container p-5 gap-5 flex flex-wrap bg-slate-100">
      <div>
        <Link href="/about" className="p-5 bg-slate-100">
          Аудиокитоб
        </Link>
      </div>
      <div>
        <Link href="/blog" className="p-5 bg-slate-100">
          Электрон китоблар
        </Link>
      </div>
      <div>
        <Link href="/news" className="p-5 bg-slate-100">
          Босма китоблар
        </Link>
      </div>
      <div>
        <Link href="/audio" className="p-5 bg-slate-100">
          Контакт
        </Link>
      </div>
      <div>
        <Link href="/contact" className="p-5 bg-slate-100">
          Биз хақимизда
        </Link>
      </div>
    </div>
    <div className="container mt-6 bg-blue-100 flex justify-between items-center">
      <div className="flex justify-between">
        <div>
          <h1 className="pt-[30px]  font-bold text-[24px] ">
            Кўп ўқилаётганлар
          </h1>
          <Image
            src="/girl.svg"
            alt=" girl"
            className="dark:invert pt-[80px]"
            width={200}
            height={100}
            priority
          />
        </div>
        <div className="flex pl-[90px] gap-8">
          <div className="m-auto">
            <Image
              src="/recent1.svg"
              alt=" girl"
              className="dark:invert "
              width={200}
              height={100}
              priority
            />
            <h1 className="text-center">1984</h1>
          </div>
          <div className="m-auto">
            <Image
              src="/recent2.svg"
              alt=" girl"
              className="dark:invert "
              width={200}
              height={100}
              priority
            />
            <h1 className="text-center">1984</h1>
          </div>
          <div className="m-auto">
            <Image
              src="/recent3.svg"
              alt=" girl"
              className="dark:invert "
              width={200}
              height={100}
              priority
            />
            <h1 className="text-center">1984</h1>
          </div>
        </div>
      </div>

      <div className="w-[261px] h-[351px] bg-blue-600 items-center rounded-xl">
        <h1 className="w-[199px] m-auto mt-10 text-center text-[24px] font-bold text-white">
          Китоб ўқишни ёқтирасизми?
        </h1>
        <p className="w-[215px] m-auto text-center text-white pt-5">
          Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
        </p>
        <button className="w-[210px] bg-white mt-[50px]   items-center flex gap-3 mx-auto justify-center h-[48px] font-bold rounded-xl">
          <Image
            src={"/love.svg"}
            alt="icon"
            className="dark:invert"
            width={20}
            height={20}
            priority
          />
          Обуна бўлиш
        </button>
      </div>
    </div>
    <div className="container mt-14 flex justify-between">
      <div className="w-[392px] flex bg-slate-200 gap-[16px]">
        <Image
          src={"/icon1.svg"}
          alt="icon"
          className="dark:invert ml-3"
          width={48}
          height={48}
          priority
        />
        <div>
          <h1 className="font-bold pb-2">Тезкор етказиш</h1>
          <p className="text-[15px] font-light text-[#AAAAAA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
      <div className="w-[392px] flex bg-slate-200 gap-[16px]">
        <Image
          src={"/icon1.svg"}
          alt="icon"
          className="dark:invert ml-3"
          width={48}
          height={48}
          priority
        />
        <div>
          <h1 className="font-bold pb-2">Тезкор етказиш</h1>
          <p className="text-[15px] font-light text-[#AAAAAA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
      <div className="w-[392px] flex bg-slate-200 gap-[16px]">
        <Image
          src={"/icon1.svg"}
          alt="icon"
          className="dark:invert ml-3"
          width={48}
          height={48}
          priority
        />
        <div>
          <h1 className="font-bold pb-2">Тезкор етказиш</h1>
          <p className="text-[15px] font-light text-[#AAAAAA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </div>
    <div className="container mt-[50px]">
      <h1 className="text-[32px] font-semibold">Рукнлар</h1>
      <div className="flex justify-between mt-[40px]">
        <div>
          <Image
          
            src={"/rukn1.svg"}
            alt="icon"
            className="dark:invert ml-3"
            width={200}
            height={164}
            priority
          />
        
        </div>
        <div>
          <Image
            src={"/rukn6.svg"}
            alt="icon"
            className="dark:invert ml-3"
            width={200}
            height={164}
            priority
          />
        </div>
        <div>
          <Image
            src={"/rukn3.svg"}
            alt="icon"
            className="dark:invert ml-3"
            width={200}
            height={164}
            priority
          />
        </div>
        <div>
          <Image
            src={"/rukn4.svg"}
            alt="icon"
            className="dark:invert ml-3"
            width={200}
            height={164}
            priority
          />
        </div>
        <div>
          <Image
            src={"/rukn5.svg"}
            alt="icon"
            className="dark:invert ml-3"
            width={200}
            height={164}
            priority
          />
        </div>
        <div>
          <Image
            src={"/rukn2.svg"}
            alt="icon"
            className="dark:invert ml-3"
            width={200}
            height={164}
            priority
          />
        </div>
      </div>
    </div>
  </div>
   );
 };
{/* 
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="w-[1400px] container p-5 gap-5 flex flex-wrap bg-slate-100">
        <div>
          <Link href="/about" className="p-5 bg-slate-100">
            Аудиокитоб
          </Link>
        </div>
        <div>
          <Link href="/blog" className="p-5 bg-slate-100">
            Электрон китоблар
          </Link>
        </div>
        <div>
          <Link href="/news" className="p-5 bg-slate-100">
            Босма китоблар
          </Link>
        </div>
        <div>
          <Link href="/audio" className="p-5 bg-slate-100">
            Контакт
          </Link>
        </div>
        <div>
          <Link href="/contact" className="p-5 bg-slate-100">
            Биз хақимизда
          </Link>
        </div>
      </div>
      <div className="container mt-6 bg-blue-100 flex justify-between items-center">
        <div className="flex justify-between">
          <div>
            <h1 className="pt-[30px]  font-bold text-[24px] ">
              Кўп ўқилаётганлар
            </h1>
            <Image
              src="/girl.svg"
              alt=" girl"
              className="dark:invert pt-[80px]"
              width={200}
              height={100}
              priority
            />
          </div>
          <div className="flex pl-[90px] gap-8">
            <div className="m-auto">
              <Image
                src="/recent1.svg"
                alt=" girl"
                className="dark:invert "
                width={200}
                height={100}
                priority
              />
              <h1 className="text-center">1984</h1>
            </div>
            <div className="m-auto">
              <Image
                src="/recent2.svg"
                alt=" girl"
                className="dark:invert "
                width={200}
                height={100}
                priority
              />
              <h1 className="text-center">1984</h1>
            </div>
            <div className="m-auto">
              <Image
                src="/recent3.svg"
                alt=" girl"
                className="dark:invert "
                width={200}
                height={100}
                priority
              />
              <h1 className="text-center">1984</h1>
            </div>
          </div>
        </div>

        <div className="w-[261px] h-[351px] bg-blue-600 items-center rounded-xl">
          <h1 className="w-[199px] m-auto mt-10 text-center text-[24px] font-bold text-white">
            Китоб ўқишни ёқтирасизми?
          </h1>
          <p className="w-[215px] m-auto text-center text-white pt-5">
            Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
          </p>
          <button className="w-[210px] bg-white mt-[50px]   items-center flex gap-3 mx-auto justify-center h-[48px] font-bold rounded-xl">
            <Image
              src={"/love.svg"}
              alt="icon"
              className="dark:invert"
              width={20}
              height={20}
              priority
            />
            Обуна бўлиш
          </button>
        </div>
      </div>
      <div className="container mt-14 flex justify-between">
        <div className="w-[392px] flex bg-slate-200 gap-[16px]">
          <Image
            src={"/icon1.svg"}
            alt="icon"
            className="dark:invert ml-3"
            width={48}
            height={48}
            priority
          />
          <div>
            <h1 className="font-bold pb-2">Тезкор етказиш</h1>
            <p className="text-[15px] font-light text-[#AAAAAA]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
        <div className="w-[392px] flex bg-slate-200 gap-[16px]">
          <Image
            src={"/icon1.svg"}
            alt="icon"
            className="dark:invert ml-3"
            width={48}
            height={48}
            priority
          />
          <div>
            <h1 className="font-bold pb-2">Тезкор етказиш</h1>
            <p className="text-[15px] font-light text-[#AAAAAA]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
        <div className="w-[392px] flex bg-slate-200 gap-[16px]">
          <Image
            src={"/icon1.svg"}
            alt="icon"
            className="dark:invert ml-3"
            width={48}
            height={48}
            priority
          />
          <div>
            <h1 className="font-bold pb-2">Тезкор етказиш</h1>
            <p className="text-[15px] font-light text-[#AAAAAA]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-[50px]">
        <h1 className="text-[32px] font-semibold">Рукнлар</h1>
        <div className="flex justify-between mt-[40px]">
          <div>
            <Image
            
              src={"/rukn1.svg"}
              alt="icon"
              className="dark:invert ml-3"
              width={200}
              height={164}
              priority
            />
          
          </div>
          <div>
            <Image
              src={"/rukn6.svg"}
              alt="icon"
              className="dark:invert ml-3"
              width={200}
              height={164}
              priority
            />
          </div>
          <div>
            <Image
              src={"/rukn3.svg"}
              alt="icon"
              className="dark:invert ml-3"
              width={200}
              height={164}
              priority
            />
          </div>
          <div>
            <Image
              src={"/rukn4.svg"}
              alt="icon"
              className="dark:invert ml-3"
              width={200}
              height={164}
              priority
            />
          </div>
          <div>
            <Image
              src={"/rukn5.svg"}
              alt="icon"
              className="dark:invert ml-3"
              width={200}
              height={164}
              priority
            />
          </div>
          <div>
            <Image
              src={"/rukn2.svg"}
              alt="icon"
              className="dark:invert ml-3"
              width={200}
              height={164}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; */}
