import { useState } from 'react'
import Link from 'next/link';
function NavLink({to, children}) {
    return <Link href={to} className={`mx-4`}>
        {children}
    </Link>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20 " style={{zIndex:"99999999999"}}> {/*logo container*/}
                <Link href="/"><a className="text-xl font-semibold">DummyThings</a></Link>
            </div>
            <div className="flex flex-col ml-4">
            <Link href="/service" onClick={() => setTimeout(() => {setOpen(!open)}, 100)} passHref={true}>
               <a className="text-xl font-medium my-4">Service</a>   
                </Link>
                <Link  href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)} passHref={true}>
                <a className="text-xl font-medium my-4">About Us</a> 
                </Link>
                <Link href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)} passHref={true}>
               <a className="text-xl font-medium my-4">Contact</a>   
                </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-sm bg-white px-4 py-4 h-20 items-center z-50">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <Link href="/"><a className="text-xl font-semibold">DummyThings</a></Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                <NavLink to="/service">
                   <a className="text-xl font-medium my-4 mx-4">Service</a> 
                    </NavLink>
                    <NavLink to="/contact">
                    <a className="text-xl font-medium my-4 mx-4">Contact</a>  
                    </NavLink>
                    <NavLink to="/about">
                    <a className="text-xl font-medium my-4 mx-4">About</a>   
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}