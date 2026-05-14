import Link from 'next/link';
const NavBar=()=>{
    const items= [
        {
            name:"Home",
            link: "/"
        },
         {
            name:"About",
            link: "/"
        },
         {
            name:"Categories",
            link: "/"
        }
    ]
    const redes = [
        { name: "facebook", icon: "fa-facebook", link: "https://facebook.com" },
        { name: "whatsapp", icon: "fa-whatsapp", link: "https://wa.me/tu-numero" },
        { name: "instagram", icon: "fa-instagram", link: "https://instagram.com" },
    ];
    return(
        <header className="flex justify-center items-center pt-5 pb-5 bg-[#432b38] shadow-md">
            <div className='flex justify-between items-center w-4/5'>
                <div className=" text-xl font-rowdies text-white hover:text-[#736a6e]">
                    <Link href="/">Kichenly</Link>
                </div>
                <nav className=''>
                    <ul className="flex gap-6 text-white font-nunito">
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={item.link} 
                                    className="hover:text-[#736a6e] transition-colors cursor-pointer">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <ul className="flex gap-6 items-center">
                        {redes.map((red, index) => (
                            <li key={index}>
                                <a 
                                    href={red.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xl text-white hover:text-[#736a6e] transition-colors"
                                >
                                    <i className={`fa-brands ${red.icon}`}></i>
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        </header>
    )

}

export default NavBar;