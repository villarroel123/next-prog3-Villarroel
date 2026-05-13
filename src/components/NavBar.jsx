import Link from 'next/link';
const NavBar=()=>{
    const items= [
        {
            name:"Home",
            link: "/"
        },
         {
            name:"About",
            link: "/about"
        },
         {
            name:"Receta",
            link: "/receta"
        }
    ]
    return(
        <header className="flex justify-between items-center p-5 bg-white shadow-md">
           <div className="font-bold text-xl">
                <Link href="/">Kichenly</Link>
            </div>
            <nav>
                <ul className="flex gap-6">
                    {items.map((item, index)=>(
                    <li key={index} className="hover:text-blue-500 transition-colors">{item.name}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )

}

export default NavBar;