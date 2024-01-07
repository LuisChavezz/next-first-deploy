import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"


const navItems = [
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/pricing", label: "Pricing" },
]

export const Navbar = async() => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 m-2 p-2 pl-8 rounded">
      <div className="flex flex-1">
        <Link href="/">
          <HomeIcon size={24} className="mr-2" />
          <span>Home</span>
        </Link>
      </div>

      <div className="flex space-x-10 mr-8">
        { 
          navItems.map(({ path,label }) => (
            <Link key={ path } href={ path }>{ label }</Link>
          ))
        }
      </div>
    </nav>
  )
}
