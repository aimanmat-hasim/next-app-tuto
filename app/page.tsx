import Image from "next/image";
import nitro from '../public/images/2025_Nitro_Default_3840x2400.jpg';

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image src={nitro} alt="nitro" fill className="object-cover" sizes="100vw"/>
    </main>
  )
}
