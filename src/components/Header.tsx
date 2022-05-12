import Link from "next/link";
import { OptionsButton } from "./OptionsButton";


export function Header() {
  return (
    <div className="flex items-center justify-around p-7">
      <Link href="/">
        <span className="text-3xl">Learning.Mapper</span>
      </Link>
      <div className="flex items-center gap-4 hover:text-slate-300">
        <OptionsButton />
        |
        <Link href="/">Sobre</Link>
      </div>
    </div>

  )
}
