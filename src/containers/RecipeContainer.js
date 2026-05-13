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
        <section>
            <article>
                <div>
                    <h2>{item.name}</h2>
                    <div>
                        <h3>Ingredientes</h3>
                        <ul>
                            {item.ingredients.map((ingrediente,index)=>{
                                <li key={index}>{ingrediente}</li>
                            })}
                        </ul>
                    </div>
                    <h3>Instrucciones</h3>
                    <ol>
                        {item.instructions.map((paso,index)=>{
                            <li key={index}>{paso}</li>
                        })}
                    </ol>
                </div>
                <div>
                    <Image src={item.image} alt={item.name}/>
                    <div>
                        <p>{item.rating}</p>
                        <p>{item.difficulty}</p>
                    </div>
                </div>
            </article>
        </section>
    )
}