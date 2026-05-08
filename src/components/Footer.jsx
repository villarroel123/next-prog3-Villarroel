const Footer=()=>{
    
    const redes = [
        { name: "facebook", icon: "fa-facebook", link: "https://facebook.com" },
        { name: "whatsapp", icon: "fa-whatsapp", link: "https://wa.me/tu-numero" },
        { name: "instagram", icon: "fa-instagram", link: "https://instagram.com" },
    ];

    return(
        <footer className="flex flex-col items-center justify-center bg-gray-900 text-white py-10">
            <div className="flex flex-col items-center justify-center gap-4">
                <h3 className="text-2xl font-bold text-yellow-500">Kichenly</h3>
                <p className="text-gray-400 text-center">
                    Hacé de cada comida un momento especial.
                </p>
                
                <ul className="flex gap-6 mt-4">
                    {redes.map((red, index) => (
                        <li key={index}>
                            <a 
                                href={red.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-yellow-500 transition-colors"
                            >
                                <i className={`fa-brands ${red.icon}`}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer;