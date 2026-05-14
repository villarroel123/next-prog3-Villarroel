'use client'
import CardsGrid from "@/components/CardsGrid";
import Hero from "@/components/Hero";
import axios from 'axios';
import { useState, useEffect } from "react";

const HomeContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleGetItems = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/recipes?limit=0');
      const data = response.data.recipes;
      console.log(data);
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.log('Hubo un error', error);
      setError(true);
      setErrorMsg('Hubo un error');
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleGetItems();
  }, []);
console.log("Estado de items:", items);
  return (
    <div>
      <Hero/>
      <section className=''>
        <CardsGrid items={items} />
        {error !== '' && <div>{errorMsg}</div>}
      </section>
    </div>
  );
};

export default HomeContainer;
