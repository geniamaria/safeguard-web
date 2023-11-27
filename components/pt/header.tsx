'use client'

import { useState } from "react";
import Link from 'next/link';
import { FacebookLogo, LinkedinLogo, List, TwitterLogo, X } from "@phosphor-icons/react";
import { Switch } from "@headlessui/react";
import { redirect } from 'next/navigation';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const currentPath = usePathname();

  function changeLanguage() {
    setEnabled(!enabled)
    redirect('/')
  }

  return (
    <header
      className="pr-7 bg-black h-28 flex justify-center items-center"
    >
      <section className="relative h-full flex justify-between items-center laptop:flex-row w-full">
        <div className="mt-5 ml-5">
          <Link href="/" className="flex flex-row laptop:gap-1">
            <p className="text-amber-400 border-2 border-amber-400 p-5 text-lg font-bold">Logo</p>
            <h1 className="flex flex-col text-center ml-3 mt-3">
              <span className="text-amber-400 font-semibold text-2xl">SAFEGUARD</span>
              <span className="text-white text-xs font-extralight">PRIVATE SECURITY</span>
            </h1>
          </Link>
        </div>
        <div
          className={`${menuState ? "mobile:flex bg-gradient-to-tr from-red-800 to-app-blue-200" : "mobile:hidden bg-transparent"
            } laptop:gap-2 mobile:gap-16 items-center laptop:flex laptop:flex-row-reverse mobile:flex-col mobile:w-screen laptop:w-fit mobile:h-screen laptop:h-fit laptop:overflow-hidden mobile:fixed laptop:relative top-0 left-0 mobile:pt-10 laptop:pt-0 z-30`}
        >
          <div className="flex flex-row justify-end mobile:w-full laptop:w-fit mobile:pb-6 laptop:pb-0">
            <X
              size={32}
              color="white"
              className="mr-5 laptop:hidden"
              onClick={() => setMenuState(false)}
            />
          </div>
          <div className="text-white flex flex-row items-center gap-3 laptop:border-l mobile:border-none border-white pl-3">
            <span>PT</span>
            <Switch
              checked={enabled}
              onChange={() => changeLanguage()}
              className={`${enabled ? 'bg-amber-400' : 'bg-amber-500'} relative inline-flex w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9' : 'translate-x-0'} pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <span>EN</span>
          </div>
          <div className="text-white flex gap-3">
            <FacebookLogo weight="fill" size={20} />
            <TwitterLogo weight="fill" size={20} />
            <LinkedinLogo weight="fill" size={20} />
          </div>
          <nav
            className="flex gap-6 laptop:flex-row mobile:flex-col mobile:text-xl laptop:text-sm text-center mobile:min-h-[calc(100vh-270px)] laptop:min-h-fit pr-2 laptop:mr-10"
          >
            <Link
              href="/"
              className={currentPath == "/" ? "text-amber-400 border-b border-amber-400 pb-1" : "text-white hover:text-amber-400 hover:border-b hover:border-amber-400"}
            >
              Página inicial
            </Link>
            <Link
              href="/about"
              className={currentPath == "/about" ? "text-amber-400 border-b border-amber-400 pb-1" : "text-white hover:text-amber-400 hover:border-b hover:border-amber-400"}
            >
              Sobre
            </Link>
            <Link
              href="/services"
              className={currentPath == "/services" ? "text-amber-400 border-b border-amber-400 pb-1" : "text-white hover:text-amber-400 hover:border-b hover:border-amber-400"}
            >
              Serviços
            </Link>
            <Link
              href="/portfolio"
              className={currentPath == "/portfolio" ? "text-amber-400 border-b border-amber-400 pb-1" : "text-white hover:text-amber-400 hover:border-b hover:border-amber-400"}
            >
              Portfólio
            </Link>
            <Link
              href="/contact"
              className={currentPath == "/contact" ? "text-amber-400 border-b border-amber-400 pb-1" : "text-white hover:text-amber-400 hover:border-b hover:border-amber-400"}
            >
              Contacto
            </Link>
          </nav>
        </div>
        <List
          size={32}
          color="white"
          className="mr-5 laptop:hidden"
          onClick={() => setMenuState(true)}
        />
      </section>
    </header>
  );
};
