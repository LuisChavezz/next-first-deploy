'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";


// Style
import style from "./ActiveLink.module.css";


interface ActiveLinkProps {
  path: string;
  label: string;
}

export const ActiveLink = ({ path, label }: ActiveLinkProps) => {

  const pathname = usePathname();

  return (
    <Link 
      className={ `${ style.link } ${ (pathname === path) && style['active-link'] } `}
      href={ path }
    >
      { label }
    </Link>
  )
}
