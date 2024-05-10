import { SecondaryLinkButton } from "@/app/components/global/LinkButton";
import { H5 } from "@/app/components/global/Text";
import { getServerSession } from "@/lib/next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Confirmation() {
  const session = await getServerSession();
  if (!session) return redirect("/");

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white rounded-2xl py-10 px-7 flex flex-col items-center justify-center max-w-[500px] text-center gap-4">
        <Image
          src={"/image/email.png"}
          alt="Cek Email"
          width={300}
          height={300}
        />
        <H5 className="text-wrap">
          Verifikasikan email anda, silahkan cek kotak spam jika tidak melihat
          email verifikasi
        </H5>
        <SecondaryLinkButton href="/">Kembali</SecondaryLinkButton>
      </div>
    </div>
  );
}