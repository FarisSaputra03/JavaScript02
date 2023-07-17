import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="app bg-blue-500 text-white text-lg font-bold text-center">
      Selamat Datang Di Home
    </div>
    <Image  src="/img/toko.png" alt="latihan2" width={500} height={300}/>
    </>
  )
}
