import Card from '@/components/Card'
const CardsGrid = ({items}) => {
  return (
    <section className='flex items-center flex-col gap-10 px-10 py-20 max-w-6xl mx-auto ' >
      <h3 className='text-3xl font-bold text-[#9B6A6C]'>Recetas</h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          {items?.map(({id, name, rating, image, difficulty}, index) =>
          <Card key={index} name={name} rating={rating} image={image} difficulty={difficulty} id={id}  />
          )}
      </div>
    </section>
  )
}

export default CardsGrid
