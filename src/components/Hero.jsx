import Image from 'next/image';
const Hero=()=>{


    return(
        <section className="flex justify-center items center h-screen w-full bg-[url('/assets/images/2026-recetas-hero.jpg')] ">
            <div className='flex justify-center items-center gap-40 w-4/5'>
                <div className='pr-30'>
                    <h1 className='text-4xl'>Deliciosas comidas estan esperando por vos.</h1>
                    <p>Descubrí recetas fáciles y deliciosas para cada ocasión. Inspirate, probá nuevos sabores y disfrutá cocinar todos los días.</p>
                    <button>Menú</button>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <Image 
                                src="/assets/images/2025-recetas-home-hero-01.jpg"
                                alt= ""
                                width={100}   
                                height={100}
                                className='object-cover'  
                            />
                        </div>
                        <div>
                            <Image 
                                src="/assets/images/2025-recetas-home-hero-03.jpg"
                                alt= ""
                                width={100}   
                                height={100}
                                className='object-cover'  
                            />
                        </div>
                    </div>
                    <div>
                        <Image 
                            src="/assets/images/2025-recetas-home-hero-04.jpg"
                            alt= ""
                            width={100}   
                            height={100}
                            className='object-cover'  
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Hero