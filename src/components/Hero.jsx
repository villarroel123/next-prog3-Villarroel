import Image from 'next/image';
const Hero=()=>{


    return(
        <section className="flex justify-center items center h-screen w-full bg-[url('/assets/images/2026-recetas-hero.jpg')] bg-cover bg-center bg-no-repeat">
            <div className='flex justify-center items-center gap-4 w-4/5'>
                <div className='md:pr-54 w-3/5 md:w-[60%] px-0'>
                    <h1 className='text-5xl font-crimson font-bold text-[#432b38]'>Deliciosas comidas estan esperando por vos.</h1>
                    <p className='text-[#736a6e] mt-8 mb-8 font-nunito text-xl'>Descubrí recetas fáciles y deliciosas para cada ocasión. Inspirate, probá nuevos sabores y disfrutá cocinar todos los días.</p>
                    <button className='px-10 py-1 bg-[#432b38] text-white font-nunito rounded-2xl hover:border-transparent hover:bg-[#9AB87A] transition-colors cursor-pointer'>Menú</button>
                </div>
                <div className='hidden md:flex gap-1 md:w-[40%]'>
                    <div className='flex flex-col w-1/2 gap-1'>
                        <div className='h-40 overflow-hidden relative w-full'>
                            <Image 
                                src="/assets/images/2025-recetas-home-hero-01.jpg"
                                alt= ""
                                fill
                                className='object-cover w-full h-full'  
                            />
                        </div>
                        <div className='h-40 overflow-hidden relative w-full'>
                            <Image 
                                src="/assets/images/2025-recetas-home-hero-03.jpg"
                                alt= ""
                                fill
                                className='object-cover'  
                            />
                        </div>
                    </div>
                    <div className='overflow-hidden relative w-1/2 h-80'>
                        <Image 
                            src="/assets/images/2025-recetas-home-hero-04.jpg"
                            alt= ""
                            fill
                            className='object-cover'  
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Hero