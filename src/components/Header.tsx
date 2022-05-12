import Link from 'next/link';
import { Menu } from '@headlessui/react'

export const Header = () => {
  return (
    <div className="bg-zinc-900 text-slate-200 flex flex-wrap justify-around items-center p-7">
      <Link href="/">
        <span className="text-3xl cursor-pointer"><span className="text-blue-700">L</span>earning.<span className="text-red-700">M</span>apper</span>
      </Link>
      <nav>
        <ul className="flex text-xl">
          <li className="ml-10 cursor-auto hover:text-blue-500 transition"><Link className="block p-3" href="/casa">Testes</Link></li>
          <li className="ml-10 cursor-auto hover:text-blue-500 transition"><Link className="block p-3 " href="/carro">Relatórios</Link></li>
          <li className="ml-10 cursor-auto hover:text-blue-500 transition"><Link className="block p-3 " href="/moto">Opções</Link></li>
        </ul>
      </nav>
      </div>
    )
}
