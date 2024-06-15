import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function HealthyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/healthy-outline.png"
        alt="Healthy - A self-hosted tracker for your health, eating habits and poop behavior."
        width={900}
        height={900}
        style={{ width: 'auto', height: '3rem', borderRadius: "1rem" }} // optional
        className="md:block hidden mr-4"
      />
      <p className="text-[44px]">Healthy</p>
    </div>
  );
}