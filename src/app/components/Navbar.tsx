import Link from "next/link"

function Navbar() {
    return(
        <nav className='fixed topp-0 w-full flex items-center py-2 px-8 justfy-between z-50 bg-slate-800 text-gray-300'>
          <Link href='/' className="uppercase font-bold text-nd h-12 flex items-center">
            Home store
          </Link>
        </nav>
    )
}

export default Navbar;