import Link from "next/link";
import { OptionsButton } from "./OptionsButton";


export function Header() {
  return (
    <div className="flex items-center justify-around p-7">
      <Link href="/">
        <span className="text-3xl cursor-pointer">Learning.Mapper</span>
      </Link>
      <div className="flex items-center gap-4 ">
        <OptionsButton />
        |
        <button className="hover:text-stone-300 transition">
          <Link href="https://www.youtube.com/watch?v=3ITJnBBeX4E&ab_channel=LofiZone">Sobre</Link>
        </button>
      </div>
    </div >

  )
}
