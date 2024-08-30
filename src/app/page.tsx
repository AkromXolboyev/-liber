import Image from "next/image";
export default function Home() {
  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
      itaque odit dolore consequuntur! Amet magni, nulla quo praesentium maxime
      suscipit. At dicta consequatur accusamus sequi voluptatem, expedita
      deserunt amet quam?
      <div>
        <Image
          src="/next.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
}
