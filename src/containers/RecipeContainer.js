'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
const RecipeContainer=({id})=>{
    const [item, setItem]= useState({})//objeto vacio
    const[notFound, setNotFound]= useState(false)

    //para traer datos
    const handleGetRecipe=async ()=>{
        try{
            const response=await axios.get(`https://dummyjson.com/recipe/${id}`)
            const data= response.data;//donde data es el nombre del array que contiene todo
            setItem(data);//le envio la informacion a item

        } catch(error){
            console.log(error)
            setNotFound(true);
        }
    };
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        handleGetRecipe();
    },[]);

    return(
        <section className="bg-white min-[980px]:bg-[url('/assets/images/2026-recetas-detalle.jpg')] bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center justify-center pt-5 pb-5">
            <article className='flex items-center justify-center p-2 w-4/5 mx-auto gap-20'>
                <div className='flex flex-col'>
                    <h2 className=' font-rowdies text-4xl text-[#475841]'>{item.name}</h2>
                    <div className='flex flex-col p-3 rounded-xl shadow-lg mt-5'>
                        <h3 className='font-crimson text-2xl text-[#736a6e]'>Ingredients</h3>
                        <ul className="grid grid-cols-2 gap-x-10 gap-y-2 font-nunito mt-4">
                            {item.ingredients?.map((ingrediente, index) => {
                                return <li key={index} className="list-disc ml-5 text-[#736a6e]">{ingrediente}</li>
                            })}
                        </ul>
                    </div>
                    <h3 className='mt-5 font-crimson text-2xl text-[#475841] font-bold'>Instructions</h3>
                    <ol className='pr-20'>
                        {item.instructions?.map((paso,index)=>{
                            return <li key={index}>{paso}</li>
                        })}
                    </ol>
                </div>
                <div className=' hidden min-[980px]:block'>
                    <div className="h-90 w-90 overflow-hidden rounded-full">
                        {item.image && (
                        <Image 
                            src={item.image} 
                            alt={item.name} 
                            width={600}   
                            height={600}
                            className='object-cover transition-transform duration-500 hover:scale-105'  
                        />
                        )}
                    </div>
                    <div className='flex gap-5 items-center justify-center mt-5 text-white'>
                        <p>Rating: {item.rating}</p>
                        <p>Difficulty: {item.difficulty}</p>
                    </div>
                </div>
            </article>
            
        </section>
    )
}
export default RecipeContainer;