import React from "react";
import Image from "next/image";
export const Header = () => {
  return (
    <div className="p-[30px] bg-slate-100  font-bold text-[20px] container">
      <div className="flex gap-5">
        <Image
          src="/next.svg"
          alt=" Logo"
          className="dark:invert"
          width={165}
          height={45}
          priority
        />
        <button className="p-4 border-2 border-black-50 rounded-lg flex items-center gap-2">
          <Image
            src="/ruknlar.svg"
            alt=" Logo"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
          Рукнлар
        </button>
        <div>
          <input
            type="text"
            placeholder="Қидириш"
            className="bg-slate-200 h-[48] w-[555px] p-5"
          />
          {/* <Image 
          src="/search.svg"
          alt=" Logo"
          className="dark:invert"
          width={24}
          height={24}
          priority
           />  */}
        </div>
        <button>
          <Image
           src="/enter.svg"
           alt=" Logo"
           className="p-5 w-[151] h-[48]"
           width={151}
           height={49}
           priority
          />
        </button>
      </div>
    </div>
  );
};
