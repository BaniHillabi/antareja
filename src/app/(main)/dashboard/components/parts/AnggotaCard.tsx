import { Person } from "@/app/components/global/Icons";
import { P } from "@/app/components/global/Text";
import Image from "next/image";
import Link from "next/link";

interface AnggotaCardProps {
  image: string;
  name: string;
  posisi: string;
  href: string;
}

export function AnggotaCard({
  image,
  name,
  posisi,
  href,
}: Readonly<AnggotaCardProps>) {
  return (
    <Link
      href={href}
      className="relative w-1/5 flex items-center justify-center hover:scale-105 transition-all duration-300"
    >
      <Image
        src={image}
        alt={`${name}'s Photo`}
        width={150}
        height={200}
        className="w-full h-[200%] object-cover rounded-3xl"
        unoptimized
      />
      <div className="absolute rounded-3xl p-5 bg-white drop-shadow-md flex items-center gap-6 -bottom-4 w-[110%]">
        <div className="p-[14px] rounded-2xl bg-primary-500 drop-shadow-glow">
          <Person />
        </div>
        <div className="block text-start">
          <P className="font-bold text-black mb-1 line-clamp-1">{name}</P>
          <P>{posisi.toUpperCase()}</P>
        </div>
      </div>
    </Link>
  );
}
